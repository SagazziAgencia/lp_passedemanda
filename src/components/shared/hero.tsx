'use client';
import {
    Award,
    Gift,
    Handshake,
    ShieldCheck,
} from 'lucide-react';

interface HeroProps {
    onlineTalentCount: number;
}

export default function Hero({ onlineTalentCount }: HeroProps) {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 via-gray-900/0 to-slate-900/0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[80px]" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="relative z-10 px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 text-sm font-medium">
                            Pagamento seguro e transações protegidas
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-4 tracking-tight">
                        Sua demanda vale dinheiro.
                        <br />
                        Indique e ganhe{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-primary to-accent/80">
                                25%
                            </span>
                            <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -skew-x-12 rounded" />
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Conecte profissionais a oportunidades e seja recompensado por isso. Simples, rápido e lucrativo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-left text-sm">
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                            <Gift className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white">Para quem indica</h3>
                                <p className="text-slate-400">Monetize seu networking e demandas que não consegue atender.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                            <Handshake className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white">Para quem executa</h3>
                                <p className="text-slate-400">Receba demandas qualificadas sem gastar com prospecção.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                            <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white">Para o cliente final</h3>
                                <p className="text-slate-400">Acesse talentos validados por indicações de confiança.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
