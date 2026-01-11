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
 * Logo Component - Double Chevron
 * 
 * Behavior:
 * - Default: Left = Outline, Right = Filled.
 * - Hover: They SWAP positions (Left moves Right, Right moves Left).
 */
export const Logo: React.FC<LogoProps> = ({
    showText = true,
    size = 'md',
    variant = 'default',
    className = '',
    onClick,
}) => {
    // We track hover state to trigger the swap animation
    const [isHovered, setIsHovered] = useState(false);

    // Size configurations
    const sizes: Record<string, { container: string; icon: number; text: string }> = {
        sm: { container: 'w-6 h-6', icon: 16, text: 'text-sm' },
        md: { container: 'w-8 h-8', icon: 24, text: 'text-lg' },
        lg: { container: 'w-11 h-11', icon: 34, text: 'text-xl' },
    };

    // Color configurations
    const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
    const primaryColor = 'text-primary';
    const accentColor = 'text-primary';
    const innerStrokeColor = 'stroke-background';

    return (
        <div
            className={`flex items-center gap-1 group cursor-pointer select-none ${className}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative ${sizes[size].container} flex items-center justify-center`}>
                <svg
                    width={sizes[size].icon}
                    height="100%"
                    viewBox="0 0 202 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible h-full"
                >
                    <g className={`transition-transform duration-500 ease-in-out ${isHovered ? 'translate-x-[80px]' : 'translate-x-0'}`}>
                        <path
                            d="M20.7773 20.7778L100.33 94.3665C100.598 94.6143 100.591 95.0401 100.314 95.2782L20.7773 163.778"
                            stroke="currentColor"
                            strokeWidth="41.5556"
                            strokeLinecap="round"
                            className={primaryColor}
                        />
                        <path
                            d="M20.7773 20.7778L100.33 94.3665C100.598 94.6143 100.591 95.0401 100.314 95.2782L20.7773 163.778"
                            strokeWidth="18"
                            strokeLinecap="round"
                            stroke="currentColor"
                            className={innerStrokeColor}
                        />
                    </g>

                    <g className={`transition-transform duration-500 ease-in-out ${isHovered ? '-translate-x-[80px]' : 'translate-x-0'}`}>
                        <g transform="translate(80 0)">
                            <path
                                d="M20.7773 20.7778L100.33 94.3665C100.598 94.6143 100.591 95.0401 100.314 95.2782L20.7773 163.778"
                                stroke="currentColor"
                                strokeWidth="41.5556"
                                strokeLinecap="round"
                                className={primaryColor}
                            />
                        </g>
                    </g>
                </svg>
            </div>

            {showText && (
                <span className={`${sizes[size].text} font-headline font-bold tracking-tight ${textColor} uppercase translate-y-[1px]`}>
                    PASSE <span className={accentColor}>DEMANDA</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
