'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowLeft, Shield, Smartphone, Database, Share2, Lock, Trash2, Mail, Calendar, UserCheck } from 'lucide-react';

function PrivacyPolicyContent() {
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
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                            <Shield className="w-8 h-8 text-primary" />
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

                    {/* Data Collection Notice */}
                    <div className="mb-10 p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl">
                        <div className="flex items-center gap-3 mb-3">
                            <UserCheck className="w-6 h-6 text-blue-500" />
                            <h3 className="text-lg font-semibold text-foreground">Data Collection Notice</h3>
                        </div>
                        <p className="text-muted-foreground">
                            This application <strong>collects and processes user data</strong> as described below.
                            This includes personal information for authentication and app functionality.
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
                                Welcome to <strong>{appName}</strong>. This Privacy Policy describes how we collect,
                                use, and protect your information when you use our mobile application developed and
                                published by <strong>{developerName}</strong>.
                            </p>
                            <p>
                                We are committed to protecting your privacy and ensuring you have a positive experience
                                using our app. By downloading, installing, or using this application, you agree to the
                                terms outlined in this Privacy Policy.
                            </p>
                        </PolicySection>

                        {/* Data Collection */}
                        <PolicySection
                            icon={<Database className="w-5 h-5" />}
                            title="Information We Collect"
                        >
                            <p>
                                <strong>{appName}</strong> collects the following types of information:
                            </p>

                            <h4 className="font-semibold text-foreground mt-6 mb-3">Personal Information</h4>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Name and email address (for account creation and authentication)</li>
                                <li>Account credentials and profile information</li>
                                <li>User-generated content within the app</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h4 className="font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h4>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Device information (model, operating system version)</li>
                                <li>Unique device identifiers</li>
                                <li>App usage statistics and crash reports</li>
                                <li>IP address and general location (country/region level)</li>
                                <li>Session duration and feature usage patterns</li>
                            </ul>

                            <h4 className="font-semibold text-foreground mt-6 mb-3">Sensitive Data</h4>
                            <p>
                                The app may request access to sensitive device features such as camera, microphone,
                                contacts, or storage. These permissions are only requested when necessary for the
                                app&apos;s core functionality and are clearly explained before access is granted.
                            </p>
                        </PolicySection>

                        {/* Purpose of Data Collection */}
                        <PolicySection
                            icon={<Lock className="w-5 h-5" />}
                            title="How We Use Your Information"
                        >
                            <p>We use the information we collect for:</p>
                            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
                                <li><strong className="text-foreground">Account Management:</strong> To create and manage your account, authenticate your identity</li>
                                <li><strong className="text-foreground">Providing Services:</strong> To deliver the functionality you expect from {appName}</li>
                                <li><strong className="text-foreground">Personalization:</strong> To customize your experience based on preferences</li>
                                <li><strong className="text-foreground">Communication:</strong> To send account-related notifications, updates, and support responses</li>
                                <li><strong className="text-foreground">Security:</strong> To detect, prevent, and address security threats and fraud</li>
                                <li><strong className="text-foreground">Analytics:</strong> To improve app performance and user experience</li>
                                <li><strong className="text-foreground">Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                            </ul>
                        </PolicySection>

                        {/* Third-Party Sharing */}
                        <PolicySection
                            icon={<Share2 className="w-5 h-5" />}
                            title="Third-Party Services & Data Sharing"
                        >
                            <p>
                                Our application may use third-party services that collect information:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <ThirdPartyCard
                                    name="Firebase Authentication"
                                    description="For user authentication and account management"
                                    link="https://firebase.google.com/support/privacy"
                                />
                                <ThirdPartyCard
                                    name="Firebase Analytics"
                                    description="For app analytics and crash reporting"
                                    link="https://firebase.google.com/policies/analytics"
                                />
                                <ThirdPartyCard
                                    name="Google AdMob"
                                    description="For displaying advertisements (if applicable)"
                                    link="https://support.google.com/admob/answer/6128543"
                                />
                                <ThirdPartyCard
                                    name="Cloud Storage Services"
                                    description="For secure data storage and backup"
                                    link="#"
                                />
                            </div>

                            <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
                                <p className="text-sm">
                                    <strong>Important:</strong> We do NOT sell, trade, or rent your personal information
                                    to third parties for marketing purposes. Data is only shared with service providers
                                    necessary for app functionality.
                                </p>
                            </div>
                        </PolicySection>

                        {/* Data Retention & Deletion */}
                        <PolicySection
                            icon={<Trash2 className="w-5 h-5" />}
                            title="Data Retention & Deletion"
                        >
                            <p>We retain your information as follows:</p>
                            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
                                <li>Account data is retained while your account is active</li>
                                <li>Upon account deletion, personal data is removed within 30 days</li>
                                <li>Analytics data is anonymized and retained for up to 26 months</li>
                                <li>Crash reports are retained for troubleshooting for up to 90 days</li>
                            </ul>

                            <h4 className="font-semibold text-foreground mt-6 mb-3">Your Rights</h4>
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                                <li>Access and download your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your account and data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Withdraw consent at any time</li>
                            </ul>

                            <p className="mt-4">
                                To exercise any of these rights, please contact us using the information provided below.
                            </p>
                        </PolicySection>

                        {/* Children's Privacy */}
                        <PolicySection
                            icon={<Shield className="w-5 h-5" />}
                            title="Children's Privacy"
                        >
                            <p>
                                {appName} is not directed at children under 13 years of age. We do not knowingly collect
                                personal information from children under 13. If you are a parent or guardian and believe
                                your child has provided us with personal information, please contact us immediately.
                            </p>
                            <p>
                                If we discover that a child under 13 has provided us with personal information, we
                                will delete such information from our servers promptly.
                            </p>
                        </PolicySection>

                        {/* Security */}
                        <PolicySection
                            icon={<Lock className="w-5 h-5" />}
                            title="Data Security"
                        >
                            <p>
                                We implement appropriate security measures to protect your personal information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                <li>Encryption of data in transit using SSL/TLS</li>
                                <li>Secure password hashing and storage</li>
                                <li>Regular security assessments and updates</li>
                                <li>Limited access to personal data by authorized personnel only</li>
                                <li>Secure authentication mechanisms</li>
                            </ul>
                            <p className="mt-4">
                                However, no method of electronic transmission or storage is 100% secure. While we
                                strive to protect your information, we cannot guarantee absolute security.
                            </p>
                        </PolicySection>

                        {/* Changes to Policy */}
                        <PolicySection
                            icon={<Calendar className="w-5 h-5" />}
                            title="Changes to This Policy"
                        >
                            <p>
                                We may update this Privacy Policy from time to time. Changes will be posted on this
                                page with an updated &quot;Last Updated&quot; date. For significant changes, we may notify
                                you through the app or via email. Continued use of {appName} after changes constitutes
                                acceptance of the updated policy.
                            </p>
                        </PolicySection>

                        {/* Contact */}
                        <PolicySection
                            icon={<Mail className="w-5 h-5" />}
                            title="Contact Us"
                        >
                            <p>
                                If you have any questions or requests regarding this Privacy Policy, please contact us:
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
                        <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 text-center">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Your Consent</h3>
                            <p className="text-muted-foreground">
                                By using <strong>{appName}</strong>, you consent to this Privacy Policy and agree to its terms.
                                If you do not agree with this policy, please do not use this application.
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

// Third-Party Card Component
function ThirdPartyCard({
    name,
    description,
    link
}: {
    name: string;
    description: string;
    link: string;
}) {
    return (
        <div className="p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
            <h5 className="font-medium text-foreground mb-1">{name}</h5>
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
            {link !== '#' && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    Privacy Policy →
                </a>
            )}
        </div>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-pulse text-muted-foreground">Loading...</div>
            </div>
        }>
            <PrivacyPolicyContent />
        </Suspense>
    );
}
