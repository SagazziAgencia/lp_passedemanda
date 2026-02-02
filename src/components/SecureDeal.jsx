import { motion } from 'framer-motion'
import { MessageSquare, FileText, CreditCard, Shield, Lock, ArrowRight } from 'lucide-react'
import { LayeredBackground } from './LayeredBackground'

export function SecureDeal({ variant = 'white' }) {
    const isBrand = variant === 'brand'

    const steps = [
        {
            title: "Chat Privado & Seguro",
            description: "Negocie cada detalhe da sua demanda em um ambiente seguro e auditável. Privacidade total para empresas e especialistas.",
            icon: MessageSquare,
            tag: "Negociação",
            color: "blue"
        },
        {
            title: "Contrato Gerado na Hora",
            description: "Esqueça a burocracia. Ao fechar o acordo, um contrato inteligente e juridicamente válido é gerado automaticamente com os termos combinados.",
            icon: FileText,
            tag: "Burocracia Zero",
            color: "indigo"
        },
        {
            title: "Link de Pagamento & Garantia",
            description: "Pagamento seguro via plataforma. Profissionais trabalham com adiantamento garantido e clientes têm a entrega protegida em contrato.",
            icon: CreditCard,
            tag: "Financeiro",
            color: "blue"
        }
    ]

    return (
        <section className={`relative py-24 lg:py-32 overflow-hidden ${isBrand ? 'bg-slate-950' : 'bg-white'}`}>
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
                        <Shield size={14} />
                        Ambiente Blindado
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`mb-6 tracking-tight leading-tight ${isBrand ? 'text-white' : 'text-slate-900'}`}
                    >
                        De ponta a ponta, <br className="hidden md:block" />
                        <span className={`text-transparent bg-clip-text ${isBrand ? 'bg-gradient-to-r from-blue-100 to-white' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>Tudo dentro da plataforma.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${isBrand ? 'text-blue-100' : 'text-slate-600'}`}
                    >
                        Centralize a gestão da sua demanda. Tenha segurança jurídica,
                        agilidade no fechamento e pagamentos garantidos para ambas as partes.
                    </motion.p>
                </div>

                {/* Secure Flow Grid */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${isBrand
                                ? 'bg-slate-900/50 border-white/5 hover:border-blue-500/30 hover:bg-slate-900'
                                : 'bg-white border-slate-100 hover:border-blue-100 shadow-sm'}`}
                        >
                            {/* Icon Background */}
                            <div className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${isBrand
                                ? 'bg-blue-500/10 text-blue-400'
                                : 'bg-blue-50 text-blue-600'}`}>
                                <step.icon size={28} />
                            </div>

                            <div className={`mb-4 inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isBrand
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                {step.tag}
                            </div>

                            <h3 className={`text-xl font-bold mb-4 ${isBrand ? 'text-white' : 'text-slate-900'}`}>
                                {step.title}
                            </h3>

                            <p className={`text-sm leading-relaxed ${isBrand ? 'text-slate-400' : 'text-slate-500'}`}>
                                {step.description}
                            </p>

                            {/* Decorative Step Number */}
                            <div className={`absolute top-8 right-8 text-4xl font-black opacity-5 pointer-events-none select-none ${isBrand ? 'text-white' : 'text-slate-900'}`}>
                                0{index + 1}
                            </div>

                            {/* Arrow decoration for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                                    <div className={`p-1.5 rounded-full border ${isBrand ? 'bg-slate-950 border-white/10 text-white/20' : 'bg-white border-slate-100 text-slate-300'}`}>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Trust Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={`mt-20 flex flex-wrap items-center justify-center gap-8 py-8 border-y ${isBrand ? 'border-white/5' : 'border-slate-100'}`}
                >
                    <div className="flex items-center gap-2">
                        <Lock size={16} className="text-blue-500" />
                        <span className={`text-xs font-bold uppercase tracking-wider ${isBrand ? 'text-slate-400' : 'text-slate-500'}`}>LGPD Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield size={16} className="text-blue-500" />
                        <span className={`text-xs font-bold uppercase tracking-wider ${isBrand ? 'text-slate-400' : 'text-slate-500'}`}>Garantia em Contrato</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard size={16} className="text-blue-500" />
                        <span className={`text-xs font-bold uppercase tracking-wider ${isBrand ? 'text-slate-400' : 'text-slate-500'}`}>Checkout Seguro</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
