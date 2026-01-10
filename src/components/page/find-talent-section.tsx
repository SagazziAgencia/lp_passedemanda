'use client';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface FindTalentSectionProps {
    searchTerm: string;
    onSearchTermChange: (term: string) => void;
}

const FindTalentSection: React.FC<FindTalentSectionProps> = ({ searchTerm, onSearchTermChange }) => {
    return (
        <section className="text-center mb-12 py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Encontre o talento ideal ou comece a ganhar
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Navegue por profissionais validados pela comunidade ou busque por habilidades específicas para sua demanda.
            </p>
            <div className="mt-8 max-w-xl mx-auto">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-0 group-focus-within:opacity-40 blur-lg transition-opacity duration-500" />
                    <div className="relative flex items-center bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                        <Search className="ml-5 text-muted-foreground w-5 h-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Buscar por serviço, habilidade ou profissional..."
                            value={searchTerm}
                            onChange={(e) => onSearchTermChange(e.target.value)}
                            className="flex-1 w-full px-4 py-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-muted-foreground font-medium"
                            aria-label="Buscar profissionais"
                        />
                        <Button className="m-2 rounded-lg bg-primary hover:bg-primary/90">
                            <Search className="w-4 h-4 mr-2" />
                            Buscar
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FindTalentSection;
