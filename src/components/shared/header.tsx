'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './logo';

interface HeaderProps {
    onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <div className="mr-4 flex items-center">
                    <Link href={ROUTES.HOME} className="flex items-center">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 items-center justify-end gap-4">
                    <Button onClick={onRegisterClick} variant="outline" className="w-28 border-primary text-primary hover:bg-primary hover:text-primary-foreground">Login</Button>
                    <Button onClick={onRegisterClick} className="w-28">Cadastrar</Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background border-border">
                            <div className="flex flex-col gap-4 mt-8">
                                <Button onClick={onRegisterClick} variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                    Login
                                </Button>
                                <Button onClick={onRegisterClick} className="w-full justify-start">
                                    Cadastrar
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
