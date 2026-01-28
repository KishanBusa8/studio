'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowLeft, Shield, Smartphone, Lock, Mail, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

function PrivacyPolicyNoDataContent() {
    const searchParams = useSearchParams();
    const appName = searchParams.get('appname') || 'Our Application';

    const lastUpdated = 'January 28, 2026';
    const developerName = 'Kishan Busa';
    const developerEmail = 'kishanbusa08@gmail.com';
    const websiteUrl = 'https://kishanbusa.com';

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 mb-6">
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-primary font-semibold mb-2">
                            {appName}
                        </p>
                        <p className="text-lg text-muted-foreground mb-4">
                            For Android & iOS Applications
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                            <Calendar className="w-4 h-4" />
                            <span>Last Updated: {lastUpdated}</span>
                        </div>
                    </div>

                    {/* No Data Collection Highlight */}
                    <div className="mb-10 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
                        <div className="flex items-center gap-3 mb-3">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            <h3 className="text-lg font-semibold text-foreground">No Data Collection</h3>
                        </div>
                        <p className="text-muted-foreground">
                            This application <strong>does NOT collect, store, or transmit any personal data</strong>.
                            No account creation, authentication, or user data is required to use this app.
                        </p>
                    </div>

                    {/* Policy Content */}
                    <div className="space-y-10 md:space-y-12">
                        {/* Introduction */}
                        <PolicySection
                            icon={<Smartphone className="w-5 h-5" />}
                            title="Introduction"
                        >
                            <p>
                                Welcome to <strong>{appName}</strong>. This Privacy Policy describes our data practices
                                for this mobile application developed and published by <strong>{developerName}</strong>.
                            </p>
                            <p>
                                We are committed to protecting your privacy. This application is designed to work
                                entirely on your device without collecting, storing, or transmitting any personal
                                information to external servers.
                            </p>
                        </PolicySection>

                        {/* No Data Collection */}
                        <PolicySection
                            icon={<Shield className="w-5 h-5" />}
                            title="Data We Collect"
                        >
                            <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <h4 className="font-semibold text-foreground text-lg">We Do NOT Collect Any Personal Data</h4>
                                </div>
                                <p className="text-muted-foreground">
                                    <strong>{appName}</strong> does not collect, store, or share any personal information.
                                    Specifically, we do NOT collect:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                    <li>Names, email addresses, or contact information</li>
                                    <li>Location data or GPS information</li>
                                    <li>Device identifiers or advertising IDs</li>
                                    <li>Usage analytics or behavioral data</li>
                                    <li>Photos, files, or any content from your device</li>
                                    <li>Any personally identifiable information (PII)</li>
                                </ul>
                            </div>
                        </PolicySection>

                        {/* Local Data Only */}
                        <PolicySection
                            icon={<Lock className="w-5 h-5" />}
                            title="How The App Works"
                        >
                            <p>
                                <strong>{appName}</strong> operates entirely on your device:
                            </p>
                            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
                                <li>
                                    <strong className="text-foreground">Offline Functionality:</strong> The app works
                                    without requiring an internet connection for its core features
                                </li>
                                <li>
                                    <strong className="text-foreground">Local Storage Only:</strong> Any data or preferences
                                    you set are stored locally on your device and never transmitted
                                </li>
                                <li>
                                    <strong className="text-foreground">No Account Required:</strong> You can use all
                                    features without creating an account or signing in
                                </li>
                                <li>
                                    <strong className="text-foreground">No Tracking:</strong> We do not track your usage,
                                    behavior, or activities within the app
                                </li>
                            </ul>
                        </PolicySection>

                        {/* Third-Party Services */}
                        <PolicySection
                            icon={<Shield className="w-5 h-5" />}
                            title="Third-Party Services"
                        >
                            <p>
                                This application may include the following third-party services:
                            </p>

                            <div className="mt-6 space-y-4">
                                <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                                    <h5 className="font-medium text-foreground mb-2">Google Play Services (Android)</h5>
                                    <p className="text-sm text-muted-foreground">
                                        Required for app distribution on Android. Google may collect basic app crash
                                        data. See <a href="https://policies.google.com/privacy" target="_blank"
                                            rel="noopener noreferrer" className="text-primary hover:underline">Google&apos;s Privacy Policy</a>.
                                    </p>
                                </div>

                                <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                                    <h5 className="font-medium text-foreground mb-2">Apple Services (iOS)</h5>
                                    <p className="text-sm text-muted-foreground">
                                        Required for app distribution on iOS. Apple may collect basic diagnostic data
                                        if you&apos;ve opted in. See <a href="https://www.apple.com/legal/privacy/" target="_blank"
                                            rel="noopener noreferrer" className="text-primary hover:underline">Apple&apos;s Privacy Policy</a>.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 text-sm text-muted-foreground">
                                Note: These platform services operate independently of our app. We do not receive
                                or have access to any data collected by these platforms.
                            </p>
                        </PolicySection>

                        {/* Permissions */}
                        <PolicySection
                            icon={<Lock className="w-5 h-5" />}
                            title="Device Permissions"
                        >
                            <p>
                                <strong>{appName}</strong> may request certain device permissions to function properly.
                                These permissions are used solely for the app&apos;s intended functionality:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                <li>Permissions are only requested when needed for specific features</li>
                                <li>Data accessed through permissions stays on your device</li>
                                <li>No data is transmitted to external servers</li>
                                <li>You can revoke permissions at any time through device settings</li>
                            </ul>
                        </PolicySection>

                        {/* Children's Privacy */}
                        <PolicySection
                            icon={<Shield className="w-5 h-5" />}
                            title="Children's Privacy"
                        >
                            <p>
                                Since <strong>{appName}</strong> does not collect any personal data, it is safe for
                                users of all ages. We do not knowingly collect information from anyone, including
                                children under 13.
                            </p>
                        </PolicySection>

                        {/* Data Security */}
                        <PolicySection
                            icon={<Lock className="w-5 h-5" />}
                            title="Data Security"
                        >
                            <p>
                                Since we do not collect or store any personal data, there is no personal information
                                at risk. Any local data stored on your device is protected by your device&apos;s
                                built-in security features.
                            </p>
                            <p>
                                Uninstalling the app will remove all locally stored data associated with the application.
                            </p>
                        </PolicySection>

                        {/* Changes to Policy */}
                        <PolicySection
                            icon={<Calendar className="w-5 h-5" />}
                            title="Changes to This Policy"
                        >
                            <p>
                                We may update this Privacy Policy if the app&apos;s functionality changes. Any changes
                                will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage
                                you to review this policy periodically.
                            </p>
                        </PolicySection>

                        {/* Contact */}
                        <PolicySection
                            icon={<Mail className="w-5 h-5" />}
                            title="Contact Us"
                        >
                            <p>
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="mt-6 p-6 bg-muted/30 rounded-2xl border border-border/50">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold text-foreground">Developer:</span>
                                        <span className="text-muted-foreground">{developerName}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold text-foreground">Email:</span>
                                        <a href={`mailto:${developerEmail}`} className="text-primary hover:underline">
                                            {developerEmail}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold text-foreground">Website:</span>
                                        <a href={websiteUrl} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                                            {websiteUrl}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </PolicySection>

                        {/* Consent */}
                        <div className="mt-12 p-8 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-3xl border border-green-500/20 text-center">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Your Consent</h3>
                            <p className="text-muted-foreground">
                                By using <strong>{appName}</strong>, you consent to this Privacy Policy. Since we
                                don&apos;t collect any data, using this app poses no privacy risk to you.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border/50 mt-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} {developerName}. All rights reserved.
                        </p>
                        <Link href="/" className="text-sm text-primary hover:underline">
                            Visit Portfolio
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Policy Section Component
function PolicySection({
    icon,
    title,
    children
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
            <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                    {icon}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h2>
            </div>
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground space-y-4">
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPolicyNoDataPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-pulse text-muted-foreground">Loading...</div>
            </div>
        }>
            <PrivacyPolicyNoDataContent />
        </Suspense>
    );
}
