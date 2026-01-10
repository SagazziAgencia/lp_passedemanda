'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './logo';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex items-center">
                   <Logo />
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-accent-foreground">Login</Button>
                    <Button>Cadastrar</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
