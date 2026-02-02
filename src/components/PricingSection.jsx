import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { CTAButton } from './ui/CTAButton'
import { LayeredBackground } from './LayeredBackground'

const PlanFeature = ({ text }) => (
    <div className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-0">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <Check size={12} strokeWidth={3} />
        </div>
        <span className="text-sm text-slate-600">{text}</span>
    </div>
)

export function PricingSection({ variant }) {
    const [billingCycle, setBillingCycle] = useState('monthly')

    return (
        <section className={`relative py-24 border-t transition-colors duration-300 border-white bg-slate-50 min-h-screen flex flex-col justify-center`} id="precos">
            {/* Background Grid Pattern */}
            <LayeredBackground variant={variant} />
            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest rounded-sm bg-slate-100 text-slate-600 border border-slate-200">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        Planos para Profissionais
                    </div>
                    <h2 className="mb-6">
                        Cresça sua carreira com <br className="hidden md:block" />
                        o plano ideal.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Comece de graça e escale conforme fecha mais projetos e aumenta sua reputação na plataforma.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid md:grid-cols-3 border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50">

                    {/* Free Plan */}
                    <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col hover:bg-slate-50/50 transition-colors">
                        <div className="mb-4">
                            <h3 className="mb-1 text-slate-900">Free</h3>
                            <p className="text-sm text-slate-500">Para quem está começando e quer validar suas habilidades.</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-black text-slate-900">R$0</span>
                            <span className="text-slate-400 font-medium">/mês</span>
                            <p className="text-xs text-slate-400 mt-2">Sem cartão de crédito necessário</p>
                        </div>
<CTAButton className="w-full h-14 mb-8 text-slate-700 border-slate-200 hover:border-blue-600 hover:text-blue-600 shadow-sm" showIcon={false}>
                            Começar Grátis
                        </CTAButton>
                        <div className="border-t border-slate-200 pt-6 flex-1">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Recursos Incluídos</p>
                            <PlanFeature text="Perfil Básico na Busca" />
                            <PlanFeature text="Até 3 Propostas por mês" />
                            <PlanFeature text="Taxa de Serviço Padrão (15%)" />
                            <PlanFeature text="Pagamentos Seguros" />
                        </div>
                    </div>

                    {/* Basic Plan */}
                    <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col relative bg-slate-50/30">
                        <div className="mb-4">
                            <h3 className="mb-1 text-slate-900">Basic</h3>
                            <p className="text-sm text-slate-500">Para profissionais ativos buscando mais visibilidade.</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-black text-slate-900">R$49</span>
                            <span className="text-slate-400 font-medium">/mês</span>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">POUPULAR</span>
                            </div>
                        </div>
<CTAButton className="w-full h-14 mb-8 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-lg shadow-blue-500/20" showIcon={false}>
                            Assinar Basic
                        </CTAButton>
                        <div className="border-t border-slate-200 pt-6 flex-1">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Tudo do Free, mais:</p>
                            <PlanFeature text="Perfil Destacado" />
                            <PlanFeature text="15 Propostas por mês" />
                            <PlanFeature text="Taxa Reduzida (12%)" />
                            <PlanFeature text="Selo de Verificado (após análise)" />
                            <PlanFeature text="Alertas de Vagas em Tempo Real" />
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="p-6 md:p-8 flex flex-col hover:bg-slate-50/50 transition-colors">
                        <div className="mb-4">
                            <h3 className="mb-1 text-slate-900">Pro</h3>
                            <p className="text-sm text-slate-500">Para agências e profissionais de alta performance.</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-black text-slate-900">R$129</span>
                            <span className="text-slate-400 font-medium">/mês</span>
                            <p className="text-xs text-slate-400 mt-2">Faturamento anual disponível</p>
                        </div>
<CTAButton className="w-full h-14 mb-8 text-slate-700 border-slate-200 hover:border-blue-600 hover:text-blue-600 shadow-sm" showIcon={false}>
                            Falar com Consultor
                        </CTAButton>
                        <div className="border-t border-slate-200 pt-6 flex-1">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Tudo do Basic, mais:</p>
                            <PlanFeature text="Propostas Ilimitadas" />
                            <PlanFeature text="Menor Taxa do Mercado (8%)" />
                            <PlanFeature text="Gerente de Conta Dedicado" />
                            <PlanFeature text="Acesso à API de Leads" />
                            <PlanFeature text="Prioridade no Suporte" />
                        </div>
                    </div>
                </div>

                {/* FAQ Link or Trust Signal */}
                <div className="mt-16 text-center border-t border-slate-200 pt-10">
                    <p className="text-slate-500 text-sm">
                        Dúvidas sobre os planos? <a href="#" className="text-blue-600 font-bold hover:underline">Confira nosso FAQ</a> ou entre em contato com o suporte.
                    </p>
                    <div className="flex justify-center gap-8 mt-6 opacity-60 grayscale">
                        {/* Placeholder logos for trust like 'Stripe', 'Visa', etc could go here */}
                    </div>
                </div>
            </div>
        </section>
    )
}
