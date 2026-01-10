'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
    Search,
    Award,
    Users,
    Zap,
    Shuffle,
    ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PortfolioModal from '@/components/shared/portfolio-modal';
import TalentCard from '@/components/shared/talent-card';
import { MOCK_PROS, SKILL_CATEGORIES, SKILL_TO_CATEGORY } from '@/lib/constants';
import type { Professional } from '@/types';

/**
 * Shuffle array using Fisher-Yates algorithm
 * Ensures fair, random ordering of professionals
 */
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

/**
 * Get category for a professional based on their skills
 */
const getProfessionalCategory = (skills: string[]): string => {
    for (const skill of skills) {
        if (SKILL_TO_CATEGORY[skill as keyof typeof SKILL_TO_CATEGORY]) {
            return SKILL_TO_CATEGORY[skill as keyof typeof SKILL_TO_CATEGORY];
        }
    }
    return 'all';
};

export default function FindProfessionals() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPro, setSelectedPro] = useState<Professional | null>(null);

    const [shuffledPros, setShuffledPros] = useState<Professional[]>([]);

    useEffect(() => {
        setShuffledPros(shuffleArray(MOCK_PROS));
    }, []);

    const filteredPros = useMemo(() => {
        return shuffledPros.filter((pro) => {
            const matchesSearch =
                searchTerm === '' ||
                pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pro.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pro.skills.some((skill) =>
                    skill.toLowerCase().includes(searchTerm.toLowerCase())
                );

            const matchesCategory =
                selectedCategory === 'all' ||
                getProfessionalCategory(pro.skills) === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [shuffledPros, searchTerm, selectedCategory]);

    const handleReshuffle = () => {
        setShuffledPros(shuffleArray(MOCK_PROS));
    };

    const [onlineTalentCount, setOnlineTalentCount] = useState(0);

    useEffect(() => {
        // This should only run on the client after hydration
        setOnlineTalentCount(MOCK_PROS.length);
      }, []);

    return (
        <div className="min-h-screen animate-fade-in container mx-auto px-4 py-8">
            <section className="relative overflow-hidden rounded-2xl mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[80px]" />
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative z-10 px-6 py-10 md:py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                    {onlineTalentCount} talentos online
                                </span>
                            </div>
                            <div className="w-px h-4 bg-white/20" />
                            <div className="flex items-center gap-1.5">
                                <Award className="w-3.5 h-3.5 text-amber-400" />
                                <span className="text-amber-200 text-xs font-bold uppercase tracking-wider">
                                    Verificados
                                </span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-4 tracking-tight">
                            Passe sua demanda para
                            <br className="md:hidden" />
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent/80 via-accent to-primary/80">
                                    os melhores talentos
                                </span>
                                <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -skew-x-12 rounded" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                            Profissionais qualificados, prontos para transformar suas ideias em realidade.
                        </p>

                        <div className="max-w-xl mx-auto">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-0 group-focus-within:opacity-40 blur-lg transition-opacity duration-500" />
                                <div className="relative flex items-center bg-white rounded-xl shadow-2xl overflow-hidden">
                                    <Search className="ml-5 text-muted-foreground w-5 h-5 flex-shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Busque por nome, função ou habilidade..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 w-full px-4 py-4 bg-transparent border-none focus:ring-0 focus:outline-none text-foreground placeholder:text-muted-foreground font-medium"
                                        aria-label="Buscar profissionais"
                                    />
                                    <Button className="m-2 rounded-lg bg-primary hover:bg-primary/90">
                                        <Search className="w-4 h-4 mr-2" />
                                        Buscar
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-8 mt-10 text-sm">
                            <div className="flex items-center gap-2 text-slate-400">
                                <Users />
                                <span><strong className="text-white">{onlineTalentCount}+</strong> profissionais</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-slate-600" />
                            <div className="hidden sm:flex items-center gap-2 text-slate-400">
                                <Zap />
                                <span><strong className="text-white">24h</strong> resposta rápida</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                        {SKILL_CATEGORIES.map((cat) => (
                            <Button
                                key={cat.id}
                                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${selectedCategory === cat.id ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20' : 'bg-card text-secondary-foreground border-border hover:border-muted-foreground'}`}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            onClick={handleReshuffle}
                            className="rounded-xl px-4 py-2.5 text-sm bg-card hover:bg-muted"
                            title="Reordenar aleatoriamente"
                        >
                            <Shuffle className="w-4 h-4" />
                            <span className="hidden sm:inline ml-2">Reordenar</span>
                        </Button>
                        <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">{filteredPros.length}</strong> resultados
                        </span>
                    </div>
                </div>
            </section>

            <section>
                {filteredPros.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        {filteredPros.map((pro, index) => (
                            <TalentCard
                                key={pro.id}
                                professional={pro}
                                onSelect={() => setSelectedPro(pro)}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <Card className="p-16 text-center border-dashed border-2 bg-muted/50">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                            <Search className="w-7 h-7 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                            Nenhum talento encontrado
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Tente ajustar seus filtros ou buscar por outros termos.
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('all');
                            }}
                        >
                            Limpar filtros
                        </Button>
                    </Card>
                )}
            </section>

            <section className="mt-16 mb-8">
                <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent border-0 text-primary-foreground overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-3 text-white">
                                Quer fazer parte?
                            </h2>
                            <p className="text-primary-foreground/80 text-lg max-w-xl">
                                Cadastre-se como profissional e receba demandas de clientes qualificados.
                            </p>
                        </div>
                        <Button
                            size="lg"
                            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-base font-bold shadow-xl flex-shrink-0"
                        >
                            Cadastrar como Talento
                            <ArrowRight />
                        </Button>
                    </div>
                </Card>
            </section>

            {selectedPro && (
                <PortfolioModal
                    professional={selectedPro}
                    open={!!selectedPro}
                    onOpenChange={(isOpen) => !isOpen && setSelectedPro(null)}
                />
            )}
        </div>
    );
};
