'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
    Search,
    Award,
    Users,
    Zap,
    Shuffle,
    ArrowRight,
    DollarSign,
    Target,
    Briefcase,
    Gift,
    Handshake,
    ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/shared/card';
import PortfolioModal from '@/components/shared/portfolio-modal';
import TalentCard from '@/components/shared/talent-card';
import { MOCK_PROS, SKILL_CATEGORIES, SKILL_TO_CATEGORY } from '@/lib/constants';
import type { Professional } from '@/types';
import BenefitCard from '@/components/shared/benefit-card';

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
            <section className="relative overflow-hidden rounded-2xl mb-12">
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

                <div className="relative z-10 px-6 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                            <div className="flex items-center gap-1.5">
                                <Award className="w-3.5 h-3.5 text-amber-400" />
                                <span className="text-amber-200 text-xs font-bold uppercase tracking-wider">
                                    Talentos Verificados
                                </span>
                            </div>
                            <div className="w-px h-4 bg-white/20" />
                            <div className="flex items-center gap-1">
                                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                    {onlineTalentCount} talentos online
                                </span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-4 tracking-tight">
                            Sua demanda vale dinheiro.
                            <br />
                            Indique e ganhe {' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-primary to-accent/80">
                                    25%
                                </span>
                                <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -skew-x-12 rounded" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Conecte profissionais a oportunidades e seja recompensado por isso. Simples, rápido e lucrativo.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-left text-sm">
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                                <Gift className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-white">Para quem indica</h3>
                                    <p className="text-slate-400">Monetize seu networking e demandas que não consegue atender.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                                <Handshake className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-white">Para quem executa</h3>
                                    <p className="text-slate-400">Receba demandas qualificadas sem gastar com prospecção.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                                <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-white">Para o cliente final</h3>
                                    <p className="text-slate-400">Acesse talentos validados por indicações de confiança.</p>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-xl mx-auto">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-0 group-focus-within:opacity-40 blur-lg transition-opacity duration-500" />
                                <div className="relative flex items-center bg-white rounded-xl shadow-2xl overflow-hidden">
                                    <Search className="ml-5 text-muted-foreground w-5 h-5 flex-shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Buscar por serviço, habilidade ou profissional..."
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
                    </div>
                </div>
            </section>

             <section className="text-center mb-12 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Como funciona o PasseDemanda?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Uma plataforma que conecta quem precisa de um serviço a quem pode executá-lo,
                    com um modelo de ganhos para todos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-semibold text-left text-foreground">
                            Para quem <span className="text-primary">passa a demanda</span>
                        </h3>
                         <BenefitCard
                            icon={DollarSign}
                            title="Ganhe 25% indicando"
                            description="Passe uma demanda para um talento da plataforma e ganhe 25% do valor do serviço como comissão."
                            variant="primary"
                        />
                         <BenefitCard
                            icon={Users}
                            title="Acesse Talentos Verificados"
                            description="Encontre rapidamente profissionais qualificados e com portfólio validado para suas demandas."
                             variant="primary"
                        />
                         <BenefitCard
                            icon={Zap}
                            title="Agilidade e Foco"
                            description="Delegue tarefas com segurança e libere seu tempo para focar no que realmente importa para seu negócio."
                             variant="primary"
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                         <h3 className="text-2xl font-semibold text-left text-foreground">
                           Para quem <span className="text-muted-foreground">executa a demanda</span>
                        </h3>
                        <BenefitCard
                            icon={Target}
                            title="Receba Demandas Qualificadas"
                            description="Conecte-se a clientes que precisam exatamente das suas habilidades e aumente seus projetos."
                            variant="accent"
                        />
                        <BenefitCard
                            icon={Briefcase}
                            title="Construa seu Portfólio"
                            description="Cada trabalho realizado fortalece sua reputação e atrai novas oportunidades na plataforma."
                            variant="accent"
                         />
                        <BenefitCard
                            icon={ArrowRight}
                            title="Foque no seu Talento"
                            description="Nós cuidamos da prospecção e do pagamento. Você se concentra em entregar um trabalho incrível."
                            variant="accent"
                        />
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
                                className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${selectedCategory === cat.id ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20' : 'bg-card text-secondary-foreground border hover:bg-muted'}`}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                    <Card padding="lg" variant="outline" className="text-center border-dashed border-2 bg-muted/50">
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
                <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent border-0 text-primary-foreground relative rounded-xl" padding='none'>
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
