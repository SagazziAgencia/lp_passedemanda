'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Check, Zap } from 'lucide-react';

interface RegistrationModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const steps = [
    {
        title: 'Qual sua principal área de atuação?',
        description: 'Isso nos ajuda a conectar você com as oportunidades certas.',
        options: ['Desenvolvimento', 'Design', 'Marketing', 'Gerenciamento', 'Outro'],
    },
    {
        title: 'Qual seu nível de experiência?',
        description: 'Seja honesto! Temos oportunidades para todos os níveis.',
        options: ['Iniciante (0-2 anos)', 'Intermediário (2-5 anos)', 'Avançado (5+ anos)'],
    },
    {
        title: 'Junte-se à nossa comunidade!',
        description: 'Você está a um passo de se conectar com outros talentos e receber demandas exclusivas. Clique abaixo para entrar no nosso grupo de WhatsApp.',
    }
];

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onOpenChange }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleSelectOption = (option: string) => {
        const newAnswers = [...answers];
        newAnswers[currentStep] = option;
        setAnswers(newAnswers);
        setTimeout(handleNext, 300);
    };

    const handleJoinCommunity = () => {
        // Substitua 'placeholder' pelo link real do seu grupo de WhatsApp
        window.open('https://chat.whatsapp.com/HJbAJszblEh9NTSdUIrI9j', '_blank');
        onOpenChange(false);
        resetForm();
    };

    const resetForm = () => {
        setCurrentStep(0);
        setAnswers([]);
    };

    const handleModalOpenChange = (open: boolean) => {
        onOpenChange(open);
        if (!open) {
            setTimeout(resetForm, 300);
        }
    };

    const progressValue = ((currentStep + 1) / steps.length) * 100;
    const currentQuestion = steps[currentStep];

    return (
        <Dialog open={isOpen} onOpenChange={handleModalOpenChange}>
            <DialogContent className="sm:max-w-md p-0">
                <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-xl font-headline">{currentQuestion.title}</DialogTitle>
                    <DialogDescription>{currentQuestion.description}</DialogDescription>
                </DialogHeader>

                <div className="p-6">
                    {currentStep < 2 ? (
                        <RadioGroup onValueChange={handleSelectOption} value={answers[currentStep] || ''} className="gap-3">
                            {currentQuestion.options?.map((option) => (
                                <Label key={option} htmlFor={option} className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-accent has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary transition-colors">
                                    <RadioGroupItem value={option} id={option} className="w-5 h-5 text-primary border-muted-foreground" />
                                    <span className="font-semibold">{option}</span>
                                    <Check className="w-5 h-5 ml-auto opacity-0 transition-opacity checked:opacity-100" />
                                </Label>
                            ))}
                        </RadioGroup>
                    ) : (
                        <div className="text-center py-4">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                <Zap className="w-10 h-10 text-green-600" />
                            </div>
                            <Button onClick={handleJoinCommunity} size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                                Entrar na Comunidade
                                <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    )}
                </div>

                <DialogFooter className="p-4 bg-secondary/50 border-t">
                    <div className="w-full flex items-center gap-4">
                        <span className="text-sm text-muted-foreground font-semibold">
                            Passo {currentStep + 1} de {steps.length}
                        </span>
                        <Progress value={progressValue} className="h-2 flex-1" />
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default RegistrationModal;
