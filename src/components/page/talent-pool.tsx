'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle, Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/lib/constants';
import TalentCard from '@/components/shared/talent-card';
import type { Professional } from '@/types';
import { Card as ShadCard } from '@/components/ui/card';

interface TalentPoolProps {
    filteredPros: Professional[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    onReshuffle: () => void;
    onCardClick: (pro: Professional) => void;
    onClearFilters: () => void;
}

const TalentPool: React.FC<TalentPoolProps> = ({
    filteredPros,
    selectedCategory,
    onCategoryChange,
    onReshuffle,
    onCardClick,
    onClearFilters
}) => {
    return (
        <section>
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                        {SKILL_CATEGORIES.map((cat) => (
                            <Button
                                key={cat.id}
                                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                                onClick={() => onCategoryChange(cat.id)}
                                className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${selectedCategory === cat.id ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20' : 'bg-card text-foreground border-border hover:bg-accent'}`}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            onClick={onReshuffle}
                            className="rounded-xl px-4 py-2.5 text-sm bg-card border-border hover:bg-accent"
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
            </div>

            {filteredPros.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredPros.map((pro, index) => (
                        <TalentCard
                            key={pro.id}
                            professional={pro}
                            onSelect={() => onCardClick(pro)}
                            index={index}
                        />
                    ))}
                </div>
            ) : (
                <ShadCard className="text-center border-dashed border-2 bg-card/50 border-border p-8 md:p-12">
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
                        className="border-border hover:bg-accent"
                        onClick={onClearFilters}
                    >
                        Limpar filtros
                    </Button>
                </ShadCard>
            )}
        </section>
    );
};

export default TalentPool;
