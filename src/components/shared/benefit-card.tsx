'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    variant?: 'primary' | 'accent';
}

const BenefitCard: React.FC<BenefitCardProps> = ({
    icon: Icon,
    title,
    description,
    variant = 'primary',
}) => {
    const variants = {
        primary: {
            iconBg: 'bg-primary/10',
            iconColor: 'text-primary',
            cardBg: 'bg-slate-800',
            titleColor: 'text-white',
            descColor: 'text-slate-300',
        },
        accent: {
            iconBg: 'bg-slate-700/50',
            iconColor: 'text-slate-400',
            cardBg: 'bg-slate-800',
            titleColor: 'text-white',
            descColor: 'text-slate-300',
        },
    };

    const selectedVariant = variants[variant];

    return (
        <Card
            className={`text-left p-6 flex items-start gap-5 ${selectedVariant.cardBg} border-slate-700`}
        >
            <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${selectedVariant.iconBg}`}
            >
                <Icon className={`w-6 h-6 ${selectedVariant.iconColor}`} />
            </div>
            <div>
                <h4 className={`font-bold text-lg ${selectedVariant.titleColor} mb-1`}>
                    {title}
                </h4>
                <p className={`${selectedVariant.descColor}`}>{description}</p>
            </div>
        </Card>
    );
};

export default BenefitCard;
