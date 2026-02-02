
import React from 'react';
import { GlareCard } from './ui/glare-card';

const ProfileCard = React.memo(({
    avatarUrl,
    name,
    title,
    handle,
    status,
    contactText = 'Ver Perfil',
    onContactClick,
    aspectRatio = '0.7',
    cardRadius = '12px',
    className = ""
}) => {
    return (
        <GlareCard
            className={cn("w-full h-full bg-[#030712]", className)}
            style={{ aspectRatio, borderRadius: cardRadius }}
        >
            <div className="relative w-full h-full flex flex-col group/card bg-[#030712]">
                {/* Full-bleed Photo */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#030712]">
                    <img
                        src={avatarUrl}
                        alt={name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110 opacity-60 group-hover/card:opacity-90 brightness-[0.85] group-hover/card:brightness-[0.5] contrast-[1.1]"
                    />
                    {/* Permanent Dark Blue Overlay - Lightened */}
                    <div className="absolute inset-0 bg-[#030712]/40 mix-blend-multiply z-[1]" />
                    {/* Technical Blue Gradient - Refined for depth without too much darkness */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent z-[2]" />
                    {/* Dark Blue Gradient on Hover - Darkened & Less Bright */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/0 to-slate-950/0 group-hover/card:from-blue-950/10 group-hover/card:to-[#030712]/50 transition-all duration-700 z-[3]" />
                </div>

                {/* Info Overlay (Bottom) */}
                <div className="mt-auto relative z-10 p-6 flex flex-col items-center text-center pb-8">
                    <h3 className="text-2xl font-black text-white tracking-tight leading-tight mb-1 drop-shadow-lg uppercase">
                        {name}
                    </h3>
                    <p className="text-sm font-bold text-slate-300 tracking-wide mb-4 opacity-90 drop-shadow-md">
                        {title}
                    </p>

                    {/* Action Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onContactClick?.();
                        }}
                        className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[12px] font-black tracking-widest uppercase transition-all active:scale-95"
                    >
                        {contactText}
                    </button>
                </div>

                {/* Status Badge (Top Right) */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 scale-90">
                    <div className={cn(
                        "w-2 h-2 rounded-full",
                        status === 'Disponível' || status === 'Online' ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "bg-slate-400"
                    )} />
                    <span className="text-[10px] font-black tracking-tight text-white/80 uppercase">{status}</span>
                </div>
            </div>
        </GlareCard>
    );
});

// Since I removed some unused imports and constants, I'll need to re-import cn if I use it.
import { cn } from '../lib/utils';

export default ProfileCard;
