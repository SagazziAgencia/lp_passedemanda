import { motion } from 'framer-motion'
import { Star, MessageCircle, Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Lucas Ferreira",
        role: "Desenvolvedor Full Stack",
        content: "Nunca vi uma plataforma tão focada. Os projetos de software que chegam são detalhados e o cliente já entende o valor.",
        rating: 5
    },
    {
        name: "Mariana Costa",
        role: "UX/UI Designer",
        content: "A qualidade dos leads é incomparável. Clientes que buscam design de alta conversão e pagam o preço justo.",
        rating: 5
    },
    {
        name: "André Santos",
        role: "Gestor de Tráfego",
        content: "Gosto da transparência. Recebo o valor da campanha e do meu serviço certinho. Recomendo muito.",
        rating: 5
    },
    {
        name: "Carolina Oliveira",
        role: "Copywriter",
        content: "O suporte é ágil e a plataforma muito intuitiva. Meus contratos de copy dobraram em 3 meses.",
        rating: 5
    },
    {
        name: "Pedro Alves",
        role: "Editor de Vídeo",
        content: "Finalmente um app que valoriza o criativo. As taxas são justas e o pagamento é rápido.",
        rating: 5
    },
    {
        name: "Beatriz Lima",
        role: "Social Media",
        content: "Segurança total no recebimento. A custódia do valor me deixa tranquila para focar na estratégia.",
        rating: 5
    }
]

const ReviewCard = ({ review }) => (
    <div className="flex-shrink-0 w-[300px] md:w-[400px] p-6 mx-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <Quote className="w-8 h-8 text-blue-100 group-hover:text-blue-500 transition-colors" />
        </div>

        <p className="text-slate-600 mb-6 font-medium leading-relaxed">
            "{review.content}"
        </p>

        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                {review.name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{review.role}</p>
            </div>
        </div>
    </div>
)

export function TestimonialsMarquee({ variant = 'white' }) {
    const isBrand = variant === 'brand'

    return (
        <section className={`py-24 overflow-hidden ${isBrand ? 'bg-[#020617]' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6"
                >
                    <MessageCircle className="w-4 h-4" />
                    DEPOIMENTOS REAIS
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`text-3xl md:text-4xl font-black tracking-tight mb-4 ${isBrand ? 'text-white' : 'text-slate-900'}`}
                >
                    Quem usa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">aprova e recomenda.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`text-lg md:text-xl max-w-2xl mx-auto ${isBrand ? 'text-slate-400' : 'text-slate-600'}`}
                >
                    Junte-se a milhares de profissionais que transformaram suas carreiras com o Passe Demanda.
                </motion.p>
            </div>

            {/* Marquee Row 1 (Visual: Moves Left) */}
            <div className="relative flex overflow-hidden mask-linear-gradient mb-8">
                <motion.div
                    className="flex py-4"
                    animate={{ x: ["0%", "-25%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40, // Reduced duration because we are only moving 25% of the distance now?
                            // Wait, if distance is 1/4th, for same visual speed, time should be 1/4th of full width time?
                            // Let's stick to a linear speed visually.
                            // Previous was 80s for 100% (probably wrong logic).
                            // Let's try 30s for 25% movement (which is 1 full set of cards).
                            // 1 set = 6 cards. 30s for 6 cards is 5s per card. Very slow. Good.
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    style={{ minWidth: "fit-content" }} // Ensure it doesn't wrap
                >
                    {/* 4 Sets to ensure no gaps on 4k screens */}
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((review, idx) => (
                        <ReviewCard key={`r1-${idx}`} review={review} />
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r ${isBrand ? 'from-[#020617]' : 'from-slate-50'} to-transparent`} />
                <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l ${isBrand ? 'from-[#020617]' : 'from-slate-50'} to-transparent`} />
            </div>

            {/* Marquee Row 2 (Visual: Moves Right) */}
            <div className="relative flex overflow-hidden mask-linear-gradient">
                <motion.div
                    className="flex py-4"
                    animate={{ x: ["-25%", "0%"] }} // Start offset and move to 0
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Same speed matches Row 1
                            ease: "linear",
                        },
                    }}
                    style={{ minWidth: "fit-content" }}
                >
                    {/* Reverse content for variety, 4 sets */}
                    {[...testimonials].reverse().concat([...testimonials].reverse()).concat([...testimonials].reverse()).concat([...testimonials].reverse()).map((review, idx) => (
                        <ReviewCard key={`r2-${idx}`} review={review} />
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r ${isBrand ? 'from-[#020617]' : 'from-slate-50'} to-transparent`} />
                <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l ${isBrand ? 'from-[#020617]' : 'from-slate-50'} to-transparent`} />
            </div>

        </section>
    )
}
