'use client';

import React from 'react';
import Image from 'next/image';
import type { Professional } from '@/types';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Briefcase, Star, Clock, Link as LinkIcon } from 'lucide-react';

interface PortfolioModalProps {
    professional: Professional;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ professional, open, onOpenChange }) => {
    const initials = professional.name.split(' ').map(n => n[0]).join('');
    const satisfaction = professional.satisfaction || Math.round((professional.rating / 5) * 100);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl w-full p-0 bg-slate-900 border-slate-700 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 bg-slate-800/50 p-8 flex flex-col items-center text-center">
                        <Avatar className="w-32 h-32 rounded-xl mb-4 border-4 border-slate-900 shadow-lg">
                            <AvatarImage src={professional.avatar} alt={professional.name} />
                            <AvatarFallback className="rounded-xl text-4xl bg-slate-700">{initials}</AvatarFallback>
                        </Avatar>
                        <DialogTitle className="text-2xl font-headline mb-1">{professional.name}</DialogTitle>
                        <DialogDescription className="text-primary font-semibold mb-6">{professional.role}</DialogDescription>

                        <div className="flex flex-col gap-3 text-left w-full text-sm text-slate-300">
                             <div className="flex items-center gap-3">
                                <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                <span>{professional.rating.toFixed(1)} Rating ({satisfaction}% Satisfação)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{professional.experience}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{professional.averageResponseTime} de resposta</span>
                            </div>
                             <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                <a href={`mailto:${professional.contact}`} className="text-primary hover:underline break-all">
                                    {professional.contact}
                                </a>
                            </div>
                        </div>

                        <Button className="w-full mt-8 bg-primary hover:bg-primary/90">Contratar por R${professional.hourlyRate}/h</Button>
                    </div>
                    <div className="md:col-span-2 p-8 overflow-y-auto max-h-[90vh]">
                        <h3 className="text-lg font-headline font-semibold mb-4">Habilidades</h3>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {professional.skills.map(skill => (
                                <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-slate-700 text-slate-200 hover:bg-slate-600">{skill}</Badge>
                            ))}
                        </div>

                        <h3 className="text-lg font-headline font-semibold mb-4">Portfólio</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {professional.portfolio.length > 0 ? professional.portfolio.map((item, index) => (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                    <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors group">
                                        <div className="p-0">
                                            <div className="aspect-video relative">
                                                <Image src={item.image} alt={item.title} fill className="object-cover" data-ai-hint="website design"/>
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                     <LinkIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-semibold truncate text-white">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </a>
                            )) : (
                                <p className="text-muted-foreground text-sm col-span-2">Nenhum item de portfólio adicionado.</p>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PortfolioModal;
