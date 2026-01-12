'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
    Search,
    ArrowRight,
    Shuffle,
    Users,
    Zap,
    Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TalentCard from '@/components/shared/talent-card';
import PortfolioModal from '@/components/shared/portfolio-modal';
import { MOCK_PROS, SKILL_CATEGORIES, SKILL_TO_CATEGORY, TOTAL_ONLINE_PROFESSIONALS } from '@/lib/constants';
import type { Professional } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

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
        if (SKILL_TO_CATEGORY[skill]) {
            return SKILL_TO_CATEGORY[skill];
        }
    }
    return 'all';
};

interface TalentShowcaseProps {
    onRegisterClick?: () => void;
}

export default function TalentShowcase({ onRegisterClick = () => { } }: TalentShowcaseProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPro, setSelectedPro] = useState<Professional | null>(null);

    // Shuffle professionals on mount for fair display
    const [shuffledPros, setShuffledPros] = useState<Professional[]>([]);

    useEffect(() => {
        setShuffledPros(shuffleArray(MOCK_PROS));
    }, []);

    // Filter professionals based on search and category
    const filteredPros = useMemo(() => {
        return shuffledPros.filter((pro) => {
            // Text search
            const matchesSearch =
                searchTerm === '' ||
                pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pro.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pro.skills.some((skill) =>
                    skill.toLowerCase().includes(searchTerm.toLowerCase())
                );

            // Category filter
            const matchesCategory =
                selectedCategory === 'all' ||
                getProfessionalCategory(pro.skills) === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [shuffledPros, searchTerm, selectedCategory]);

    // Reshuffle function
    const handleReshuffle = () => {
        setShuffledPros(shuffleArray(MOCK_PROS));
    };

    return (
        <div className="w-full text-foreground relative z-0">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 md:py-24 border-y border-border bg-slate-950 dark">
                {/* Background with gradient mesh */}
                <div className="absolute inset-0 bg-background">
                    {/* Decorative orbs */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-[80px]" />
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]" />

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                                <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                    {TOTAL_ONLINE_PROFESSIONALS} talentos online
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

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-4 tracking-tight">
                            Encontre o profissional
                            <br className="md:hidden" />
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400">
                                    ideal para a sua demanda
                                </span>
                                <span className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-500/20 -skew-x-3 rounded" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                            Navegue por perfis verificados e conecte-se diretamente com quem entrega resultado.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto">
                            <div className="relative group">
                                {/* Glow effect on focus */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-2xl opacity-0 group-focus-within:opacity-40 blur-lg transition-opacity duration-500" />

                                <div className="relative flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                    <Search className="ml-5 text-muted-foreground w-5 h-5 flex-shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Busque por nome, função ou habilidade..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="
                    flex-1 w-full px-4 py-5 bg-transparent border-none
                    focus:ring-0 focus:outline-none text-white
                    placeholder:text-muted-foreground font-medium
                    "
                                        aria-label="Buscar profissionais"
                                    />
                                    <Button className="m-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 px-6">
                                        <Search className="w-4 h-4 mr-2" />
                                        Buscar
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-center gap-8 mt-10 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="w-4 h-4" />
                                <span><strong className="text-white">{TOTAL_ONLINE_PROFESSIONALS}+</strong> profissionais</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-muted" />
                            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                                <Zap className="w-4 h-4" />
                                <span><strong className="text-white">24h</strong> resposta rápida</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 mb-8 pt-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2">
                        {SKILL_CATEGORIES.map((cat) => (
                            <Button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                                className={`
                                    rounded-xl font-medium text-sm transition-all duration-200
                                    ${selectedCategory === cat.id ? 'shadow-md' : 'hover:bg-muted'}
                                `}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={handleReshuffle}
                            variant="outline"
                            className="gap-2 text-muted-foreground hover:text-primary"
                            title="Reordenar aleatoriamente"
                        >
                            <Shuffle className="w-4 h-4" />
                            <span className="hidden sm:inline">Reordenar</span>
                        </Button>

                        <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">{filteredPros.length}</strong> resultados
                        </span>
                    </div>
                </div>
            </section>

            {/* Professionals Grid */}
            <section className="w-full px-4 sm:px-6 lg:px-8 min-h-[600px]">
                {filteredPros.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                    >
                        <AnimatePresence>
                            {filteredPros.map((pro, index) => (
                                <TalentCard
                                    key={pro.id}
                                    professional={pro}
                                    onSelect={() => setSelectedPro(pro)}
                                    onRegisterClick={onRegisterClick}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    /* Empty State */
                    <Card className="p-16 text-center border-dashed border-2 bg-muted/20">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
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

            {/* CTA Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 mt-16 mb-24">
                <Card className="p-8 md:p-12 bg-gradient-to-br from-indigo-600 to-blue-700 border-0 text-white overflow-hidden relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-3 text-white">
                                Quer fazer parte?
                            </h2>
                            <p className="text-indigo-100 text-lg max-w-xl">
                                Cadastre-se como profissional e receba demandas de clientes qualificados.
                            </p>
                        </div>

                        <Button
                            onClick={onRegisterClick}
                            className="
                !bg-white !text-indigo-700 hover:!bg-indigo-50 !border-0
                px-8 py-4 text-base font-bold shadow-xl
                flex-shrink-0
            "
                        >
                            Cadastrar como Talento
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </Card>
            </section>

            {/* Portfolio Modal */}
            {selectedPro && (
                <PortfolioModal
                    professional={selectedPro}
                    open={!!selectedPro}
                    onOpenChange={(isOpen) => !isOpen && setSelectedPro(null)}
                />
            )}
        </div>
    );
}
