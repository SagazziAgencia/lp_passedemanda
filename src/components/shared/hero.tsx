'use client';

import {
    Gift,
    Handshake,
    ShieldCheck,
    Users,
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
    onlineTalentCount: number;
    onRegisterClick: () => void;
}

export default function Hero({ onlineTalentCount, onRegisterClick }: HeroProps) {
    return (
        <section className="relative bg-slate-950 border-b border-white/10 pt-24 pb-32">
            {/* Subtle Grid Background - Mathematical/Technical trust */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Authority/Status Badge - Clean, no gimmicks */}
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 mb-8 cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 text-xs font-mono font-medium tracking-wide uppercase">
                        {onlineTalentCount} Profissionais Online
                    </span>
                </div>

                {/* Main Headline - High contrast, legible, confident */}
                <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] md:leading-[1.15]">
                    Não deixe dinheiro na mesa.<br className="hidden md:block" />
                    <span className="text-slate-400 block md:inline mt-2 md:mt-0">Monetize os clientes que você recusa.</span>
                </h1>

                {/* Subheadline - Direct and specific */}
                <p className="max-w-2xl text-base md:text-lg text-slate-400 mb-8 md:mb-10 leading-relaxed font-normal px-4">
                    Transforme leads perdidos em <strong className="text-white font-medium">receita recorrente</strong> com segurança.
                    Conectamos sua demanda a profissionais verificados e garantimos sua comissão via contrato inteligente.
                </p>

                {/* Primary CTA - Solid, actionable */}
                <div className="flex flex-col items-center gap-6 mb-16 md:mb-20 w-full px-4">
                    <Button
                        size="lg"
                        onClick={onRegisterClick}
                        className="h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto min-w-[280px]"
                    >
                        Começar agora
                    </Button>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            Dados protegidos
                        </span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
                        <span>Sem custo de adesão</span>
                    </div>
                </div>

                {/* Trust/Value Props - Grounded Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left">
                    {/* Card 1 */}
                    <div className="group p-6 rounded-xl bg-slate-900 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/5">
                                <Gift className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="font-semibold text-white text-lg">Comissão Garantida</h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Receba <span className="text-emerald-400 font-medium">25%</span> de todo projeto fechado. O split de pagamento é automático e transparente.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-6 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-colors duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/5">
                                <Handshake className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-white text-lg">Match Qualificado</h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Sua indicação vai para profissionais com o perfil exato da demanda. Menos ruído, mais conversão.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group p-6 rounded-xl bg-slate-900 border border-white/5 hover:border-purple-500/30 transition-colors duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/5">
                                <ShieldCheck className="w-5 h-5 text-purple-400" />
                            </div>
                            <h3 className="font-semibold text-white text-lg">Segurança Jurídica</h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Contratos padronizados e intermediação financeira segura. Você não se preocupa com a cobrança.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
