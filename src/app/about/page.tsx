'use client';

import React from 'react';
import LegalLayout from '@/components/shared/legal-layout';

const TOC = [
    { id: 'vision', label: '1. Nossa Visão' },
    { id: 'tech', label: '2. Tecnologia e Segurança' },
    { id: 'finance', label: '3. Segurança Financeira' },
    { id: 'support', label: '4. Suporte Especializado' },
];

export default function AboutPage() {
    return (
        <LegalLayout
            title="Sobre o PasseDemanda"
            subtitle="Conectando profissionais e demandas com segurança, agilidade e confiança."
            lastUpdated={new Date().toLocaleDateString('pt-BR')}
            toc={TOC}
        >
            <section id="vision">
                <h2>1. Nossa Visão</h2>
                <p>
                    O PasseDemanda nasceu com um objetivo claro: simplificar a conexão entre quem precisa de um serviço e quem sabe executá-lo.
                    Acreditamos que a tecnologia deve ser invisível, servindo apenas para criar experiências fluidas e seguras para profissionais e contratantes.
                </p>
            </section>

            <section id="tech">
                <h2>2. Tecnologia e Segurança</h2>
                <p>
                    Investimos em uma infraestrutura robusta e moderna, pensada para garantir estabilidade e proteção.
                </p>
                <ul>
                    <li><strong>Alta Disponibilidade:</strong> Nossa plataforma é construída para estar sempre online, quando você precisar.</li>
                    <li><strong>Proteção de Dados:</strong> Seguimos rigorosos padrões de segurança para garantir que suas informações estejam sempre protegidas.</li>
                    <li><strong>Agilidade:</strong> Sistemas otimizados para garantir que oportunidades cheguem em tempo real aos profissionais certos.</li>
                </ul>
            </section>

            <section id="finance">
                <h2>3. Segurança Financeira</h2>
                <blockquote>
                    Transparência é a base de tudo. Garantimos que os valores sejam geridos com total integridade.
                </blockquote>
                <p>
                    Utilizamos soluções de pagamento avançadas que garantem:
                </p>
                <ul>
                    <li><strong>Repasses Seguros:</strong> O valor destinado ao profissional é separado automaticamente, garantindo que o pagamento chegue a quem realizou o trabalho.</li>
                    <li><strong>Conformidade:</strong> Operamos em total alinhamento com as regulações financeiras vigentes.</li>
                    <li><strong>Segurança na Transação:</strong> Mecanismos de custódia (Escrow) que trazem tranquilidade para quem contrata e garantia para quem executa.</li>
                </ul>
            </section>

            <section id="support">
                <h2>4. Suporte Especializado</h2>
                <p>
                    Entendemos que dúvidas podem surgir. Por isso, oferecemos canais de atendimento eficientes e uma base de conhecimento completa para auxiliar nossos usuários em todas as etapas da jornada.
                </p>
            </section>
        </LegalLayout>
    );
}
