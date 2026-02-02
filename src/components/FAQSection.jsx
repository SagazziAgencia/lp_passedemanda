import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, Shield, CreditCard, Users } from 'lucide-react'
import { LayeredBackground } from './LayeredBackground'

const faqs = [
    {
        question: "Como funciona a garantia de pagamento?",
        answer: "Utilizamos um sistema de custódia (Escrow). O cliente deposita o valor antes do início do projeto, e o dinheiro fica protegido pela Passe Demanda. O valor só é liberado para o profissional após a entrega e aprovação do trabalho.",
        icon: <Shield className="w-5 h-5 text-blue-500" />
    },
    {
        question: "Preciso pagar para enviar propostas?",
        answer: "No plano Free, você tem até 3 propostas mensais gratuitas. Para enviar mais propostas e ter acesso a demandas exclusivas, recomendamos os planos Basic ou Pro.",
        icon: <MessageCircle className="w-5 h-5 text-blue-500" />
    },
    {
        question: "Qual a taxa de serviço da plataforma?",
        answer: "A taxa varia conforme o seu plano. No plano Free é 15%, no Basic 12% e no Pro apenas 8%. A taxa só é cobrada quando você recebe o pagamento do projeto.",
        icon: <CreditCard className="w-5 h-5 text-blue-500" />
    },
    {
        question: "Como posso me tornar um Profissional Verificado?",
        answer: "O selo de Verificado é concedido após análise de portfólio, identidade e antecedentes. Assinantes dos planos Basic e Pro têm prioridade nessa análise.",
        icon: <Users className="w-5 h-5 text-blue-500" />
    }
]

function FAQItem({ item, isOpen, onClick }) {
    return (
        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-sm">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-blue-100' : 'bg-slate-50'}`}>
                        {item.icon}
                    </div>
                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                        {item.question}
                    </span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pl-[4.5rem] text-slate-600 leading-relaxed">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function FAQSection({ variant }) {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className={`relative py-24 border-t transition-colors duration-300 border-slate-200 bg-white min-h-screen flex flex-col justify-center`} id="faq">
            {/* Background Grid */}
            <LayeredBackground variant={variant} />
            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest rounded-sm border bg-blue-50 text-blue-600 border-blue-100">
                        <MessageCircle size={14} />
                        Tira-Teima
                    </div>
                    <h2 className="text-4xl font-black mb-6 tracking-tight text-slate-900">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg max-w-xl mx-auto text-slate-600">
                        Tudo que você precisa saber sobre a Passe Demanda em um só lugar.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="font-bold transition-colors text-slate-600 hover:text-blue-600">
                        Ainda tem dúvidas? Fale conosco no WhatsApp
                    </a>
                </div>

            </div>
        </section>
    )
}
