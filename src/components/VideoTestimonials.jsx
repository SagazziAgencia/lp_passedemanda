import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Pause, Star, Quote } from 'lucide-react'
import { LayeredBackground } from './LayeredBackground'

const TestimonialCard = ({ name, skill, videoUrl, thumbnail, quote, delay }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="relative flex-shrink-0 w-[280px] md:w-[320px] snap-center group"
        >
            <div
                className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-white border border-slate-200 group-hover:border-blue-500/50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                onClick={togglePlay}
            >
                {/* Video Placeholder (would be <video> in prod) */}
                <div className="absolute inset-0 bg-slate-100 bg-[url('https://images.unsplash.com/photo-1616593871242-2b620b72c918?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Overlay Gradient (Lighter for Light Mode) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60"></div>

                {/* Play Button Overlay */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-lg">
                            <Play fill="white" className="ml-1 text-white" size={24} />
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    {/* Text is white because it's over an image overlay, so keep white but maybe increase overlay opacity if needed. Or keep as is. */}
                    <p className="text-sm font-medium text-white mb-4 line-clamp-2 leading-relaxed italic drop-shadow-md">"{quote}"</p>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                            {name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm leading-tight drop-shadow-sm">{name}</h4>
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">{skill}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function VideoTestimonials({ variant }) {
    const scrollRef = useRef(null)

    const testimonials = [
        {
            name: "Ricardo Souza",
            skill: "Gestor de Tráfego",
            quote: "Pela primeira vez na carreira eu não preciso cobrar cliente. O dinheiro já tá na conta antes de eu começar.",
            thumbnail: ""
        },
        {
            name: "Amanda Lee",
            skill: "Copywriter",
            quote: "A qualidade dos leads aqui é surreal. Só fecha contrato quem realmente tem budget.",
            thumbnail: ""
        },
        {
            name: "Grupo V4",
            skill: "Agência Parceira",
            quote: "Escalamos nossa operação contratando especialistas validados. O processo de vetting é real.",
            thumbnail: ""
        },
        {
            name: "Pedro Costa",
            skill: "Dev Fullstack",
            quote: "Segurança jurídica e zero dor de cabeça. Foco 100% em codar e entregar.",
            thumbnail: ""
        }
    ]

    return (
        <section className={`relative py-24 overflow-hidden min-h-screen flex flex-col justify-center bg-slate-50`}>
            {/* Background Spots */}
            <LayeredBackground variant={variant} />

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900">
                        Histórias de quem já <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Elevou o Nível.
                        </span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Profissionais e empresas que transformaram sua forma de fechar negócios.
                    </p>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 px-4 md:justify-center snap-x scrollbar-hide cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    )
}
