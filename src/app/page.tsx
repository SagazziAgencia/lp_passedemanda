'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
    Search,
    Shuffle,
    ArrowRight,
    UserPlus,
    Compass,
    Gift,
    DollarSign,
    BarChart,
    ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/shared/card';
import PortfolioModal from '@/components/shared/portfolio-modal';
import TalentCard from '@/components/shared/talent-card';
import { MOCK_PROS, SKILL_CATEGORIES, SKILL_TO_CATEGORY } from '@/lib/constants';
import type { Professional } from '@/types';
import Hero from '@/components/shared/hero';
import BenefitCard from '@/components/shared/benefit-card';
import Header from '@/components/shared/header';

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

    return (
        <div className="min-h-screen animate-fade-in bg-background">
            <Header />
            <Hero onlineTalentCount={shuffledPros.length} />

            <main className="container mx-auto px-4 py-8">

                <section className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-foreground">Como funciona?</h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                            O PasseDemanda conecta quem precisa de um serviço a quem pode executá-lo,
                            recompensando quem faz a ponte.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-primary text-center md:text-left">
                                Você <span className="font-extrabold">passa a demanda</span>
                            </h3>
                            <BenefitCard
                                icon={Gift}
                                title="Ganhe 25% por indicação"
                                description="Monetize seu networking indicando demandas que não pode atender. Sem esforço, com retorno garantido."
                                variant='primary'
                            />
                            <BenefitCard
                                icon={Compass}
                                title="Encontre o talento ideal"
                                description="Acesse uma rede de profissionais validados pela comunidade para garantir a qualidade da entrega."
                                variant='primary'
                            />
                            <BenefitCard
                                icon={BarChart}
                                title="Acompanhe seus ganhos"
                                description="Um dashboard simples e transparente para visualizar o status das suas indicações e o comissionamento."
                                variant='primary'
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-muted-foreground text-center md:text-left">
                                Você <span className="font-extrabold">executa a demanda</span>
                            </h3>
                            <BenefitCard
                                icon={DollarSign}
                                title="Receba jobs qualificados"
                                description="Diga adeus à prospecção. Receba projetos alinhados às suas habilidades, com escopo e budget definidos."
                                variant='accent'

                            />
                            <BenefitCard
                                icon={UserPlus}
                                title="Custo zero de aquisição"
                                description="Concentre-se no que faz de melhor. Deixe que a rede do PasseDemanda traga os clientes até você."
                                variant='accent'
                            />
                            <BenefitCard
                                icon={ShieldCheck}
                                title="Pagamento garantido"
                                description="Trabalhe com a segurança de uma plataforma que intermedia o pagamento e garante o seu recebimento."
                                variant='accent'
                            />
d                        </div>
                    </div>
                </section>

                <section className="text-center mb-12 py-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Encontre o talento ideal ou comece a ganhar
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Navegue por profissionais validados pela comunidade ou busque por habilidades específicas para sua demanda.
                    </p>
                    <div className="mt-8 max-w-xl mx-auto">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-0 group-focus-within:opacity-40 blur-lg transition-opacity duration-500" />
                            <div className="relative flex items-center bg-white rounded-xl shadow-lg overflow-hidden">
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
            </main>
        </div>
    );
};
