import { motion } from 'framer-motion'
import { Search, ShieldCheck, Clock, MapPin, TrendingUp, Code, UserCheck, Star, Zap, CheckCircle2, ArrowRight, Trophy } from 'lucide-react'
import { CTAButton } from './ui/CTAButton'
import { LayeredBackground } from './LayeredBackground'

const PerspectiveLabel = ({ children }) => (
    <div className="mb-6 flex items-center gap-3">
        <div className="h-px w-8 bg-blue-600"></div>
        <span className="text-sm md:text-base font-black uppercase tracking-[0.15em] text-blue-600">
            {children}
        </span>
    </div>
)

const ClientViewProfile = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-blue-500/30 max-w-md"
    >
        {/* Header with Icon Profile */}
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg overflow-hidden flex-shrink-0">
                <Zap size={24} className="fill-current" />
            </div>
            <div>
                <h4 className="text-base font-black text-slate-900 leading-none mb-1.5">Sagazzi</h4>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">AFTER EFFECTS</div>
            </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
            {['AFTER EFFECTS', 'GOOGLE ADS', 'COPYWRITING'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[8px] font-black text-slate-500 uppercase tracking-tighter">
                    {tag}
                </span>
            ))}
        </div>

        {/* Recent Works */}
        <div className="mb-6">
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">TRABALHOS RECENTES</div>
            <div className="w-16 h-11 rounded-lg bg-blue-600 flex items-center justify-center p-2">
                <div className="text-white text-[7px] font-black uppercase tracking-tighter text-center">PASSE DEMANDA</div>
            </div>
        </div>

        {/* Satisfaction Bar */}
        <div className="mb-4 pt-4 border-t border-slate-50">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">SATISFAÇÃO</span>
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">100%</span>
            </div>
            <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500 rounded-full"></div>
            </div>
        </div>

        {/* Avg Response Time */}
        <div className="mb-6">
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">RESP. MÉDIA</div>
            <div className="text-xs font-black text-slate-900">30m</div>
        </div>

        {/* Final CTA */}
        <CTAButton className="w-full text-[10px] py-3 text-blue-600 border-blue-600 hover:text-white" showIcon={false}>
            PASSAR DEMANDA
        </CTAButton>
    </motion.div>
)

const ProfessionalViewDemand = () => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-blue-500/30 max-w-md"
    >
        {/* Header with Icon */}
        <div className="flex items-start gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0">
                <Trophy size={20} />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="text-base font-black text-slate-900 leading-snug mb-1 line-clamp-2">
                    Especialista em Estruturação de Infoprodutos
                </h4>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">CONSULTORIA</div>
            </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100 rounded">
                HIGH TICKET
            </span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 font-medium mb-4">Busco especialista para estruturação pedagógica e comercial de curso online.</p>

        {/* Separator */}
        <div className="h-px bg-slate-100 w-full mb-4"></div>

        {/* Client Status Section */}
        <div className="mb-6">
            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">NOVO CLIENTE</div>
            <div className="h-1 w-full bg-orange-50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#F5D5B0] rounded-full"></div>
            </div>
        </div>

        {/* Three Column Meta Section */}
        <div className="grid grid-cols-3 gap-1 py-4 border-t border-slate-100 mb-4">
            <div className="border-r border-slate-100 pr-1">
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1.5">PRAZO</div>
                <div className="flex items-center gap-1 text-[10px] font-black text-slate-950">
                    <Clock size={12} className="text-slate-400" />
                    23/01/26
                </div>
            </div>
            <div className="border-r border-slate-100 px-1">
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1.5">PROPOSTAS</div>
                <div className="flex items-center gap-1 text-[10px] font-black text-slate-950">
                    <TrendingUp size={12} className="text-blue-500" />
                    2
                </div>
            </div>
            <div className="pl-1 text-right">
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1.5">VALOR</div>
                <div className="px-1.5 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black rounded flex justify-center">
                    R$ 7.000
                </div>
            </div>
        </div>

        {/* Final CTA */}
        <CTAButton className="w-full text-[10px] py-3 text-blue-600 border-blue-600 hover:text-white" showIcon={false}>
            VER DETALHES
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </CTAButton>
    </motion.div>
)

export function Marketplace({ variant }) {

    return (
        <section className={`relative py-24 lg:py-32 overflow-hidden min-h-screen flex flex-col justify-center bg-white`}>
            {/* Background Grid Pattern */}
            <LayeredBackground variant={variant} />

            <div className="container relative z-10 px-6 mx-auto">

                {/* Header Context matched with Problem Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="mb-6 leading-[1.2] lg:leading-[1.1] text-slate-900">
                        Ambiente Blindado para <br />
                        <span className="text-blue-600">
                            Negócios De Alto Nível.
                        </span>
                    </h2>
                    <p className="text-base lg:text-lg mb-10 leading-relaxed max-w-2xl mx-auto text-slate-600">
                        Conectamos demandas de alto valor a especialistas validados. A única plataforma com segurança jurídica e pagamento garantido em contrato.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto">
                    {/* CONTAINER FORMALLY */}
                    <div className="relative rounded-[2.5rem] overflow-hidden border shadow-2xl p-8 md:p-12 lg:px-16 lg:py-20 bg-white border-slate-200 shadow-slate-200/50">

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">

                            {/* CLIENT SIDE */}
                            <div className="flex flex-col flex-1 h-full">
                                <PerspectiveLabel>Para Clientes</PerspectiveLabel>
                                <div className="mb-8 lg:h-32">
                                    <h3 className="mb-4 text-slate-900">
                                        Encontre Talentos Verificados
                                    </h3>
                                    <p className="text-sm leading-relaxed font-medium text-slate-500">
                                        Pare de arriscar seu capital. Tenha acesso a perfis auditados, com portfólio validado e histórico real de entregas.
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <ClientViewProfile />
                                </div>
                            </div>

                            {/* PROFESSIONAL SIDE */}
                            <div className="flex flex-col flex-1 h-full">
                                <PerspectiveLabel>Para Profissionais</PerspectiveLabel>
                                <div className="mb-8 lg:h-32">
                                    <h3 className="mb-4 text-slate-900">
                                        Demanda Real & Pagamento Garantido
                                    </h3>
                                    <p className="text-sm leading-relaxed font-medium text-slate-500">
                                        Chega de inadimplência. Trabalhe com a garantia de adiantamento entre 30% e 50% antes do contrato ser assinado.
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <ProfessionalViewDemand />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <CTAButton
                        href="https://app.passedemanda.com/register"
                        className="text-blue-600 border-blue-600 hover:text-white"
                        showIcon={false}
                    >
                        <span className="flex items-center gap-2">
                            Começar Agora
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </CTAButton>
                    <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Setup em apenas 2 minutos</p>
                </div>
            </div>
        </section>
    )
}
