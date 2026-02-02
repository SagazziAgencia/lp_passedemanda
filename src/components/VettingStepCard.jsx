import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)';

const ANIMATION_CONFIG = {
    INITIAL_DURATION: 1200,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20,
    ENTER_TRANSITION_MS: 180
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

// Reuse the same keyframes if they exist, or inject new ones
const KEYFRAMES_ID = 'pc-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
    const style = document.createElement('style');
    style.id = KEYFRAMES_ID;
    style.textContent = `
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  `;
    document.head.appendChild(style);
}

const VettingStepCardComponent = ({
    number,
    title,
    description,
    icon: Icon,
    className = '',
    enableTilt = true,
    enableMobileTilt = false,
    mobileTiltSensitivity = 5,
    isBrand
}) => {
    const wrapRef = useRef(null);
    const shellRef = useRef(null);
    const enterTimerRef = useRef(null);
    const leaveRafRef = useRef(null);

    const tiltEngine = useMemo(() => {
        if (!enableTilt) return null;

        let rafId = null;
        let running = false;
        let lastTs = 0;
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        const DEFAULT_TAU = 0.12;
        const INITIAL_TAU = 0.5;
        let initialUntil = 0;

        const setVarsFromXY = (x, y) => {
            const shell = shellRef.current;
            const wrap = wrapRef.current;
            if (!shell || !wrap) return;

            const width = shell.clientWidth || 1;
            const height = shell.clientHeight || 1;

            const percentX = clamp((100 / width) * x);
            const percentY = clamp((100 / height) * y);

            const centerX = percentX - 50;
            const centerY = percentY - 50;

            const properties = {
                '--pointer-x': `${percentX}%`,
                '--pointer-y': `${percentY}%`,
                '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
                '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
                '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
                '--rotate-x': `${round(-(centerX / 8))}deg`,
                '--rotate-y': `${round(centerY / 6)}deg`
            };

            for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
        };

        const step = ts => {
            if (!running) return;
            if (lastTs === 0) lastTs = ts;
            const dt = (ts - lastTs) / 1000;
            lastTs = ts;

            const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
            const k = 1 - Math.exp(-dt / tau);

            currentX += (targetX - currentX) * k;
            currentY += (targetY - currentY) * k;

            setVarsFromXY(currentX, currentY);

            const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

            if (stillFar || document.hasFocus()) {
                rafId = requestAnimationFrame(step);
            } else {
                running = false;
                lastTs = 0;
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            }
        };

        const start = () => {
            if (running) return;
            running = true;
            lastTs = 0;
            rafId = requestAnimationFrame(step);
        };

        return {
            setImmediate(x, y) {
                currentX = x;
                currentY = y;
                setVarsFromXY(currentX, currentY);
            },
            setTarget(x, y) {
                targetX = x;
                targetY = y;
                start();
            },
            toCenter() {
                const shell = shellRef.current;
                if (!shell) return;
                this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
            },
            beginInitial(durationMs) {
                initialUntil = performance.now() + durationMs;
                start();
            },
            cancel() {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = null;
                running = false;
                lastTs = 0;
            }
        };
    }, [enableTilt]);

    const getOffsets = (evt, el) => {
        const rect = el.getBoundingClientRect();
        return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    };

    const handlePointerMove = useCallback(event => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;
        const { x, y } = getOffsets(event, shell);
        tiltEngine.setTarget(x, y);
    }, [tiltEngine]);

    const handlePointerEnter = useCallback(event => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;
        shell.classList.add('active');
        const { x, y } = getOffsets(event, shell);
        tiltEngine.setTarget(x, y);
    }, [tiltEngine]);

    const handlePointerLeave = useCallback(() => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;
        tiltEngine.toCenter();
        const checkSettle = () => {
            const { x, y, tx, ty } = tiltEngine.getCurrent();
            if (Math.hypot(tx - x, ty - y) < 0.6) {
                shell.classList.remove('active');
                leaveRafRef.current = null;
            } else {
                leaveRafRef.current = requestAnimationFrame(checkSettle);
            }
        };
        if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
        leaveRafRef.current = requestAnimationFrame(checkSettle);
    }, [tiltEngine]);

    useEffect(() => {
        if (!enableTilt || !tiltEngine) return;
        const shell = shellRef.current;
        if (!shell) return;
        shell.addEventListener('pointerenter', handlePointerEnter);
        shell.addEventListener('pointermove', handlePointerMove);
        shell.addEventListener('pointerleave', handlePointerLeave);
        tiltEngine.toCenter();
        return () => {
            shell.removeEventListener('pointerenter', handlePointerEnter);
            shell.removeEventListener('pointermove', handlePointerMove);
            shell.removeEventListener('pointerleave', handlePointerLeave);
            tiltEngine.cancel();
        };
    }, [enableTilt, tiltEngine, handlePointerMove, handlePointerEnter, handlePointerLeave]);

    const cardRadius = '12px'; // Sharper corners for authority

    const cardStyle = useMemo(() => ({
        '--inner-gradient': 'linear-gradient(180deg, #1e293b 0%, #030712 100%)',
        '--card-radius': cardRadius,
        '--pointer-x': '50%',
        '--pointer-y': '50%',
        '--rotate-x': '0deg',
        '--rotate-y': '0deg'
    }), []);

    return (
        <div
            ref={wrapRef}
            className={`relative touch-none mx-auto ${className}`.trim()}
            style={{ perspective: '1200px', width: '100%', maxWidth: '300px', ...cardStyle }}
        >
            <div ref={shellRef} className="relative z-[1] group cursor-default">
                <section
                    className="grid relative overflow-hidden backface-hidden"
                    style={{
                        width: '100%',
                        aspectRatio: '0.72',
                        borderRadius: cardRadius,
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: 'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))',
                        background: '#030712',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
                    }}
                >
                    {/* Technical Blueprint Background */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

                    <div className="relative flex flex-col p-8 h-full z-10">
                        {/* Header: Step Identification */}
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black tracking-[0.25em] text-blue-400 uppercase mb-1 drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]">
                                    Protocolo 0{number}
                                </span>
                                <div className="h-[2px] w-10 bg-blue-500/60" />
                            </div>
                            <span className="text-3xl font-black text-white/[0.12] font-mono italic">
                                S/0{number}
                            </span>
                        </div>

                        {/* Center: Content */}
                        <div className="flex-1 flex flex-col items-start">
                            <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                <Icon size={32} className="text-white" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-md">
                                {title}
                            </h3>

                            <p className="text-[14px] text-slate-300 font-medium leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* Footer: Industrial Detail */}
                        <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                            <span className="text-[9px] font-mono tracking-widest uppercase text-slate-500 font-bold">
                                Verified System Access
                            </span>
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Technical Corner Accents */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 rounded-tr-[12px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 rounded-bl-[12px] opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Sharper Glare */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,0.06) 0%, transparent 60%)`
                        }}
                    />
                </section>
            </div>
        </div>
    );
};

export const VettingStepCard = React.memo(VettingStepCardComponent);
