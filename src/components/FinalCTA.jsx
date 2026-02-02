import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { CTAButton } from './ui/CTAButton'

export function FinalCTA() {
    return (
        <section className="py-24 lg:py-32 px-6">
            <div className="container mx-auto">
                <div className="relative rounded-[3rem] bg-blue-600 overflow-hidden p-12 lg:p-24 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 blur-[100px] -ml-48 -mb-48 rounded-full"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-50 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            <Zap size={14} className="fill-current" />
                            Acesso Imediato
                        </div>

                        <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            Pronto para transformar <br className="hidden md:block" />
                            seu Networking em Receita?
                        </h2>

                        <p className="text-xl lg:text-2xl text-blue-100 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Junte-se a centenas de profissionais de elite que já utilizam o Passe Demanda para escalar seus resultados.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <CTAButton
                                href="https://app.passedemanda.com/register"
                                className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-blue-600"
                                showIcon={false}
                            >
                                Começar Agora
                                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </CTAButton>
                            <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">
                                Sem taxas de adesão
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
