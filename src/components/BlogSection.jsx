import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'

const BlogPost = ({ title, category, date, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group cursor-pointer"
    >
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                    {category}
                </span>
            </div>
        </div>
        <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
            <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {date}
            </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
            {title}
        </h3>
        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
            Ler Artigo
            <ArrowRight size={16} />
        </div>
    </motion.div>
)

export function BlogSection() {
    const posts = [
        {
            title: "Como estruturar um processo de indicação lucrativo em 2026",
            category: "ESTRATÉGIA",
            date: "30 JAN 2026",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "O Guia Definitivo do Modelo Boomerang Digital para Freelancers",
            category: "CARREIRA",
            date: "25 JAN 2026",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Por que a segurança jurídica é o maior gargalo do B2B moderno",
            category: "JURÍDICO",
            date: "20 JAN 2026",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
        }
    ]

    return (
        <section className="py-24 bg-white" id="blog">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900">
                            Conteúdo para quem <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Joga o Jogo.
                            </span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Insights sobre networking, vendas B2B e o futuro do trabalho independente.
                        </p>
                    </div>
                    <button className="px-8 py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                        Ver Blog Completo
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <BlogPost key={i} {...post} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    )
}
