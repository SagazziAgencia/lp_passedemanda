'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { Professional } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 350, damping: 25 } }}
            className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full cursor-pointer"
            onClick={onSelect}
        >
            {/* Top accent */}
            <div className="h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-4 flex-1 flex flex-col text-sm">
                {/* Header: Identity */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="relative flex-shrink-0">
                        <Avatar className="w-12 h-12 rounded-xl ring-2 ring-background">
                            <AvatarImage src={professional.avatar} alt={professional.name} className="object-cover" />
                            <AvatarFallback className="rounded-xl bg-muted text-muted-foreground">{initials}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-0.5 border-2 border-background shadow-sm">
                            <CheckCircle className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-headline font-bold text-foreground text-sm truncate group-hover:text-primary transition-colors">
                            {professional.name}
                        </h3>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide truncate">
                            {professional.role}
                        </p>
                    </div>
                </div>

                {/* Skills - Compact */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {professional.skills.slice(0, 3).map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-tight"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>

                {/* Status: Satisfaction Bar */}
                <div className="mb-3">
                    <div className="flex justify-start items-end mb-1 gap-2">
                        <span className="text-[10px] text-foreground font-black">{satisfaction}%</span>
                        <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Satisfação</span>
                    </div>
                    <Progress value={satisfaction} className="h-1" />
                </div>

                {/* Footer/Metrics row */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <div className="flex gap-3">
                        <div className="flex flex-col">
                            <span className="text-[9px] text-muted-foreground font-bold uppercase">Resp</span>
                            <span className="text-[10px] font-bold text-foreground">{professional.averageResponseTime || '30m'}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] text-muted-foreground font-bold uppercase">Prazo</span>
                            <span className="text-[10px] font-bold text-foreground">{professional.averageDeliveryTime || '2d'}</span>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-[12px] font-bold text-foreground">
                            R$ {professional.hourlyRate}<span className="text-[9px] text-muted-foreground font-normal">/h</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Area - Subtle Button */}
            <div className="px-4 pb-4">
                <Button
                    variant="outline"
                    className="w-full h-8 rounded-lg font-semibold text-[10px] uppercase tracking-wider text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                    onClick={(e) => {
                        e.stopPropagation();
                        onRegisterClick();
                    }}
                >
                    Passar Demanda
                </Button>
            </div>
        </motion.div>
    );
};

export default TalentCard;
