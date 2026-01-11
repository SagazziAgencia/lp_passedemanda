'use client';

import React from 'react';
import LegalLayout from '@/components/shared/legal-layout';

const TOC = [
    { id: 'commitment', label: '1. Nosso Compromisso' },
    { id: 'data-protection', label: '2. Proteção de Dados' },
    { id: 'transparency', label: '3. Transparência' },
    { id: 'rights', label: '4. Seus Direitos' },
];

export default function LGPDPage() {
    return (
        <LegalLayout
            title="Sua Privacidade e a LGPD"
            subtitle="Entenda como protegemos seus dados e garantimos seus direitos."
            lastUpdated={new Date().toLocaleDateString('pt-BR')}
            toc={TOC}
        >
            <section id="commitment">
                <h2>1. Nosso Compromisso</h2>
                <p>
                    A privacidade não é apenas uma obrigação legal para o PasseDemanda, é o pilar da nossa relação de confiança com vocé.
                    Nossa plataforma foi desenvolvida seguindo o conceito de "Privacidade por Design", colocando a segurança dos seus dados em primeiro lugar em todas as decisões.
                </p>
            </section>

            <section id="data-protection">
                <h2>2. Proteção de Dados</h2>
                <p>
                    Adotamos medidas técnicas e administrativas robustas para proteger suas informações:
                </p>
                <ul>
                    <li><strong>Criptografia:</strong> Utilizamos padrões modernos de criptografia para proteger seus dados, tanto durante a transmissão quanto no armazenamento.</li>
                    <li><strong>Minimização de Dados:</strong> Coletamos apenas as informações estritamente necessárias para o funcionamento do serviço e melhoria da sua experiência.</li>
                    <li><strong>Acesso Restrito:</strong> Seus dados pessoais são acessíveis apenas quando necessário para a prestação do serviço contratado.</li>
                </ul>
            </section>

            <section id="transparency">
                <h2>3. Transparência e Registros</h2>
                <p>
                    Mantemos registros claros de operações essenciais para garantir a segurança jurídica de todas as partes envolvidas.
                    Isso inclui o registro de aceites de termos e condições, garantindo que você sempre esteja ciente das regras vigentes na plataforma.
                </p>
            </section>

            <section id="rights">
                <h2>4. Seus Direitos (LGPD)</h2>
                <p>
                    Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem total controle sobre suas informações. A plataforma oferece meios para que você possa exercer seus direitos de:
                </p>
                <ul>
                    <li>Confirmação da existência de tratamento.</li>
                    <li>Acesso aos dados.</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                    <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
                    <li>Eliminação dos dados pessoais.</li>
                </ul>
            </section>
        </LegalLayout>
    );
}
