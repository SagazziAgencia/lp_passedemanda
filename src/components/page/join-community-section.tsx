'use client'
import { Card } from '@/components/shared/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface JoinCommunitySectionProps {
    onRegisterClick: () => void;
}

const JoinCommunitySection: React.FC<JoinCommunitySectionProps> = ({ onRegisterClick }) => {
    return (
        <section className="mt-16 mb-8">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent border-0 text-primary-foreground relative rounded-xl" padding='none'>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-headline font-bold mb-3 text-white">
                            Quer fazer parte?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg max-w-xl">
                            Cadastre-se como profissional e receba demandas de clientes qualificados.
                        </p>
                    </div>
                    <Button
                        size="lg"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 active:bg-primary active:text-primary-foreground active:scale-95 transform transition-all duration-300 px-8 py-4 text-base font-bold shadow-xl flex-shrink-0"
                        onClick={onRegisterClick}
                    >
                        Cadastrar como Talento
                        <ArrowRight />
                    </Button>
                </div>
            </Card>
        </section>
    );
}

export default JoinCommunitySection;
