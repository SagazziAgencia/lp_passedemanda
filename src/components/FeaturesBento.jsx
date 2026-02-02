import { motion } from 'framer-motion'
import { CalendarIcon, FileTextIcon } from '@radix-ui/react-icons'
import { BellIcon, Share2Icon, ShieldCheck, Zap, DollarSign, UserCheck, Globe } from 'lucide-react'
import { useRef, forwardRef } from 'react'
import { cn } from "../lib/utils"
import { Calendar } from "./ui/calendar"
import { Marquee } from "./ui/marquee"
import { AnimatedList } from "./ui/animated-list"
import { AnimatedBeam } from "./ui/animated-beam"
import { BentoCard, BentoGrid } from "./ui/bento-grid"
import { LayeredBackground } from './LayeredBackground'

// --- Background Components ---

const notifications = [
    { name: "Demanda paga!", description: "Recebimento de R$ 500,00 confirmado", time: "Agora", icon: "💸", color: "#00C9A7" },
    { name: "Contrato assinado", description: "Projeto: Landing Page SaaS", time: "10m atrás", icon: "✍️", color: "#FF3D71" },
    { name: "Mensagem recebida", description: "Especialista enviou uma dúvida", time: "15m atrás", icon: "💬", color: "#1E86FF" },
    { name: "Match encontrado!", description: "Profissional de Elite disponível", time: "20m atrás", icon: "🚀", color: "#FFB800" },
]

const Notification = ({ name, description, icon, color, time, isBrand, animated }) => (
    <figure className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        animated && "transition-all duration-200 ease-in-out hover:scale-[103%]",
        isBrand
            ? "bg-slate-800/80 backdrop-blur-md border border-white/10 shadow-lg"
            : "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
    )}>
        <div className="flex flex-row items-center gap-3">
            <div className={cn(
                "flex size-12 items-center justify-center rounded-lg border shadow-sm shrink-0",
                isBrand ? "bg-slate-900 border-white/10" : "bg-white border-slate-100"
            )}>
                <img src="/favicon.png" className="w-12 h-12 object-contain rounded-lg" alt="Passe Demanda" />
            </div>
            <div className="flex flex-col overflow-hidden">
                <figcaption className={cn(
                    "flex flex-row items-center whitespace-pre text-lg font-medium",
                    isBrand ? "text-slate-200" : "text-slate-900"
                )}>
                    <span className="text-sm sm:text-base">{name}</span>
                    <span className="mx-1">·</span>
                    <span className={cn("text-xs", isBrand ? "text-slate-500" : "text-slate-500")}>{time}</span>
                </figcaption>
                <p className={cn("text-xs font-normal", isBrand ? "text-slate-400" : "text-slate-500")}>{description}</p>
            </div>
        </div>
    </figure>
)

const Circle = forwardRef(({ className, children, isBrand }, ref) => (
    <div ref={ref} className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        isBrand ? "bg-slate-800/80 backdrop-blur-md border-white/10" : "bg-white border-slate-200",
        className
    )}>
        {children}
    </div>
))

Circle.displayName = "Circle"

const BeamsBackground = ({ isBrand }) => {
    const containerRef = useRef(null)
    const div1Ref = useRef(null)
    const div2Ref = useRef(null)
    const div3Ref = useRef(null)
    const div4Ref = useRef(null)
    const div5Ref = useRef(null)
    const div6Ref = useRef(null)
    const div7Ref = useRef(null)

    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-2" ref={containerRef}>
            <div className="flex size-full max-w-full flex-row items-stretch justify-between gap-6">
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div1Ref} isBrand={isBrand}><UserCheck className="text-blue-600" /></Circle>
                    <Circle ref={div2Ref} isBrand={isBrand}><Zap className="text-orange-500" /></Circle>
                    <Circle ref={div3Ref} isBrand={isBrand}><FileTextIcon className="text-slate-600" /></Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div4Ref} isBrand={isBrand} className="size-16"><img src="/favicon.png" className="w-8 h-8" /></Circle>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div5Ref} isBrand={isBrand}>< DollarSign className="text-emerald-500" /></Circle>
                    <Circle ref={div6Ref} isBrand={isBrand}><ShieldCheck className="text-blue-500" /></Circle>
                    <Circle ref={div7Ref} isBrand={isBrand}><Globe className="text-indigo-500" /></Circle>
                </div>
            </div>

            {/* Static Beams (Removed AnimatedBeam) */}
        </div>
    )
}

// --- Technical Card Component (Vetting Style) ---
const TechnicalCard = ({ name, description, Icon, href, cta, className, background, index, isBrand }) => {
    const shouldAnimate = index === 3;

    if (!isBrand) {
        return (
            <BentoCard
                name={name}
                description={description}
                Icon={Icon}
                href={href}
                cta={cta}
                className={className}
                background={background}
            />
        )
    }

    return (
        <div
            className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-xl",
                shouldAnimate && "group",
                "bg-[#030712] border border-white/15 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]",
                className
            )}
        >
            {/* Background Layer (Absolute to the whole card) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {background}
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col h-full z-10 pointer-events-none">

                {/* Top Area Spacer */}
                <div className={cn(
                    "w-full",
                    shouldAnimate ? "h-56" : "h-40"
                )} />

                {/* Text Content Area (Bottom Half) */}
                <div className="relative flex flex-col p-6 flex-1 pointer-events-auto mt-auto">
                    {/* Glass Blur Background (Only for static cards) */}
                    {!shouldAnimate && (
                        <div className="absolute inset-x-0 bottom-0 h-[85%] z-[-1] bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent backdrop-blur-[2px]" />
                    )}

                    <div className="mb-4 p-2 w-fit rounded-lg bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                        <Icon size={20} className="text-white" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-black text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                        {name}
                    </h3>

                    <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Footer: Industrial Detail */}
                    <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center w-full">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-slate-500 font-bold hover:text-blue-400 transition-colors cursor-pointer">
                            {cta} &rarr;
                        </span>
                        <div className="flex gap-1.5">
                            <div className={cn(
                                "w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]",
                                shouldAnimate && "animate-pulse"
                            )} />
                            <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Corner Accents */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
    )
}

export function FeaturesBento({ variant }) {
    const isBrand = variant === 'brand'

    const features = [
        {
            Icon: ShieldCheck,
            name: "Acordos com Adiantamento",
            description: "Pague ou receba entre 30% e 50% logo no início para garantir o compromisso total de ambas as partes.",
            href: "#",
            cta: "ENTENDER GARANTIAS",
            className: "col-span-3 lg:col-span-2",
            background: (
                <div className="absolute inset-0 flex items-start justify-center pt-2">
                    {/* Construction Pill */}
                    <div className="absolute top-4 left-4 z-20">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                            <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] font-bold tracking-wider text-blue-400 uppercase">
                                Notificações em Construção
                            </span>
                        </div>
                    </div>

                    <div className="w-full max-w-[95%] scale-90 [mask-image:linear-gradient(to_bottom,black_40%,transparent_90%)]">
                        <AnimatedList delay={2500} className="w-full">
                            {notifications.map((item, idx) => (
                                <Notification {...item} key={idx} isBrand={isBrand} animated={true} />
                            ))}
                        </AnimatedList>
                    </div>
                    {/* Seamless Blur & Fade Overlay at the bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent backdrop-blur-[4px] pointer-events-none z-10" />
                </div>
            ),
        },
        {
            Icon: Share2Icon,
            name: "Ecossistema Integrado",
            description: "Conectamos sua necessidade aos melhores especialistas do mercado em segundos.",
            href: "#",
            cta: "VER INTEGRAÇÕES",
            className: "col-span-3 lg:col-span-1",
            background: (
                <div className="absolute inset-0 flex items-start justify-center p-4 pt-12">
                    <div className="flex items-center gap-4">
                        {/* Cliente */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Cliente</span>
                        </div>
                        
                        {/* Conexão com logo centralizado */}
                        <div className="relative flex items-center">
                            {/* Linha esquerda */}
                            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500/50 to-slate-500/30"/>
                            
                            {/* Logo no centro */}
                            <div className="w-11 h-11 rounded-xl bg-slate-800/80 flex items-center justify-center border border-white/10 shadow-lg z-10 mx-1">
                                <img src="/favicon.png" className="w-7 h-7 object-contain" alt="Passe Demanda"/>
                            </div>
                            
                            {/* Linha direita */}
                            <div className="w-10 h-0.5 bg-gradient-to-r from-slate-500/30 to-emerald-500/50"/>
                            
                            {/* Ponto animado */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse"/>
                            </div>
                        </div>
                        
                        {/* Profissional */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Profissional</span>
                        </div>
                    </div>
                    
                    {/* Status */}
                    <div className="absolute bottom-3 right-3">
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Match!</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Icon: CalendarIcon,
            name: "Gestão de Prazos",
            description: "Acompanhe cada etapa da entrega com cronogramas automatizados e lembretes inteligentes.",
            className: "col-span-3 lg:col-span-1",
            href: "#",
            cta: "VER MODELO",
            background: (
                <div className="absolute inset-0 flex items-start justify-center pt-8 [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]">
                    <Calendar
                        mode="single"
                        selected={new Date()}
                        className={cn(
                            "rounded-md border shadow-2xl scale-[0.75] origin-top grayscale",
                            isBrand ? "bg-slate-800/80 border-white/10 text-slate-100" : "bg-white"
                        )}
                    />
                </div>
            ),
        },
        {
            Icon: UserCheck,
            name: "Qualidade Monitorada",
            description: "Avaliamos a performance de cada profissional em tempo real. Quem não entrega excelência, sai da plataforma.",
            href: "#",
            cta: "VER CRITÉRIOS",
            className: "col-span-3 lg:col-span-2",
            background: (
                <div className="absolute inset-0 flex flex-col justify-start pt-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
                    <style>
                        {`
                        @keyframes quality-marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        @keyframes quality-marquee-reverse {
                            0% { transform: translateX(-50%); }
                            100% { transform: translateX(0%); }
                        }
                        `}
                    </style>
                    
                    {/* Linha 1 - Esquerda para Direita */}
                    <div className="flex overflow-hidden py-2 mb-2">
                        <div 
                            className="flex gap-3"
                            style={{
                                width: "fit-content",
                                animation: "quality-marquee 25s linear infinite",
                            }}
                        >
                            {[
                                { name: "UX Designer", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1121.75 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"/></svg> },
                                { name: "Copywriter", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/></svg> },
                                { name: "Gestor de Tráfego", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg> },
                                { name: "Dev Fullstack", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg> },
                                { name: "Editor de Vídeo", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/></svg> },
                            ].concat([
                                { name: "UX Designer", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1121.75 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"/></svg> },
                                { name: "Copywriter", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/></svg> },
                                { name: "Gestor de Tráfego", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg> },
                                { name: "Dev Fullstack", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg> },
                                { name: "Editor de Vídeo", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/></svg> },
                            ]).map((item, idx) => (
                                <div key={`row1-${idx}`} className={cn(
                                    "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-2.5 transition-all flex-shrink-0",
                                    isBrand
                                        ? "bg-slate-800/80 backdrop-blur-md border border-white/10 hover:bg-slate-700"
                                        : "bg-white border border-slate-100 hover:bg-slate-50"
                                )}>
                                    <div className="flex flex-row items-center gap-2.5">
                                        <div className={cn(
                                            "flex h-6 w-6 items-center justify-center rounded-lg shrink-0",
                                            isBrand ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"
                                        )}>
                                            {item.icon}
                                        </div>
                                        <span className={cn("text-[10px] font-black tracking-tight uppercase whitespace-nowrap", isBrand ? "text-slate-200" : "text-slate-900")}>{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Linha 2 - Direita para Esquerda */}
                    <div className="flex overflow-hidden py-2">
                        <div 
                            className="flex gap-3"
                            style={{
                                width: "fit-content",
                                animation: "quality-marquee-reverse 30s linear infinite",
                            }}
                        >
                            {[
                                { name: "Social Media", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg> },
                                { name: "SEO Expert", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg> },
                                { name: "Motion Designer", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/></svg> },
                                { name: "DevOps", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/></svg> },
                                { name: "Ilustrador", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
                            ].concat([
                                { name: "Social Media", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg> },
                                { name: "SEO Expert", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg> },
                                { name: "Motion Designer", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/></svg> },
                                { name: "DevOps", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/></svg> },
                                { name: "Ilustrador", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
                            ]).map((item, idx) => (
                                <div key={`row2-${idx}`} className={cn(
                                    "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-2.5 transition-all flex-shrink-0",
                                    isBrand
                                        ? "bg-slate-800/60 backdrop-blur-md border border-white/5 hover:bg-slate-700"
                                        : "bg-slate-50 border border-slate-200 hover:bg-slate-100"
                                )}>
                                    <div className="flex flex-row items-center gap-2.5">
                                        <div className={cn(
                                            "flex h-6 w-6 items-center justify-center rounded-lg shrink-0",
                                            isBrand ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"
                                        )}>
                                            {item.icon}
                                        </div>
                                        <span className={cn("text-[10px] font-black tracking-tight uppercase whitespace-nowrap", isBrand ? "text-slate-400" : "text-slate-600")}>{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <section className={`relative py-24 lg:py-32 overflow-hidden ${isBrand ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <LayeredBackground variant={isBrand ? 'brand' : 'white'} className="absolute inset-0" />
            <div className="container relative z-10 px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className={`mb-6 leading-[1.1] ${isBrand ? 'text-white' : 'text-slate-900'}`}>
                        Onde a Demanda Encontra a <br />
                        <span className={`text-transparent bg-clip-text ${isBrand ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
                            Execução Profissional.
                        </span>
                    </h2>
                    <p className={`text-lg font-medium ${isBrand ? 'text-slate-400' : 'text-slate-600'}`}>
                        Tecnologia para garantir que seu projeto seja entregue no prazo, com qualidade e segurança financeira.
                    </p>
                </div>

                <BentoGrid className="max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <TechnicalCard
                            key={idx}
                            index={idx}
                            isBrand={isBrand}
                            {...feature}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}
