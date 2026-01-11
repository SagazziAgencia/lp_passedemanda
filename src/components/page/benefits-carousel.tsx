'use client';
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
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
        AutoScroll({
            speed: 0.8,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    );

    return (
        <div className="py-12 bg-background border-y border-border">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                    dragFree: true,
                }}
            >
                <CarouselContent className="-ml-2">
                    {[...benefits, ...benefits, ...benefits].map((benefit, index) => ( // Triplicate for smoother loop on wide screens
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
