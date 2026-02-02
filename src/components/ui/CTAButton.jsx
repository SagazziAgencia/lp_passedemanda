import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronRight } from 'lucide-react';

export const CTAButton = ({
    children,
    className,
    onClick,
    href,
    showIcon = true,
    ...props
}) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={cn(
                "group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-blue-500/50 text-white font-black tracking-widest uppercase text-xs overflow-hidden transition-all hover:bg-blue-600 hover:border-blue-600 active:scale-95 rounded-[8px]",
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2 justify-center">
                {children}
                {showIcon && (
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                )}
            </span>
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Component>
    );
};
