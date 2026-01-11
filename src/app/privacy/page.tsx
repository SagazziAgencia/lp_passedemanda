'use client';

import React from 'react';
import LegalLayout from '@/components/shared/legal-layout';

const TOC = [
    { id: 'collection', label: '1. Coleta de Dados' },
    { id: 'usage', label: '2. Uso das Informações' },
    { id: 'security', label: '3. Segurança' },
    { id: 'rights', label: '4. Seus Direitos' },
    { id: 'test-env', label: '5. Ambiente de Teste' },
];

export default function PrivacyPage() {
    return (
        <LegalLayout
            title="Política de Privacidade"
            subtitle="Transparência total sobre como tratamos seus dados nesta demonstração."
            lastUpdated={new Date().toLocaleDateString('pt-BR')}
            toc={TOC}
        >
            <section id="collection">
                <h2>1. Coleta de Dados</h2>
                <p>
                    Para permitir a funcionalidade da demonstração, coletamos informações mínimas e estritamente necessárias, que podem incluir:
                </p>
                <ul>
                    <li>Dados de contato básicos (nome, e-mail) fornecidos voluntariamente via formulários.</li>
                    <li>Informações técnicas de navegação para fins de performance (cookies essenciais).</li>
                </ul>
            </section>

            <section id="usage">
                <h2>2. Uso das Informações</h2>
                <p>
                    Garantimos que suas informações serão utilizadas <strong>exclusivamente em benefício da sua própria experiência</strong> como usuário de teste.
                </p>
                <blockquote>
                    Não vendemos, não alugamos e não compartilhamos seus dados pessoais com terceiros para fins comerciais.
                </blockquote>
                <p>As finalidades incluem:</p>
                <ul>
                    <li>Personalizar a interface de demonstração.</li>
                    <li>Testar fluxos de notificação e comunicação da plataforma.</li>
                    <li>Melhorias internas baseadas em feedback de uso.</li>
                </ul>
            </section>

            <section id="security">
                <h2>3. Segurança</h2>
                <p>
                    Adotamos práticas modernas de desenvolvimento seguro para proteger as informações inseridas, incluindo criptografia em trânsito (HTTPS) e boas práticas de armazenamento.
                    No entanto, como um ambiente MVP, recomendamos não inserir dados sensíveis reais (como senhas bancárias ou documentos críticos).
                </p>
            </section>

            <section id="rights">
                <h2>4. Seus Direitos</h2>
                <p>
                    Você possui total controle sobre seus dados. A qualquer momento, você pode solicitar a exclusão de qualquer informação de teste inserida,
                    bem como resetar seu ambiente de demonstração.
                </p>
            </section>

            <section id="test-env">
                <h2>5. Ambiente de Teste</h2>
                <p>
                    Reiteramos que esta aplicação serve propósitos de validação e teste. Os dados gerados aqui podem ser periodicamente limpos para manutenção do sistema.
                </p>
            </section>
        </LegalLayout>
    );
}
