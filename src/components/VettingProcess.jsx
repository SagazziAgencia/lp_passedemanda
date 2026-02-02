import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, UserCheck, FileSearch, Award } from 'lucide-react'
import { LayeredBackground } from './LayeredBackground'
import { VettingStepCard } from './VettingStepCard'

export function VettingProcess({ variant }) {
    const isBrand = variant === 'brand'

    const steps = [
        {
            title: "Análise de Portfólio",
            description: "Avaliamos resultados reais. Portfólios genéricos são descartados.",
            icon: FileSearch
        },
        {
            title: "Antecedentes",
            description: "Checagem rigorosa de histórico, identidade e reputação no mercado.",
            icon: UserCheck
        },
        {
            title: "Reunião Prévia",
            description: "Alinhamento obrigatório de cultura e teste prático de comunicação.",
            icon: CheckCircle2
        },
        {
            title: "Onboarding",
            description: "Treinamento final de conduta. Só os melhores permanecem.",
            icon: ShieldCheck
        }
    ]

    return (
        <section className={`relative py-24 lg:py-32 overflow-hidden ${isBrand ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Background Grid - Dark Mode Optimized */}
            <LayeredBackground variant={variant} />

            <div className="container px-6 mx-auto relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-bold uppercase tracking-widest border ${isBrand
                            ? 'bg-blue-500/20 text-blue-50 border-blue-400/30'
                            : 'bg-blue-50 text-blue-600 border-blue-100'
                            }`}
                    >
                        <Award size={14} />
                        Excelência Comprovada
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`mb-6 tracking-tight leading-tight gap-3 ${isBrand ? 'text-white' : 'text-slate-900'}`}
                    >
                        Apenas Profissionais <br className="hidden md:block" />
                        <span className={`text-transparent bg-clip-text ${isBrand ? 'bg-gradient-to-r from-blue-100 to-white' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>Passam Pelo Nosso Crivo.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${isBrand ? 'text-blue-100' : 'text-slate-600'}`}
                    >
                        Não somos um banco de talentos genérico. Somos uma curadoria de elite. <br />
                        Nosso processo de seleção é rigoroso para garantir que sua demanda seja executada com maestria.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full flex justify-center w-full"
                        >
                            <VettingStepCard number={index + 1} {...step} isBrand={isBrand} />
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    )
}
