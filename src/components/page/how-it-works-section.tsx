'use client';
import {
    Gift,
    Compass,
    BarChart,
    DollarSign,
    UserPlus,
    ShieldCheck,
} from 'lucide-react';
import BenefitCard from '@/components/shared/benefit-card';

const HowItWorksSection = () => {
    return (
        <section className="mb-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Como funciona?</h2>
                <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
                    O PasseDemanda conecta quem precisa de um serviço a quem pode executá-lo,
                    recompensando quem faz a ponte.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-primary text-center md:text-left">
                        Você <span className="font-extrabold">passa a demanda</span>
                    </h3>
                    <BenefitCard
                        icon={Gift}
                        title="Ganhe 25% por indicação"
                        description="Monetize seu networking indicando demandas que não pode atender. Sem esforço, com retorno garantido."
                        variant="primary"
                    />
                    <BenefitCard
                        icon={Compass}
                        title="Encontre o talento ideal"
                        description="Acesse uma rede de profissionais validados pela comunidade para garantir a qualidade da entrega."
                        variant="primary"
                    />
                    <BenefitCard
                        icon={BarChart}
                        title="Acompanhe seus ganhos"
                        description="Um dashboard simples e transparente para visualizar o status das suas indicações e o comissionamento."
                        variant="primary"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-muted-foreground text-center md:text-left">
                        Você <span className="font-extrabold">executa a demanda</span>
                    </h3>
                    <BenefitCard
                        icon={DollarSign}
                        title="Receba jobs qualificados"
                        description="Diga adeus à prospecção. Receba projetos alinhados às suas habilidades, com escopo e budget definidos."
                        variant="accent"
                    />
                    <BenefitCard
                        icon={UserPlus}
                        title="Custo zero de aquisição"
                        description="Concentre-se no que faz de melhor. Deixe que a rede do PasseDemanda traga os clientes até você."
                        variant="accent"
                    />
                    <BenefitCard
                        icon={ShieldCheck}
                        title="Pagamento garantido"
                        description="Trabalhe com a segurança de uma plataforma que intermedia o pagamento e garante o seu recebimento."
                        variant="accent"
                    />
                </div>
            </div>
        </section>
    );
};
export default HowItWorksSection;
