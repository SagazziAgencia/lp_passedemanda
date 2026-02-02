import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import { LayeredBackground } from './LayeredBackground'
import { LinearFlow } from './LinearFlow'

export function Problem({ variant }) {
    const isBrand = variant === 'brand'

    return (
        <section className={`relative py-24 lg:py-32 overflow-hidden transition-colors duration-300 min-h-screen flex flex-col justify-center ${isBrand ? 'bg-[#020617]' : 'bg-slate-50'}`}>
            {/* Background Grid Pattern */}
            <LayeredBackground variant={variant} />

            <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs lg:text-sm font-bold rounded-full border transition-colors duration-300 ${isBrand
                        ? 'bg-blue-500/10 text-blue-100 border-blue-400/30'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}>
                        <ShieldCheck size={14} className={isBrand ? 'text-blue-400' : 'text-blue-600'} />
                        Segurança & Confiança
                    </div>

                    <h2 className={`text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1] transition-colors duration-300 ${isBrand ? 'text-white' : 'text-slate-900'}`}>
                        Segurança Total Para <br className="hidden md:block" />
                        <span className="text-blue-600">
                            Contratar e Entregar.
                        </span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl leading-relaxed transition-colors duration-300 mb-8">
                        <p className={`font-medium ${isBrand ? 'text-slate-400' : 'text-slate-600'}`}>
                            Acabamos com a incerteza. O projeto começa com um repasse de <span className={`font-bold ${isBrand ? 'text-white' : 'text-slate-900'}`}>50% direto para o profissional</span>, garantindo compromisso real.
                        </p>
                        <p className={`font-normal ${isBrand ? 'text-slate-500' : 'text-slate-500'}`}>
                            Os outros 50% são pagos na <span className={`font-bold ${isBrand ? 'text-white' : 'text-slate-900'}`}>entrega final aprovada</span>. Tudo isso amparado por contrato digital com validade jurídica, eliminando riscos de calote ou de entregas fora do combinado.
                        </p>
                    </div>

                    <a
                        href="https://app.passedemanda.com/register"
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 min-w-[280px]"
                    >
                        Começar agora
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </motion.div>

                {/* Right Column: Visual Z-Track */}
                <div className="w-full flex justify-center lg:justify-end">
                    <LinearFlow embedded variant="brand" layout="zigzag" />
                </div>

            </div>
        </section>
    )
}
