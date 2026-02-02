import { motion } from 'framer-motion'

export function HeroVideo() {
    return (
        <div className="relative w-full max-w-[1536px] px-4 md:px-12 mt-8">
            <div
                className="relative w-full overflow-hidden shadow-2xl rounded-2xl border border-slate-200 bg-white"
                style={{ paddingTop: '49.27%' }}
            >
                <iframe
                    src="https://player.vimeo.com/video/1160912743?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute top-0 left-0 w-full h-full scale-[1.01]"
                    title="passedemandapreview"
                />

                {/* Interaction Blocker */}
                <div className="absolute inset-0 z-20 cursor-default" />
            </div>

            {/* Glossy Overlay for Premium Feel */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10 z-30" />
        </div>
    )
}
