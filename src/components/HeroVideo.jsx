import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function HeroVideo() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                            observer.disconnect();
                        }
                    });
                },
                {
                    rootMargin: '100px 0px', // Start loading 100px before it enters viewport
                    threshold: 0.1
                }
            );

            if (containerRef.current) {
                observer.observe(containerRef.current);
            }

            return () => observer.disconnect();
        } else {
            // Fallback for browsers without IntersectionObserver
            setIsVisible(true);
        }
    }, []);

    return (
        <div ref={containerRef} className="relative w-full max-w-[1536px] px-4 md:px-12 mt-8">
            <div
                className="relative w-full overflow-hidden shadow-2xl rounded-2xl border border-slate-200 bg-white"
                style={{ paddingTop: '49.27%' }}
            >
                {isVisible && (
                    <motion.iframe
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        src="https://player.vimeo.com/video/1160912743?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute top-0 left-0 w-full h-full scale-[1.01]"
                        title="passedemandapreview"
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />
                )}

                {/* Loading placeholder */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                        <div className="w-12 h-12 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                )}

                {/* Interaction Blocker */}
                <div className="absolute inset-0 z-20 cursor-default" />
            </div>

            {/* Glossy Overlay for Premium Feel */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10 z-30" />
        </div>
    );
}
