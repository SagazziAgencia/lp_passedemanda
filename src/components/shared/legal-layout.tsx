'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; // Using Lucide icon, assuming available
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { ROUTES } from '@/lib/routes';

interface TableOfContentsItem {
    id: string;
    label: string;
}

interface LegalLayoutProps {
    title: string;
    subtitle: string;
    lastUpdated: string;
    toc: TableOfContentsItem[];
    children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, lastUpdated, toc, children }: LegalLayoutProps) {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 dark">
            <Header onRegisterClick={() => setIsRegistrationModalOpen(true)} />

            {/* Header Section */}
            <div className="relative border-b border-border bg-muted/20 pt-24 pb-16">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href={ROUTES.HOME} className="hover:text-foreground transition-colors">Início</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground">Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">{title}</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <main className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sticky Sidebar (Table of Contents) */}
                    <aside className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-24 space-y-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Nesta página</p>
                            <nav className="flex flex-col space-y-1">
                                {toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all text-left block"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="pt-8 mt-8 border-t border-border">
                                <p className="text-xs text-muted-foreground mb-2">Última atualização:</p>
                                <p className="text-sm text-foreground font-medium">{lastUpdated}</p>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-8 lg:col-start-5">
                        <article className="max-w-none text-muted-foreground 
                            [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:tracking-tight [&_h2:first-child]:mt-0
                            [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-muted-foreground
                            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-2
                            [&_li]:text-muted-foreground [&_li]:marker:text-primary
                            [&_strong]:text-foreground [&_strong]:font-bold
                            [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-muted/30 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-foreground
                            [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80 transition-colors">
                            {children}
                        </article>

                        {/* Mobile Last Updated (Visible only on mobile) */}
                        <div className="mt-12 pt-8 border-t border-border lg:hidden">
                            <p className="text-sm text-muted-foreground">Última atualização: <span className="text-foreground">{lastUpdated}</span></p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Note: Registration Modal would ideally be moved to a context or global layout to avoid prop drilling, 
                 but for checking 'mock' links in header, the passed prop is fine for now if Header needs it. */}
        </div>
    );
}
