'use client';

import React, { useState } from 'react';

export interface LogoProps {
    /** Show text alongside icon */
    showText?: boolean;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Light version for dark backgrounds */
    variant?: 'default' | 'light';
    /** Additional CSS classes */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}

/**
 * Logo Component - Wrench Icon
 * 
 * Represents the brand identity for PasseDemanda.
 */
export const Logo: React.FC<LogoProps> = ({
    showText = true,
    size = 'md',
    variant = 'default',
    className = '',
    onClick,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        if (onClick) onClick();
        setTimeout(() => setIsClicked(false), 500);
    };

    // Size configurations
    const sizes: Record<string, { container: string; icon: string; text: string }> = {
        sm: { container: 'w-8 h-8', icon: 'text-2xl', text: 'text-lg' },
        md: { container: 'w-10 h-10', icon: 'text-3xl', text: 'text-xl' },
        lg: { container: 'w-12 h-12', icon: 'text-4xl', text: 'text-2xl' },
    };

    // Color configurations
    const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
    const accentColor = variant === 'light' ? 'text-primary' : 'text-primary';

    // Animation Transforms
    const containerTransform = isClicked ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100';
    const linkTension = isHovered && !isClicked ? 'scale-95' : 'scale-100';

    return (
        <div
            className={`flex items-center gap-2 group cursor-pointer select-none ${className}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative ${sizes[size].container} flex items-center justify-center`}>
                <div className={`transition-all duration-500 ease-in-out ${containerTransform} ${linkTension}`}>
                    <span className={sizes[size].icon}>🔧</span>
                </div>
            </div>

            {showText && (
                <span className={`${sizes[size].text} font-headline font-bold tracking-tight ${textColor}`}>
                    Passe<span className={accentColor}>Demanda</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
