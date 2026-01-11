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
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
            <Header onRegisterClick={() => setIsRegistrationModalOpen(true)} />

            {/* Header Section */}
            <div className="relative border-b border-white/10 bg-slate-900/50 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                        <Link href={ROUTES.HOME} className="hover:text-white transition-colors">Início</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-300">Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">{subtitle}</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <main className="container mx-auto px-4 max-w-6xl py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sticky Sidebar (Table of Contents) */}
                    <aside className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-24 space-y-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Nesta página</p>
                            <nav className="flex flex-col space-y-1">
                                {toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="text-sm text-slate-400 hover:text-indigo-400 hover:bg-white/5 px-3 py-2 rounded-lg transition-all text-left block"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="pt-8 mt-8 border-t border-white/5">
                                <p className="text-xs text-slate-500 mb-2">Última atualização:</p>
                                <p className="text-sm text-white font-medium">{lastUpdated}</p>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-8 lg:col-start-5">
                        <article className="max-w-none text-slate-300 
                            [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:tracking-tight [&_h2:first-child]:mt-0
                            [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-slate-300
                            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-2
                            [&_li]:text-slate-300 [&_li]:marker:text-indigo-500
                            [&_strong]:text-white [&_strong]:font-bold
                            [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-500 [&_blockquote]:bg-white/5 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-indigo-200
                            [&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-indigo-300 transition-colors">
                            {children}
                        </article>

                        {/* Mobile Last Updated (Visible only on mobile) */}
                        <div className="mt-12 pt-8 border-t border-white/10 lg:hidden">
                            <p className="text-sm text-slate-500">Última atualização: <span className="text-white">{lastUpdated}</span></p>
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
