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
 * Logo Component - Link Arrow (Interlocking Chain Style)
 * 
 * Accurately replicates the "Chain Link Arrow" reference.
 * Consists of two interlocking U-shapes meeting at a point arrow.
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
    const sizes: Record<string, { container: string; icon: number; text: string }> = {
        sm: { container: 'w-8 h-8', icon: 16, text: 'text-lg' },
        md: { container: 'w-10 h-10', icon: 28, text: 'text-xl' },
        lg: { container: 'w-12 h-12', icon: 32, text: 'text-2xl' },
    };

    // Color configurations
    const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
    const accentColor = variant === 'light' ? 'text-primary' : 'text-primary';

    // Animation Transforms
    const containerTransform = isClicked ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100';
    const linkTension = isHovered && !isClicked ? 'scale-95' : 'scale-100';

    return (
        <div
            className={`flex items-center gap-0.5 group cursor-pointer select-none ${className}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative ${sizes[size].container} flex items-center justify-center`}>
                <div className={`transition-all duration-500 ease-in-out ${containerTransform} ${linkTension}`}>
                    <svg
                        width={sizes[size].icon}
                        height={sizes[size].icon}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible text-primary"
                    >
                        <path
                            d="M20 12 L 13 5 A 3.5 3.5 0 0 0 7 10 L 12 15"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20 12 L 13 19 A 3.5 3.5 0 0 1 7 14 L 12 9"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-accent"
                        />
                    </svg>
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
