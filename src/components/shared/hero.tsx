'use client';
import {
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
                            O 1º Marketplace de indicação remunerada com split automático.
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-4 tracking-tight">
                       Pare de perder dinheiro recusando clientes.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Repasse os projetos que você não pode atender para profissionais qualificados e garanta <span className="font-bold text-chart-4">25% de comissão imediata</span> sobre o valor fechado. Sem entregar o serviço, apenas pela conexão.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-left text-sm">
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                            <Gift className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white">Lucre com o "Não"</h3>
                                <p className="text-slate-400">Não consegue atender? Indique via plataforma, mantenha o relacionamento e receba 25% do valor sem colocar a mão na massa.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                            <Handshake className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white">Clientes Prontos (Lead Quente)</h3>
                                <p className="text-slate-400">Receba demandas de quem já tem orçamento e urgência. Você fica com 70% do valor e foca apenas na entrega.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                            <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white">Segurança e Confiança</h3>
                                <p className="text-slate-400">Seu pagamento fica protegido no Cofre da Plataforma e só é liberado após a entrega aprovada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
