'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { Professional } from '@/types';
import { Card } from '@/components/shared/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TalentCardProps {
    professional: Professional;
    onSelect: () => void;
    onRegisterClick: () => void;
    index: number;
}

const TalentCard: React.FC<TalentCardProps> = ({ professional, onSelect, onRegisterClick, index }) => {
    if (!professional) return null;

    const satisfaction = professional.satisfaction || Math.round((professional.rating / 5) * 100);
    const initials = professional.name.split(' ').map(n => n[0]).join('');

    return (
        <Card
            onClick={onSelect}
            hoverEffect
            variant="default"
            className="flex flex-col h-full animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
            padding="none"
        >
            <div className="p-5 flex-1 flex flex-col text-sm">
                <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                        <Avatar className="w-16 h-16 rounded-xl">
                            <AvatarImage src={professional.avatar} alt={professional.name} />
                            <AvatarFallback className="rounded-xl bg-muted text-xl">{initials}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-card rounded-full p-0.5">
                            <CheckCircle className="w-5 h-5 text-emerald-500" strokeWidth={2} />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-headline font-bold text-foreground text-lg truncate group-hover:text-primary transition-colors">
                            {professional.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium uppercase truncate">
                            {professional.role}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                    {professional.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-semibold text-xs py-1 px-2">
                            {skill}
                        </Badge>
                    ))}
                </div>

                <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                        <span className="font-bold text-foreground">{satisfaction}%</span>
                        <span>Satisfação</span>
                        <Progress value={satisfaction} className="h-1.5 w-full bg-secondary" />
                    </div>


                    <div className="grid grid-cols-3 gap-2 text-left my-auto pt-2">
                        <div>
                            <span className="text-xs text-muted-foreground font-bold uppercase">Resp.</span>
                            <p className="text-sm font-bold text-foreground">{professional.averageResponseTime || '1h'}</p>
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground font-bold uppercase">Prazo</span>
                            <p className="text-sm font-bold text-foreground">{professional.averageDeliveryTime || '5 dias'}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-xs text-muted-foreground font-bold uppercase">Valor/h</span>
                            <p className="text-sm font-bold text-foreground">
                                R$ {professional.hourlyRate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 pt-0">
                <Button
                    variant="outline"
                    className="w-full h-10 rounded-lg font-bold text-primary border-primary/20 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={(e) => { e.stopPropagation(); onRegisterClick(); }}
                >
                    Passar Demanda
                </Button>
            </div>
        </Card>
    );
};

export default TalentCard;
