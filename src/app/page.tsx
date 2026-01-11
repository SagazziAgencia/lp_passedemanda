'use client';

import React, { useState } from 'react';
import { MOCK_PROS, TOTAL_ONLINE_PROFESSIONALS } from '@/lib/constants';
import Hero from '@/components/shared/hero';
import Header from '@/components/shared/header';
import RegistrationModal from '@/components/shared/registration-modal';
import BenefitsCarousel from '@/components/page/benefits-carousel';
import TalentShowcase from '@/components/page/talent-showcase';
import Footer from '@/components/shared/footer';

export default function FindProfessionals() {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    // Shuffle logic moved to TalentShowcase, but we still need count for Hero if we want it to be dynamic based on 'online' count.
    // However, TalentShowcase uses MOCK_PROS directly. Hero currently takes 'onlineTalentCount'.
    // We can pass MOCK_PROS.length to Hero directly or keeping it simple.

    return (
        <div className="min-h-screen animate-fade-in bg-background">
            <Header onRegisterClick={() => setIsRegistrationModalOpen(true)} />
            <div className="bg-slate-900">
                <Hero
                    onlineTalentCount={TOTAL_ONLINE_PROFESSIONALS}
                    onRegisterClick={() => setIsRegistrationModalOpen(true)}
                />
            </div>

            <BenefitsCarousel />

            <TalentShowcase onRegisterClick={() => setIsRegistrationModalOpen(true)} />

            <Footer />

            <RegistrationModal
                isOpen={isRegistrationModalOpen}
                onOpenChange={setIsRegistrationModalOpen}
            />
        </div>
    );
};
