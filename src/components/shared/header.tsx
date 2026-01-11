'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './logo';

interface HeaderProps {
    onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex items-center">
                   <Logo />
                </div>
                <div className="flex flex-1 items-center justify-end gap-4">
                    <Button variant="outline" className="w-28 text-foreground hover:bg-primary hover:text-primary-foreground">Login</Button>
                    <Button onClick={onRegisterClick} className="w-28">Cadastrar</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
