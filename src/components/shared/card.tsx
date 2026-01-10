import React from 'react';

export interface CardProps {
    /** Card content */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Click handler for interactive cards */
    onClick?: () => void;
    /** Enable hover effects for clickable cards */
    hoverEffect?: boolean;
    /** Padding preset */
    padding?: 'none' | 'sm' | 'md' | 'lg';
    /** Card variant */
    variant?: 'default' | 'elevated' | 'outline' | 'ghost';
}

/**
 * Card Component
 * 
 * Container component for grouping related content.
 * Supports click interactions and visual variants.
 * 
 * @example
 * <Card padding="md">Content here</Card>
 * <Card hoverEffect onClick={() => handleClick()}>Clickable card</Card>
 */
export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    onClick,
    hoverEffect = false,
    padding = 'none',
    variant = 'default',
}) => {
    // Variant styles
    const variants: Record<string, string> = {
        default: 'bg-slate-800 border-slate-700 shadow-sm',
        elevated: 'bg-slate-800 border-slate-700 shadow-lg',
        outline: 'bg-transparent border-slate-700',
        ghost: 'bg-slate-800/50 border-transparent',
    };

    // Padding styles
    const paddings: Record<string, string> = {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const hoverStyles = hoverEffect
        ? 'hover:shadow-md hover:border-primary cursor-pointer transition-all duration-300 group'
        : '';

    const interactiveStyles = onClick
        ? 'cursor-pointer'
        : '';

    return (
        <div
            onClick={onClick}
            className={`
                rounded-xl border overflow-hidden
                ${variants[variant]}
                ${paddings[padding]}
                ${hoverStyles}
                ${interactiveStyles}
                ${className}
            `.replace(/\s+/g, ' ').trim()}
        >
            {children}
        </div>
    );
};

export default Card;
