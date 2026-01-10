'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import type { Professional } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TalentCardProps {
    professional: Professional;
    onSelect: () => void;
    index: number;
}

const TalentCard: React.FC<TalentCardProps> = ({ professional, onSelect, index }) => {
    if (!professional) return null;

    const satisfaction = professional.satisfaction || Math.round((professional.rating / 5) * 100);
    const initials = professional.name.split(' ').map(n => n[0]).join('');

    return (
        <Card
            className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={onSelect}
        >
            <div className="h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

            <CardContent className="p-4 flex-1 flex flex-col text-sm">
                <div className="flex items-center gap-3 mb-3">
                    <div className="relative flex-shrink-0">
                        <Avatar className="w-12 h-12 rounded-xl">
                            <AvatarImage src={professional.avatar} alt={professional.name} />
                            <AvatarFallback className="rounded-xl bg-muted">{initials}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5 border-2 border-card shadow-sm">
                            <CheckCircle className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-headline font-bold text-foreground text-base truncate group-hover:text-primary transition-colors">
                            {professional.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide truncate">
                            {professional.role}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                    {professional.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-semibold">
                            {skill}
                        </Badge>
                    ))}
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Satisfação</span>
                        <span className="text-sm text-foreground font-black">{satisfaction}%</span>
                    </div>
                    <Progress value={satisfaction} className="h-1.5" />
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground font-bold uppercase">Resp.</span>
                            <span className="text-sm font-bold text-foreground">{professional.averageResponseTime || '30m'}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground font-bold uppercase">Prazo</span>
                            <span className="text-sm font-bold text-foreground">{professional.averageDeliveryTime || '2d'}</span>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-base font-bold text-foreground">
                            R$ {professional.hourlyRate}<span className="text-xs text-muted-foreground font-normal">/h</span>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full h-9 rounded-lg font-semibold text-xs uppercase tracking-wider text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all">
                    Passar Demanda
                </Button>
            </CardFooter>
        </Card>
    );
};

export default TalentCard;
