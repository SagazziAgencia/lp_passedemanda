'use client';

import React, { useState, useMemo, useEffect } from 'react';
import PortfolioModal from '@/components/shared/portfolio-modal';
import { MOCK_PROS } from '@/lib/constants';
import type { Professional } from '@/types';
import Hero from '@/components/shared/hero';
import Header from '@/components/shared/header';
import FindTalentSection from '@/components/page/find-talent-section';
import JoinCommunitySection from '@/components/page/join-community-section';
import TalentPool from '@/components/page/talent-pool';
import { getProfessionalCategory } from '@/lib/utils';

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

            const proCategory = getProfessionalCategory(pro.skills);
            const matchesCategory =
                selectedCategory === 'all' || proCategory === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [shuffledPros, searchTerm, selectedCategory]);

    const handleReshuffle = () => {
        setShuffledPros(shuffleArray(MOCK_PROS));
    };

    return (
        <div className="min-h-screen animate-fade-in text-white">
            <Header />
            <Hero onlineTalentCount={shuffledPros.length} />

            <main className="container mx-auto px-4 py-8 bg-background text-foreground">
                <FindTalentSection
                    searchTerm={searchTerm}
                    onSearchTermChange={setSearchTerm}
                />
                <TalentPool
                    filteredPros={filteredPros}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    onReshuffle={handleReshuffle}
                    onSelectPro={setSelectedPro}
                    onClearFilters={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                    }}
                />
                <JoinCommunitySection />

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
