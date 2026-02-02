import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, UserCheck, FileText, Shield, CheckCircle2, DollarSign } from 'lucide-react'

export function LinearFlow({ embedded = false, variant = 'white', layout = 'horizontal' }) {
    const isBrand = variant === 'brand'
    const isZigzag = layout === 'zigzag'
    const [activeStep, setActiveStep] = useState(2) // Default to 'Contrato' as in screenshot

    const steps = [
        {
            id: 0,
            label: "Cliente",
            icon: Send,
            title: "Demanda Recebida",
            description: "O cliente envia a solicitação detalhada para o marketplace."
        },
        {
            id: 1,
            label: "Profissional",
            icon: UserCheck,
            title: "Seleção & Match",
            description: "O algoritmo conecta a demanda ao especialista perfeito."
        },
        {
            id: 2,
            label: "Contrato",
            icon: FileText,
            title: "Contrato Digital",
            description: "Acordos finalizados e contrato digital gerado para segurança jurídica."
        },
        {
            id: 3,
            label: "Sinal",
            icon: DollarSign,
            title: "Pagamento de 50%",
            description: "Depósito de 50% direto na conta do profissional para iniciar o trabalho."
        },
        {
            id: 4,
            label: "Entregue",
            icon: CheckCircle2,
            title: "Entrega Validada",
            description: "O profissional entrega e o cliente aprova o resultado."
        },
        {
            id: 5,
            label: "Finalização",
            icon: CheckCircle2,
            title: "50% Restantes",
            description: "O cliente realiza o pagamento final de 50% após aprovar a entrega."
        }
    ]

    // Optional: Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    if (isZigzag) {
        return (
            <div className={`w-full max-w-md mx-auto relative py-10 ${embedded ? '' : ''}`}>

                {/* Active Step Info */}
                <div className="relative z-20 mb-12 text-center h-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute inset-0 flex flex-col items-center"
                        >
                            <h3 className={`text-xl font-bold mb-1 ${isBrand ? 'text-white' : 'text-slate-900'}`}>
                                {steps[activeStep].title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${isBrand ? 'text-blue-200' : 'text-slate-600'}`}>
                                {steps[activeStep].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Z-Track Container */}
                <div className="relative flex flex-col gap-12 px-8">
                    {/* Connecting Line (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: isBrand ? 'drop-shadow(0 0 4px rgba(59,130,246,0.5))' : 'none' }}>
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor={isBrand ? '#1e3a8a' : '#bfdbfe'} />
                                <stop offset="100%" stopColor={isBrand ? '#3b82f6' : '#2563eb'} />
                            </linearGradient>
                        </defs>
                        {/* 
                           Approximate path for Z-zag:
                           start at x=60 (center of left icon column approx), y=24 (center of first icon)
                        */}
                        <motion.path
                            d="M 50 25 L 250 120 L 50 215 L 250 310 L 50 405 L 250 500"
                            fill="none"
                            stroke={isBrand ? 'rgba(30, 58, 138, 0.3)' : '#e2e8f0'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hidden sm:block"
                        />
                        <motion.path
                            d="M 50 25 L 250 120 L 50 215 L 250 310 L 50 405 L 250 500"
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: activeStep / (steps.length - 1) }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="hidden sm:block"
                        />
                        {/* Mobile Straight Line fallback */}
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke={isBrand ? 'rgba(30, 58, 138, 0.3)' : '#e2e8f0'} strokeWidth="2" className="sm:hidden" />
                    </svg>

                    {steps.map((step, index) => {
                        const isActive = index === activeStep
                        const isPast = index < activeStep
                        const isEven = index % 2 === 0

                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`relative z-10 flex items-center gap-4 group focus:outline-none transition-all duration-300 w-fit ${isEven ? 'self-start sm:flex-row' : 'self-end sm:flex-row-reverse text-right'
                                    }`}
                            >
                                {/* Icon Container */}
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border-2 shadow-lg relative ${isActive
                                    ? isBrand
                                        ? 'bg-blue-600 border-white text-white shadow-blue-500/50 scale-110'
                                        : 'bg-blue-600 border-blue-600 text-white shadow-blue-500/30 scale-110'
                                    : isPast
                                        ? isBrand
                                            ? 'bg-blue-950 border-blue-800 text-blue-300'
                                            : 'bg-blue-50 border-blue-200 text-blue-600'
                                        : isBrand
                                            ? 'bg-[#0b122b] border-blue-900/40 text-slate-600'
                                            : 'bg-white border-slate-200 text-slate-300'
                                    }`}>
                                    <step.icon size={20} strokeWidth={isActive ? 2.5 : 2} />

                                    {/* Active Pulse */}
                                    {isActive && (
                                        <div className={`absolute inset-0 rounded-xl animate-ping opacity-20 ${isBrand ? 'bg-white' : 'bg-blue-600'}`} />
                                    )}
                                </div>

                                {/* Label */}
                                <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
                                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isActive
                                        ? isBrand ? 'text-white' : 'text-blue-600'
                                        : isBrand ? 'text-blue-500/50' : 'text-slate-400'
                                        }`}>
                                        {step.label}
                                    </span>
                                    <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 hidden sm:block ${isActive
                                        ? isBrand ? 'text-blue-100' : 'text-slate-800'
                                        : 'opacity-0'
                                        }`}>
                                        {step.title}
                                    </span>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className={`w-full max-w-5xl mx-auto ${embedded ? '' : 'py-12'}`}>

            {/* Active Step Content Display */}
            <div className="text-center mb-16 h-28 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                        <h3 className={`text-2xl font-bold mb-2 ${isBrand ? 'text-white' : 'text-slate-900'}`}>
                            {steps[activeStep].title}
                        </h3>
                        <p className={`text-base max-w-lg mx-auto leading-relaxed ${isBrand ? 'text-blue-200' : 'text-slate-600'}`}>
                            {steps[activeStep].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Timeline Interface */}
            <div className="relative px-4">
                {/* Wrapper for lines to ensure percentage width works correctly relative to the track */}
                <div className="absolute top-1/2 left-14 right-14 h-0.5 -translate-y-1/2 -z-10">
                    <div className={`absolute inset-0 ${isBrand ? 'bg-blue-800/50' : 'bg-slate-100'}`} />
                    <motion.div
                        className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-transparent ${isBrand ? 'via-white to-white' : 'via-blue-500 to-blue-500'}`}
                        initial={{ width: '0%' }}
                        animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>

                <div className="flex justify-between items-center relative">
                    {steps.map((step, index) => {
                        const isActive = index === activeStep
                        const isPast = index < activeStep
                        const isEven = index % 2 === 0

                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className="group flex flex-col items-center gap-4 relative focus:outline-none w-24 z-10"
                            >
                                {/* Icon Container */}
                                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 relative z-20 ${isActive
                                    ? isBrand
                                        ? 'bg-blue-600 border-white text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] scale-110'
                                        : 'bg-blue-600 border-blue-600 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] scale-110'
                                    : isPast
                                        ? isBrand
                                            ? 'bg-blue-950 border-blue-700 text-blue-300' // Solid bg to hide line
                                            : 'bg-blue-50 border-blue-200 text-blue-600'
                                        : isBrand
                                            ? 'bg-[#020617] border-blue-900/50 text-slate-500' // Solid bg matching parent to hide line
                                            : 'bg-white border-slate-200 text-slate-300'
                                    }`}>
                                    <step.icon size={24} strokeWidth={isActive ? 2 : 1.5} />
                                </div>

                                {/* Label */}
                                <span className={`text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-colors duration-300 absolute top-24 w-32 text-center ${isActive
                                    ? isBrand ? 'text-white' : 'text-blue-600'
                                    : isPast
                                        ? isBrand ? 'text-blue-200' : 'text-blue-600/70'
                                        : isBrand ? 'text-blue-500/50' : 'text-slate-300'
                                    }`}>
                                    {step.label}
                                </span>

                                {/* Active Selection Dot */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeDot"
                                        className={`absolute -bottom-6 w-1.5 h-1.5 rounded-full ${isBrand ? 'bg-white' : 'bg-blue-600'}`}
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
