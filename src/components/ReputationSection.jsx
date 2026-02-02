import { motion } from 'framer-motion'
import { Star, Shield, ThumbsUp, Medal, Quote, User, Briefcase } from 'lucide-react'
import { LayeredBackground } from './LayeredBackground'

const ReviewCard = ({ type, name, role, rating, comment, metrics, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={`relative p-8 rounded-3xl border transition-all duration-300 shadow-lg ${type === 'client'
            ? 'bg-white border-blue-100 hover:border-blue-500/50'
            : 'bg-white border-emerald-100 hover:border-emerald-500/50'
            }`}
    >
        {/* Badge / Type */}
        <div className={`absolute -top-3 left-8 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${type === 'client'
            ? 'bg-blue-50 text-blue-600 border-blue-100'
            : 'bg-emerald-50 text-emerald-600 border-emerald-100'
            }`}>
            {type === 'client' ? 'Avaliação do Profissional' : 'Avaliação do Cliente'}
        </div>

        {/* Header */}
        <div className="flex justify-between items-start mb-6 mt-2">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${type === 'client' ? 'border-blue-500/20 bg-blue-50 text-blue-500' : 'border-emerald-500/20 bg-emerald-50 text-emerald-500'
                    }`}>
                    {type === 'client' ? <User size={20} /> : <Briefcase size={20} />}
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold text-base">{name}</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{role}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex text-yellow-500 gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(rating) ? "currentColor" : "none"} className={i < Math.floor(rating) ? "" : "text-slate-200"} />
                    ))}
                </div>
                <span className="text-slate-500 text-xs font-bold">{rating.toFixed(1)}/5.0</span>
            </div>
        </div>

        {/* Comment */}
        <div className="mb-6 relative">
            <Quote size={24} className="absolute -top-2 -left-2 text-slate-100 rotate-180" />
            <p className="text-slate-600 text-sm leading-relaxed pl-6 italic">
                "{comment}"
            </p>
        </div>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100">
            {metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400">{m.label}</span>
                    <div className="flex items-center gap-1.5">
                        <div className={`h-1.5 w-12 rounded-full bg-slate-100 overflow-hidden`}>
                            <div
                                className={`h-full rounded-full ${type === 'client' ? 'bg-blue-500' : 'bg-emerald-500'}`}
                                style={{ width: `${(m.score / 5) * 100}%` }}
                            />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700">{m.score}</span>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
)

export function ReputationSection({ variant }) {
    return (
        <section className={`relative py-24 lg:py-32 overflow-hidden bg-white`}>
            {/* Background Effects */}
            <LayeredBackground variant={variant} />

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest">
                        <Medal size={14} className="text-yellow-500" />
                        Transparência Total
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight leading-tight text-slate-900">
                        Sua Reputação é seu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                            Maior Ativo.
                        </span>
                    </h2>

                    <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Aqui, o jogo é limpo. Profissionais são avaliados pela entrega e Clientes pela clareza e conduta. <br className="hidden md:block" />
                        Construa um perfil blindado e feche negócios melhores.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
                    {/* Professional Rating Client */}
                    <ReviewCard
                        type="client"
                        name="Roberto M."
                        role="Profissional (Copywriter)"
                        rating={5.0}
                        comment="O cliente foi extremamente claro no briefing e liberou o pagamento 10min após a entrega. Recomendo demais!"
                        delay={0.1}
                        metrics={[
                            { label: "Clareza", score: 5.0 },
                            { label: "Comunicação", score: 4.9 },
                            { label: "Pagamento", score: 5.0 },
                            { label: "Respeito", score: 5.0 }
                        ]}
                    />

                    {/* Client Rating Professional */}
                    <ReviewCard
                        type="professional"
                        name="Agência V4"
                        role="Cliente (Contratante)"
                        rating={4.9}
                        comment="A Ana superou as expectativas. Entregou antes do prazo e o material veio pronto para rodar. Profissional de elite."
                        delay={0.2}
                        metrics={[
                            { label: "Qualidade", score: 5.0 },
                            { label: "Prazo", score: 5.0 },
                            { label: "Técnica", score: 4.8 },
                            { label: "Comunicação", score: 4.9 }
                        ]}
                    />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
                        <Shield size={16} />
                        Avaliações auditadas e imutáveis registradas na plataforma.
                    </p>
                </div>
            </div>
        </section>
    )
}
