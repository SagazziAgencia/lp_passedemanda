'use client';

import React from 'react';
import LegalLayout from '@/components/shared/legal-layout';

const TOC = [
    { id: 'usage', label: '1. O que são Cookies?' },
    { id: 'essential', label: '2. Cookies Essenciais' },
    { id: 'performance', label: '3. Performance e Melhorias' },
    { id: 'control', label: '4. Seu Controle' },
];

export default function CookiesPage() {
    return (
        <LegalLayout
            title="Política de Cookies"
            subtitle="Como utilizamos tecnologias para melhorar sua experiência de navegação."
            lastUpdated={new Date().toLocaleDateString('pt-BR')}
            toc={TOC}
        >
            <section id="usage">
                <h2>1. O que são Cookies?</h2>
                <p>
                    Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site.
                    Eles servem para lembrar suas preferências, manter você conectado e nos ajudar a entender como melhorar nossos serviços.
                </p>
            </section>

            <section id="essential">
                <h2>2. Cookies Essenciais</h2>
                <p>
                    Alguns cookies são fundamentais para o funcionamento da plataforma e não podem ser desativados em nossos sistemas. Eles geralmente são definidos em resposta a ações feitas por você, como:
                </p>
                <ul>
                    <li>Definição de preferências de privacidade.</li>
                    <li>Login e manutenção de sessão segura.</li>
                    <li>Preenchimento de formulários.</li>
                </ul>
            </section>

            <section id="performance">
                <h2>3. Performance e Experiência</h2>
                <p>
                    Utilizamos cookies para entender como os visitantes interagem com a plataforma, ajudando-nos a descobrir quais páginas são mais e menos populares.
                    Isso nos permite otimizar a velocidade (carregamento de imagens e scripts) e a usabilidade do PasseDemanda.
                </p>
            </section>

            <section id="control">
                <h2>4. Seu Controle</h2>
                <p>
                    Você pode configurar seu navegador para bloquear ou alertá-lo sobre esses cookies, mas algumas partes do site podem não funcionar corretamente.
                    Respeitamos sua escolha e garantimos que o uso dessas tecnologias visa unicamente melhorar sua experiência como usuário.
                </p>
            </section>
        </LegalLayout>
    );
}
