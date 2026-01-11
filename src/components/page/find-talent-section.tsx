'use client';
import { Award, Search, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface FindTalentSectionProps {
    searchTerm: string;
    onSearchTermChange: (term: string) => void;
    onlineTalentCount: number;
}

const FindTalentSection: React.FC<FindTalentSectionProps> = ({ searchTerm, onSearchTermChange, onlineTalentCount }) => {
    return (
        <section className="text-center mb-12 py-12 md:py-16 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 via-gray-900/0 to-slate-900/0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[70px]" />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">
                            {onlineTalentCount} TALENTOS ONLINE
                        </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
                            VERIFICADOS
                        </span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4 tracking-tight">
                    Passe sua demanda para <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-primary to-accent/80">
                        os melhores talentos
                    </span>
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                    Profissionais qualificados, prontos para transformar suas ideias em realidade.
                </p>

                <div className="mt-8 max-w-2xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-0 group-focus-within:opacity-40 blur-lg transition-opacity duration-500" />
                        <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/20">
                            <Search className="ml-5 text-slate-400 w-5 h-5 flex-shrink-0" />
                            <input
                                type="text"
                                placeholder="Busque por nome, função ou habilidade..."
                                value={searchTerm}
                                onChange={(e) => onSearchTermChange(e.target.value)}
                                className="flex-1 w-full px-4 py-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-slate-400 font-medium text-white"
                                aria-label="Buscar profissionais"
                            />
                            <Button className="m-1.5 rounded-lg bg-primary hover:bg-primary/90 px-6">
                                <Search className="w-4 h-4 mr-2" />
                                Buscar
                            </Button>
                        </div>
                    </div>
                </div>

                 <div className="flex justify-center items-center gap-8 mt-8 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-medium">12+ profissionais</span>
                    </div>
                     <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="font-medium">24h resposta rápida</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FindTalentSection;
