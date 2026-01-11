'use client';

import React from 'react';
import LegalLayout from '@/components/shared/legal-layout';

const TOC = [
    { id: 'intro', label: '1. Introdução' },
    { id: 'nature', label: '2. Natureza da Aplicação' },
    { id: 'usage', label: '3. Uso Aceitável' },
    { id: 'privacy', label: '4. Dados e Privacidade' },
    { id: 'disclaimer', label: '5. Isenção de Garantias' },
];

export default function TermsPage() {
    return (
        <LegalLayout
            title="Termos de Uso"
            subtitle="Por favor, leia atentamente estes termos antes de utilizar nossa plataforma de demonstração."
            lastUpdated={new Date().toLocaleDateString('pt-BR')}
            toc={TOC}
        >
            <section id="intro">
                <h2>1. Introdução</h2>
                <p>
                    Bem-vindo ao <strong>PasseDemanda</strong>. Estes Termos de Uso regem o acesso e utilização da nossa plataforma,
                    disponibilizada como um ambiente de demonstração tecnológica (MVP). Ao acessar ou utilizar o serviço, você concorda em cumprir estes termos.
                </p>
            </section>

            <section id="nature">
                <h2>2. Natureza da Aplicação</h2>
                <blockquote>
                    Esta é uma aplicação em <strong>fase de testes (Beta/MVP)</strong>.
                </blockquote>
                <p>
                    O PasseDemanda foi desenvolvido para ilustrar o potencial de conexão entre profissionais e empresas. É importante ressaltar que:
                </p>
                <ul>
                    <li>Nenhuma transação financeira real é processada pela plataforma.</li>
                    <li>Os perfis de profissionais apresentados podem conter dados fictícios para fins de teste.</li>
                    <li>A disponibilidade do serviço não é garantida de forma contínua.</li>
                </ul>
            </section>

            <section id="usage">
                <h2>3. Uso Aceitável</h2>
                <p>
                    Você concorda em utilizar a plataforma apenas para fins legais e de teste. É estritamente proibido:
                </p>
                <ul>
                    <li>Tentar violar a segurança ou integridade do sistema.</li>
                    <li>Inserir dados falsos com intenção maliciosa ou ofensiva.</li>
                    <li>Realizar engenharia reversa de qualquer parte do software.</li>
                </ul>
            </section>

            <section id="privacy">
                <h2>4. Dados e Privacidade</h2>
                <p>
                    Respeitamos sua privacidade. Embora este seja um ambiente de teste, tratamos todos os dados inseridos (como cadastros de teste) com segurança.
                    Para mais detalhes, consulte nossa <a href="/privacy">Política de Privacidade</a>.
                </p>
            </section>

            <section id="disclaimer">
                <h2>5. Isenção de Garantias</h2>
                <p>
                    O serviço é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, expressas ou implícitas.
                    Não garantimos que a plataforma estará livre de erros ou ininterrupta. A utilização é por sua conta e risco exclusivo.
                </p>
            </section>
        </LegalLayout>
    );
}
