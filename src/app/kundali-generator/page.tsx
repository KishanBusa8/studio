"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, Sparkles, X, Loader2, MapPin, Search } from "lucide-react";

interface PlaceResult {
    name: string;
    county?: string;
    state?: string;
    country?: string;
    lat: number;
    lng: number;
}

const BASE_URL =
    "https://comparable-vivyanne-marksolutions-86b432b2.koyeb.app";

const CHART_TYPES = [
    { key: "lagna", label: "Lagna Chart", description: "Ascendant / Birth Chart" },
    { key: "navamsa", label: "Navamsa Chart", description: "D-9 Divisional Chart" },
    { key: "moon", label: "Moon Chart", description: "Chandra Kundali" },
    { key: "sun", label: "Sun Chart", description: "Surya Kundali" },
    { key: "dashamsha", label: "Dashamsha Chart", description: "D-10 Career Chart" },
] as const;

interface FormData {
    birth_date: string;
    birth_time: string;
    lat: string;
    lng: string;
    language: string;
}

function buildImageUrl(form: FormData, chartType: string): string {
    const params = new URLSearchParams({
        birth_date: form.birth_date,
        birth_time: form.birth_time,
        lat: form.lat,
        lon: form.lng,
        tz: "Asia/Kolkata",
        language: form.language,
        chart_type: chartType,
    });
    return `${BASE_URL}/api/kundali-image?${params.toString()}`;
}

// ─── Fullscreen Dialog ──────────────────────────────────────────────
function FullscreenDialog({
    open,
    onClose,
    src,
    title,
}: {
    open: boolean;
    onClose: () => void;
    src: string;
    title: string;
}) {
    return (
        <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] w-fit p-0 border-none bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden [&>button]:hidden">
                <DialogTitle className="sr-only">{title}</DialogTitle>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-50 rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors"
                    aria-label="Close"
                >
                    <X className="h-5 w-5 text-white" />
                </button>
                <div className="flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt={title}
                        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}

// ─── Chart Card ─────────────────────────────────────────────────────
function ChartCard({
    chartType,
    label,
    description,
    src,
    index,
    onOpen,
}: {
    chartType: string;
    label: string;
    description: string;
    src: string;
    index: number;
    onOpen: () => void;
}) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div
            className="group relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={onOpen}
        >
            {/* Header */}
            <div className="px-5 pt-5 pb-3">
                <h3 className="text-lg font-headline font-semibold text-primary">
                    {label}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
            </div>

            {/* Image container */}
            <div className="relative mx-4 mb-4 rounded-xl overflow-hidden bg-secondary/30 aspect-square">
                {!loaded && !error && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-3">
                            <Loader2 className="h-8 w-8 text-primary animate-spin" />
                            <span className="text-xs text-muted-foreground">
                                Generating {chartType}…
                            </span>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-sm text-destructive/80">Failed to load chart</p>
                    </div>
                )}

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt={`${label} Kundali Chart`}
                    className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-[1.03] ${loaded ? "opacity-100" : "opacity-0"
                        }`}
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                        Click to enlarge
                    </span>
                </div>
            </div>
        </div>
    );
}

// ─── Main page ──────────────────────────────────────────────────────
export default function KundaliGeneratorPage() {
    const [form, setForm] = useState<FormData>({
        birth_date: "",
        birth_time: "",
        lat: "",
        lng: "",
        language: "ENG",
    });

    const [chartUrls, setChartUrls] = useState<
        { key: string; label: string; description: string; url: string }[] | null
    >(null);

    const [fullscreen, setFullscreen] = useState<{
        src: string;
        title: string;
    } | null>(null);

    const [errors, setErrors] = useState<Record<string, string>>({});

    // ─── Place search state ─────────────────────────────────
    const [placeQuery, setPlaceQuery] = useState("");
    const [placeResults, setPlaceResults] = useState<PlaceResult[]>([]);
    const [placeLoading, setPlaceLoading] = useState(false);
    const [showPlaceResults, setShowPlaceResults] = useState(false);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const placeWrapperRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (placeWrapperRef.current && !placeWrapperRef.current.contains(e.target as Node)) {
                setShowPlaceResults(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handlePlaceSearch = useCallback((query: string) => {
        setPlaceQuery(query);
        setShowPlaceResults(true);

        if (debounceRef.current) clearTimeout(debounceRef.current);

        if (!query.trim()) {
            setPlaceResults([]);
            setPlaceLoading(false);
            return;
        }

        setPlaceLoading(true);
        debounceRef.current = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://photon.komoot.io/api?q=${encodeURIComponent(query)}`
                );
                const data = await res.json();
                const results: PlaceResult[] = (data.features || [])
                    .slice(0, 5)
                    .map((f: { properties: { name?: string; county?: string; state?: string; country?: string }; geometry: { coordinates: number[] } }) => ({
                        name: f.properties.name || "",
                        county: f.properties.county,
                        state: f.properties.state,
                        country: f.properties.country,
                        lat: f.geometry.coordinates[1],
                        lng: f.geometry.coordinates[0],
                    }));
                setPlaceResults(results);
            } catch {
                setPlaceResults([]);
            } finally {
                setPlaceLoading(false);
            }
        }, 500);
    }, []);

    const handlePlaceSelect = useCallback((place: PlaceResult) => {
        setPlaceQuery(place.name + (place.state ? `, ${place.state}` : "") + (place.country ? `, ${place.country}` : ""));
        setForm((prev) => ({
            ...prev,
            lat: String(place.lat),
            lng: String(place.lng),
        }));
        setPlaceResults([]);
        setShowPlaceResults(false);
        setErrors((prev) => {
            const next = { ...prev };
            delete next.lat;
            delete next.lng;
            return next;
        });
    }, []);

    const validate = useCallback((): boolean => {
        const errs: Record<string, string> = {};

        if (!/^\d{4}-\d{2}-\d{2}$/.test(form.birth_date)) {
            errs.birth_date = "Enter a valid date (YYYY-MM-DD)";
        }
        if (!/^\d{2}:\d{2}$/.test(form.birth_time)) {
            errs.birth_time = "Enter a valid time (HH:MM)";
        }
        if (!form.lat || isNaN(Number(form.lat))) {
            errs.lat = "Enter a valid latitude";
        }
        if (!form.lng || isNaN(Number(form.lng))) {
            errs.lng = "Enter a valid longitude";
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    }, [form]);

    const handleGenerate = useCallback(() => {
        if (!validate()) return;

        const urls = CHART_TYPES.map((t) => ({
            key: t.key,
            label: t.label,
            description: t.description,
            url: buildImageUrl(form, t.key),
        }));
        setChartUrls(urls);
    }, [form, validate]);

    const handleChange = (field: keyof FormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
        });
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/[0.04] blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/[0.03] blur-[120px]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
                <div className="container flex h-16 items-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-sm hidden sm:inline">Back</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <h1 className="font-headline text-xl font-bold text-primary">
                            Kundali Generator
                        </h1>
                    </div>
                </div>
            </header>

            <main className="container relative z-10 py-10 md:py-16">
                {/* ─── Form Card ───────────────────────────────────── */}
                <section className="max-w-2xl mx-auto animate-fade-in">
                    <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-primary/[0.03]">
                        <div className="mb-6">
                            <h2 className="text-2xl font-headline font-bold text-primary">
                                Birth Details
                            </h2>
                            <p className="text-sm text-muted-foreground mt-1">
                                Enter your birth information to generate Vedic astrology charts
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Birth Date */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="birth_date"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Birth Date
                                </Label>
                                <Input
                                    id="birth_date"
                                    type="date"
                                    value={form.birth_date}
                                    onChange={(e) => handleChange("birth_date", e.target.value)}
                                    className={`bg-secondary/40 border-border/60 focus:border-primary/60 transition-colors ${errors.birth_date ? "border-destructive" : ""
                                        }`}
                                />
                                {errors.birth_date && (
                                    <p className="text-xs text-destructive">{errors.birth_date}</p>
                                )}
                            </div>

                            {/* Birth Time */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="birth_time"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Birth Time (24h)
                                </Label>
                                <Input
                                    id="birth_time"
                                    type="time"
                                    value={form.birth_time}
                                    onChange={(e) => handleChange("birth_time", e.target.value)}
                                    className={`bg-secondary/40 border-border/60 focus:border-primary/60 transition-colors ${errors.birth_time ? "border-destructive" : ""
                                        }`}
                                />
                                {errors.birth_time && (
                                    <p className="text-xs text-destructive">{errors.birth_time}</p>
                                )}
                            </div>

                            {/* Birth Place */}
                            <div className="space-y-2 sm:col-span-2 relative" ref={placeWrapperRef}>
                                <Label
                                    htmlFor="birth_place"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Birth Place
                                </Label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    <Input
                                        id="birth_place"
                                        type="text"
                                        placeholder="Search city or town..."
                                        value={placeQuery}
                                        onChange={(e) => handlePlaceSearch(e.target.value)}
                                        onFocus={() => placeResults.length > 0 && setShowPlaceResults(true)}
                                        autoComplete="off"
                                        className="pl-9 bg-secondary/40 border-border/60 focus:border-primary/60 transition-colors"
                                    />
                                    {placeLoading && (
                                        <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" />
                                    )}
                                </div>

                                {/* Autocomplete dropdown */}
                                {showPlaceResults && placeResults.length > 0 && (
                                    <div className="absolute z-50 top-full left-0 right-0 mt-1 rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden">
                                        {placeResults.map((place, i) => (
                                            <button
                                                key={`${place.lat}-${place.lng}-${i}`}
                                                type="button"
                                                onClick={() => handlePlaceSelect(place)}
                                                className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-primary/10 transition-colors border-b border-border/30 last:border-b-0"
                                            >
                                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-foreground truncate">
                                                        {place.name}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground truncate">
                                                        {[place.county, place.state, place.country]
                                                            .filter(Boolean)
                                                            .join(", ")}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Latitude */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="lat"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Latitude
                                </Label>
                                <Input
                                    id="lat"
                                    type="number"
                                    step="0.0001"
                                    placeholder="e.g. 22.3039"
                                    value={form.lat}
                                    onChange={(e) => handleChange("lat", e.target.value)}
                                    className={`bg-secondary/40 border-border/60 focus:border-primary/60 transition-colors ${errors.lat ? "border-destructive" : ""
                                        }`}
                                />
                                {errors.lat && (
                                    <p className="text-xs text-destructive">{errors.lat}</p>
                                )}
                            </div>

                            {/* Longitude */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="lng"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Longitude
                                </Label>
                                <Input
                                    id="lng"
                                    type="number"
                                    step="0.0001"
                                    placeholder="e.g. 70.8022"
                                    value={form.lng}
                                    onChange={(e) => handleChange("lng", e.target.value)}
                                    className={`bg-secondary/40 border-border/60 focus:border-primary/60 transition-colors ${errors.lng ? "border-destructive" : ""
                                        }`}
                                />
                                {errors.lng && (
                                    <p className="text-xs text-destructive">{errors.lng}</p>
                                )}
                            </div>


                        </div>

                        {/* Generate button */}
                        <Button
                            onClick={handleGenerate}
                            className="w-full mt-6 h-12 text-base font-semibold bg-gradient-to-r from-primary via-purple-500 to-primary hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 rounded-xl btn-hover"
                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Generate Kundali Charts
                        </Button>
                    </div>
                </section>

                {/* ─── Charts Grid ─────────────────────────────────── */}
                {chartUrls && (
                    <section className="mt-12 md:mt-16">
                        <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary text-center mb-8">
                            Your Kundali Charts
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {chartUrls.map((chart, i) => (
                                <ChartCard
                                    key={chart.key}
                                    chartType={chart.key}
                                    label={chart.label}
                                    description={chart.description}
                                    src={chart.url}
                                    index={i}
                                    onOpen={() =>
                                        setFullscreen({ src: chart.url, title: chart.label })
                                    }
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* Fullscreen dialog */}
            {fullscreen && (
                <FullscreenDialog
                    open
                    onClose={() => setFullscreen(null)}
                    src={fullscreen.src}
                    title={fullscreen.title}
                />
            )}
        </div>
    );
}
