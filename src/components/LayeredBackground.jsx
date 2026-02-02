import React from 'react'

export function LayeredBackground({ variant = 'white', className = '' }) {
    const isBlue = variant === 'blue'
    const isBrand = variant === 'brand'

    return (
        <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden select-none ${className}`}>

            {/* 1. Base Background Color */}
            <div className={`absolute inset-0 ${isBrand
                ? 'bg-[#020617]' // Deep Navy/Black (Slate-950+)
                : isBlue
                    ? 'bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50'
                    : 'bg-white'
                }`} />

            {/* 2. Top Spotlight / Glow (Subtle Light Source) */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] rounded-full blur-[120px] mix-blend-multiply ${isBrand
                ? 'bg-blue-600/20 opacity-50' // Deep blue glow on dark background
                : isBlue
                    ? 'bg-blue-100/60 opacity-60'
                    : 'bg-blue-50/60 opacity-40'
                }`} />

            <div className={`absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[100px] ${isBrand ? 'bg-indigo-600/10' : 'hidden'}`} />

            {/* 3. Grid Pattern (Subtle Architecture feel) */}
            <div className={`absolute inset-0 ${isBrand
                ? 'bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]'
                : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'
                } [background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]`} />

            {/* 4. Dot Pattern with Radial Mask */}
            <div className={`absolute inset-0 h-full w-full ${isBrand
                ? 'bg-[radial-gradient(rgba(255,255,255,0.1)_1.5px,transparent_1.5px)] opacity-50' // Increased visibility white dots
                : isBlue
                    ? 'bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] opacity-20'
                    : 'bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] opacity-30'
                } [background-size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_80%,transparent_100%)]`} />

            {/* 4. Bottom Fade (Integration with next section) */}
            <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${isBrand
                ? 'from-[#020617]' // Match the deep navy background
                : isBlue ? 'from-slate-50' : 'from-white'
                } to-transparent`} />

        </div>
    )
}
