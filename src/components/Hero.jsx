import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { CTAButton } from './ui/CTAButton'
import { LayeredBackground } from './LayeredBackground'
import { HeroVideo } from './HeroVideo'

export function Hero({ variant }) {
    return (
        <section className="relative min-h-[90vh] pt-32 pb-32 flex flex-col overflow-hidden bg-white">
            {/* Background Grid & Effects */}
            <LayeredBackground variant={variant} />

            {/* Decorative Map Backgrounds - Absolute to Section */}
            <div
                className="absolute left-0 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-20 pointer-events-none select-none z-[1] mix-blend-multiply"
                style={{ bottom: 0, transform: 'translateY(35%)' }}
            >
                <img src="/bg-map.png" alt="" className="w-full h-full object-contain -translate-x-1/3" />
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-20 pointer-events-none select-none z-[1] mix-blend-multiply">
                <img src="/bg-map.png" alt="" className="w-full h-full object-contain translate-x-1/3 scale-x-[-1]" />
            </div>

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">

                {/* Trust/Social Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-2 text-center mb-8"
                >
                    <div className="flex -space-x-3">
                        {[
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64',
                            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64',
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64',
                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64'
                        ].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Member ${i + 1}`}
                                className="w-8 h-8 rounded-full border-2 border-white object-cover ring-2 ring-slate-100"
                            />
                        ))}
                    </div>
                    <p className="text-sm font-medium text-slate-500">
                        Junte-se a <span className="text-slate-900 font-bold">+500 profissionais</span> aprovados
                    </p>
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs lg:text-sm font-bold rounded-full border transition-colors duration-300 text-blue-700 bg-blue-50 border-blue-200"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    Networking de Alta Confiança
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center mb-8 leading-[1.1] text-slate-900 max-w-6xl mx-auto"
                >
                    A rede de negócios mais segura do País <br className="hidden md:block" />
                    <span className="text-blue-600">
                        para clientes e profissionais
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-300 text-slate-600 font-medium"
                >
                    Segurança, Qualidade, Confiança e Profissionalismo. <br />
                    <span className="font-normal text-slate-500">Um ecossistema em que os melhores clientes encontram os melhores profissionais do País.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-24 w-full sm:w-auto"
                >
                    <CTAButton
                        href="https://app.passedemanda.com/register"
                        className="w-full sm:w-auto text-blue-600 border-blue-600 hover:text-white"
                        showIcon={false}
                    >
                        Começar Agora
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </CTAButton>

                    <a
                        href="#como-funciona"
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl border-2 px-8 font-bold backdrop-blur-sm transition-all duration-300 active:scale-95 border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
                    >
                        <span className="flex items-center gap-2">
                            <Play className="w-4 h-4 fill-current text-blue-500" />
                            Como o Sistema Funciona
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Central Image Swap - Moved outside container but kept in section flex for alignment */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full relative z-10 flex justify-center mt-12"
            >
                <HeroVideo />
            </motion.div>
        </section>
    )
}
