'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import Logo from './logo';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 text-center md:text-left">
                    {/* Brand Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href={ROUTES.HOME} className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
                            <Logo variant="light" size="md" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            A plataforma definitiva para profissionais monetizarem indicações e empresas encontrarem talentos verificados.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Plataforma</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href={ROUTES.PLATFORM.PROFESSIONALS} className="hover:text-primary transition-colors">Para Profissionais</a></li>
                            <li><a href={ROUTES.PLATFORM.COMPANIES} className="hover:text-primary transition-colors">Para Empresas</a></li>
                            <li><a href={ROUTES.PLATFORM.HOW_IT_WORKS} className="hover:text-primary transition-colors">Como Funciona</a></li>
                            <li><a href={ROUTES.PLATFORM.PRICING} className="hover:text-primary transition-colors">Preços</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href={ROUTES.COMPANY.ABOUT} className="hover:text-primary transition-colors">Sobre Nós</a></li>
                            <li><a href={ROUTES.COMPANY.BLOG} className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href={ROUTES.COMPANY.CAREERS} className="hover:text-primary transition-colors">Carreiras</a></li>
                            <li><a href={ROUTES.COMPANY.CONTACT} className="hover:text-primary transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Legal Links (Requested) */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href={ROUTES.LEGAL.TERMS} className="hover:text-primary transition-colors">Termos de Uso</a></li>
                            <li><a href={ROUTES.LEGAL.PRIVACY} className="hover:text-primary transition-colors">Política de Privacidade</a></li>
                            <li><a href={ROUTES.LEGAL.COOKIES} className="hover:text-primary transition-colors">Cookies</a></li>
                            <li><a href={ROUTES.LEGAL.LGPD} className="hover:text-primary transition-colors">LGPD</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 text-center md:text-left">
                    <p>© {new Date().getFullYear()} PasseDemanda. Todos os direitos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Termos</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Mapa do Site</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
