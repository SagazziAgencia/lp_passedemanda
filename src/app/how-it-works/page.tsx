'use client';

import React from 'react';
import LegalLayout from '@/components/shared/legal-layout';

const TOC = [
    { id: 'match', label: '1. Encontrando Profissionais' },
    { id: 'payment', label: '2. Pagamento Seguro' },
    { id: 'security', label: '3. Ambiente Protegido' },
    { id: 'growth', label: '4. Crescimento e Benefícios' },
];

export default function HowItWorksPage() {
    return (
        <LegalLayout
            title="Como Funciona o PasseDemanda"
            subtitle="Simples, direto e seguro. Entenda como conectamos você às melhores oportunidades."
            lastUpdated={new Date().toLocaleDateString('pt-BR')}
            toc={TOC}
        >
            <section id="match">
                <h2>1. Encontrando Profissionais</h2>
                <p>
                    Nossa tecnologia de <strong>Matchmaking Inteligente</strong> analisa a localização e especialidade para conectar o pedido ao profissional mais qualificado na região.
                    Tudo acontece de forma rápida, garantindo que você encontre ajuda ou receba novas demandas no momento certo.
                </p>
            </section>

            <section id="payment">
                <h2>2. Pagamento Seguro</h2>
                <p>
                    A segurança financeira é nossa prioridade. Todo o fluxo de pagamento é protegido:
                </p>
                <blockquote>
                    Os valores são processados por instituições financeiras reguladas, garantindo a correta destinação dos recursos para o profissional e a plataforma.
                </blockquote>
                <p>
                    Utilizamos o sistema de <strong>Custódia (Escrow)</strong>: o pagamento fica seguro até que a entrega do serviço seja confirmada, protegendo tanto quem contrata quanto quem executa.
                </p>
            </section>

            <section id="security">
                <h2>3. Ambiente Protegido</h2>
                <p>
                    Para sua segurança e tranquilidade:
                </p>
                <ul>
                    <li><strong>Privacidade no Chat:</strong> Recomendamos que todas as negociações ocorram dentro da nossa plataforma segura, onde seus dados de contato são preservados até o fechamento do negócio.</li>
                    <li><strong>Comunidade Verificada:</strong> Trabalhamos continuamente para validar os perfis e garantir uma comunidade confiável de profissionais.</li>
                </ul>
            </section>

            <section id="growth">
                <h2>4. Crescimento e Benefícios</h2>
                <p>
                    Valorizamos a parceria de longo prazo. Profissionais que mantêm um histórico de excelência, pontualidade e boas avaliações ganham destaque na plataforma e acesso a benefícios exclusivos.
                </p>
            </section>
        </LegalLayout>
    );
}
