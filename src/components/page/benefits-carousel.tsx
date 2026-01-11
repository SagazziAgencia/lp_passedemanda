'use client';
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "../ui/badge";
import { Gift, Handshake, ShieldCheck, Zap, Users, Award } from "lucide-react";

const benefits = [
    { icon: Gift, text: 'Indique e Ganhe 25%' },
    { icon: Handshake, text: 'Networking Valioso' },
    { icon: ShieldCheck, text: 'Clientes Qualificados' },
    { icon: Award, text: 'Talentos Verificados' },
    { icon: Users, text: 'Comunidade Ativa' },
    { icon: Zap, text: 'Resposta Rápida' },
];

export default function BenefitsCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <div className="py-6 bg-background border-y border-border">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-2">
                    {[...benefits, ...benefits].map((benefit, index) => ( // Duplicate for seamless loop
                        <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                            <div className="p-1">
                                <Badge variant="outline" className="w-full justify-center p-3 border-border hover:bg-accent transition-colors">
                                    <benefit.icon className="h-4 w-4 mr-2 text-primary" />
                                    <span className="font-semibold text-foreground text-sm">{benefit.text}</span>
                                </Badge>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
