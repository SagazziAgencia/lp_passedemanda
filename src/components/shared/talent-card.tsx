'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { Professional } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
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
            className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={onSelect}
        >
            <CardContent className="p-5 flex-1 flex flex-col text-sm">
                <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                        <Avatar className="w-16 h-16 rounded-full">
                            <AvatarImage src={professional.avatar} alt={professional.name} />
                            <AvatarFallback className="rounded-full bg-muted text-xl">{initials}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
                           <CheckCircle className="w-5 h-5 text-emerald-500" strokeWidth={2} />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-headline font-bold text-foreground text-lg truncate group-hover:text-primary transition-colors">
                            {professional.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium truncate">
                            {professional.role}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {professional.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="font-semibold text-xs py-1 px-2 border-gray-200 bg-gray-50 text-gray-600">
                            {skill}
                        </Badge>
                    ))}
                </div>

                <div className="mb-5">
                    <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Satisfação</span>
                        <span className="text-sm text-foreground font-bold">{satisfaction}%</span>
                    </div>
                    <Progress value={satisfaction} className="h-2 bg-emerald-100 [&>div]:bg-emerald-400" />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center border-t border-b py-3 my-auto">
                    <div>
                        <span className="text-xs text-muted-foreground font-bold uppercase">Resp.</span>
                        <p className="text-sm font-bold text-foreground">{professional.averageResponseTime || '30m'}</p>
                    </div>
                     <div className='border-l border-r'>
                        <span className="text-xs text-muted-foreground font-bold uppercase">Prazo</span>
                        <p className="text-sm font-bold text-foreground">{professional.averageDeliveryTime || '2d'}</p>
                    </div>
                    <div>
                        <span className="text-xs text-muted-foreground font-bold uppercase">Valor</span>
                         <p className="text-sm font-bold text-foreground">
                            R$ {professional.hourlyRate}<span className="text-xs text-muted-foreground font-normal">/h</span>
                        </p>
                    </div>
                </div>
            </CardContent>

            <div className="p-4 pt-0 mt-2">
                <Button variant="outline" className="w-full h-10 rounded-lg font-bold text-primary border-primary/50 hover:bg-primary/10 transition-all">
                    Passar Demanda
                </Button>
            </div>
        </Card>
    );
};

export default TalentCard;
