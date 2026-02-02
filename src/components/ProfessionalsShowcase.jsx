
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from './ProfileCard';
import { cn } from '../lib/utils';
import { Code, PenTool, Megaphone, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { CTAButton } from './ui/CTAButton';

const CATEGORIES = [
    { id: 'dev', label: 'Desenvolvimento', icon: Code, protocol: 'PRT-D01' },
    { id: 'design', label: 'Design & UX', icon: PenTool, protocol: 'PRT-G02' },
    { id: 'marketing', label: 'Marketing', icon: Megaphone, protocol: 'PRT-M03' },
    { id: 'media', label: 'Mídia & Vídeo', icon: Video, protocol: 'PRT-V04' },
];

const PROFESSIONALS_DATA = {
    dev: [
        { name: 'Lucas Silva', title: 'Senior Fullstack Dev', handle: 'lucas_dev', avatar: 'https://i.pravatar.cc/300?u=lucas', status: 'Disponível' },
        { name: 'Ana Costa', title: 'Frontend Specialist', handle: 'ana_react', avatar: 'https://i.pravatar.cc/300?u=ana', status: 'Online' },
        { name: 'Marcos Oliveira', title: 'Backend Architect', handle: 'marcos_sys', avatar: 'https://i.pravatar.cc/300?u=marcos', status: 'Online' },
        { name: 'Gabriel Lima', title: 'Mobile Developer', handle: 'gab_apps', avatar: 'https://i.pravatar.cc/300?u=gabriel', status: 'Disponível' },
        { name: 'Rodrigo Faro', title: 'DevOps Engineer', handle: 'rodrigo_ops', avatar: 'https://i.pravatar.cc/300?u=rodrigo', status: 'Online' },
        { name: 'Bruna Melo', title: 'QA Engineer', handle: 'bruna_qa', avatar: 'https://i.pravatar.cc/300?u=bruna', status: 'Disponível' },
        { name: 'Cezar Ramos', title: 'Security Expert', handle: 'cezar_sec', avatar: 'https://i.pravatar.cc/300?u=cezar', status: 'Online' },
        { name: 'Daniela Fer', title: 'Data Scientist', handle: 'dani_data', avatar: 'https://i.pravatar.cc/300?u=daniela', status: 'Disponível' },
        { name: 'Enzo Junior', title: 'Cloud Specialist', handle: 'enzo_cloud', avatar: 'https://i.pravatar.cc/300?u=enzo', status: 'Online' },
        { name: 'Fabio Gouvea', title: 'UI Engineer', handle: 'fabio_ui', avatar: 'https://i.pravatar.cc/300?u=fabio', status: 'Disponível' },
        { name: 'Gisele B', title: 'Systems Architect', handle: 'gisele_sys', avatar: 'https://i.pravatar.cc/300?u=gisele', status: 'Online' },
        { name: 'Hugo Lopes', title: 'Embedded Systems', handle: 'hugo_emb', avatar: 'https://i.pravatar.cc/300?u=hugo', status: 'Disponível' },
    ],
    design: [
        { name: 'Júlia Santos', title: 'Product Designer', handle: 'julia_ux', avatar: 'https://i.pravatar.cc/300?u=julia', status: 'Disponível' },
        { name: 'Pedro Alves', title: 'UI Designer', handle: 'pedro_ui', avatar: 'https://i.pravatar.cc/300?u=pedro', status: 'Online' },
        { name: 'Carla Dias', title: 'Brand Specialist', handle: 'carla_brand', avatar: 'https://i.pravatar.cc/300?u=carla', status: 'Ocupada' },
        { name: 'Marina Lins', title: 'UX Researcher', handle: 'ma_ux', avatar: 'https://i.pravatar.cc/300?u=marina', status: 'Online' },
        { name: 'Teresa M.', title: 'Illustrator', handle: 'teresa_art', avatar: 'https://i.pravatar.cc/300?u=teresa', status: 'Disponível' },
        { name: 'Igor S.', title: 'Game Designer', handle: 'igor_game', avatar: 'https://i.pravatar.cc/300?u=igor', status: 'Online' },
        { name: 'Leticia G.', title: 'Visual Designer', handle: 'let_viz', avatar: 'https://i.pravatar.cc/300?u=leticia', status: 'Disponível' },
        { name: 'Nelson F.', title: 'Type Designer', handle: 'nelson_type', avatar: 'https://i.pravatar.cc/300?u=nelson', status: 'Online' },
        { name: 'Olga K.', title: 'Experience Lead', handle: 'olga_xp', avatar: 'https://i.pravatar.cc/300?u=olga', status: 'Disponível' },
        { name: 'Paulo R.', title: 'Motion Lead', handle: 'paulo_mo', avatar: 'https://i.pravatar.cc/300?u=paulo', status: 'Online' },
        { name: 'Quiteria P.', title: 'Packaging Dev', handle: 'quit_pack', avatar: 'https://i.pravatar.cc/300?u=quiteria', status: 'Disponível' },
        { name: 'Rafaela Z.', title: 'Service Designer', handle: 'rafa_serv', avatar: 'https://i.pravatar.cc/300?u=rafaela', status: 'Online' },
    ],
    marketing: [
        { name: 'Fernanda Lima', title: 'Growth Hacker', handle: 'fer_growth', avatar: 'https://i.pravatar.cc/300?u=fernanda', status: 'Online' },
        { name: 'Ricardo Souz', title: 'Copywriter', handle: 'rick_copy', avatar: 'https://i.pravatar.cc/300?u=ricardo', status: 'Disponível' },
        { name: 'Sofia Mello', title: 'Social Media', handle: 'sofi_social', avatar: 'https://i.pravatar.cc/300?u=sofia', status: 'Online' },
        { name: 'Davi Mendes', title: 'Ads Specialist', handle: 'davi_ads', avatar: 'https://i.pravatar.cc/300?u=davi', status: 'Disponível' },
        { name: 'Samuel K.', title: 'Email Marketer', handle: 'sam_email', avatar: 'https://i.pravatar.cc/300?u=samuel', status: 'Online' },
        { name: 'Talita V.', title: 'SEO Expert', handle: 'tati_seo', avatar: 'https://i.pravatar.cc/300?u=talita', status: 'Disponível' },
        { name: 'Ulysses M.', title: 'Content Strategist', handle: 'uly_cont', avatar: 'https://i.pravatar.cc/300?u=ulysses', status: 'Online' },
        { name: 'Valeria S.', title: 'PR Lead', handle: 'val_pr', avatar: 'https://i.pravatar.cc/300?u=valeria', status: 'Disponível' },
        { name: 'Wagner J.', title: 'Traffic Manager', handle: 'wag_traffic', avatar: 'https://i.pravatar.cc/300?u=wagner', status: 'Online' },
        { name: 'Xavier B.', title: 'Affiliate Pro', handle: 'xav_aff', avatar: 'https://i.pravatar.cc/300?u=xavier', status: 'Disponível' },
        { name: 'Yara C.', title: 'Influencer Spec', handle: 'yara_inf', avatar: 'https://i.pravatar.cc/300?u=yara', status: 'Online' },
        { name: 'Zeca L.', title: 'Market Analyst', handle: 'zeca_an', avatar: 'https://i.pravatar.cc/300?u=zeca', status: 'Disponível' },
    ],
    media: [
        { name: 'André Farias', title: 'Video Editor', handle: 'andre_edit', avatar: 'https://i.pravatar.cc/300?u=andre', status: 'Online' },
        { name: 'Bia Rocha', title: 'Motion Designer', handle: 'bia_motion', avatar: 'https://i.pravatar.cc/300?u=bia', status: 'Disponível' },
        { name: 'Carlos Neto', title: 'Filmmaker', handle: 'carlos_film', avatar: 'https://i.pravatar.cc/300?u=carlos', status: 'Online' },
        { name: 'Vitor Hugo', title: '3D Artist', handle: 'vitor_3d', avatar: 'https://i.pravatar.cc/300?u=vitor', status: 'Disponível' },
        { name: 'Alice W.', title: 'Colorist', handle: 'alice_col', avatar: 'https://i.pravatar.cc/300?u=alice', status: 'Online' },
        { name: 'Bruno M.', title: 'Sound Designer', handle: 'bruno_snd', avatar: 'https://i.pravatar.cc/300?u=bruno', status: 'Disponível' },
        { name: 'Clara T.', title: 'Producer', handle: 'clara_prod', avatar: 'https://i.pravatar.cc/300?u=clara', status: 'Online' },
        { name: 'Diego P.', title: 'Photographer', handle: 'diego_ph', avatar: 'https://i.pravatar.cc/300?u=diego', status: 'Disponível' },
        { name: 'Ester L.', title: 'Scriptwriter', handle: 'ester_scr', avatar: 'https://i.pravatar.cc/300?u=ester', status: 'Online' },
        { name: 'Fernando S.', title: 'VFX Artist', handle: 'fer_vfx', avatar: 'https://i.pravatar.cc/300?u=fernando', status: 'Disponível' },
        { name: 'Glaucia R.', title: 'Director', handle: 'glau_dir', avatar: 'https://i.pravatar.cc/300?u=glaucia', status: 'Online' },
        { name: 'Helder K.', title: 'Animator', handle: 'held_anim', avatar: 'https://i.pravatar.cc/300?u=helder', status: 'Disponível' },
    ],
};

const MarqueeRow = ({ professionals, reverse = false, isPaused = false }) => {
    // Duplicate for infinite effect
    const duplicatedPro = [...professionals, ...professionals];

    return (
        <div className="flex overflow-hidden py-4 select-none relative z-10">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                `}
            </style>
            <div
                className="flex gap-4 pr-4"
                style={{
                    width: "fit-content",
                    animation: `${reverse ? 'marquee-reverse' : 'marquee'} 120s linear infinite`,
                    animationPlayState: isPaused ? 'paused' : 'running'
                }}
            >
                {duplicatedPro.map((pro, index) => (
                    <div key={`${pro.handle}-${index}`} className="flex-shrink-0 w-[280px]">
                        <ProfileCard
                            name={pro.name}
                            title={pro.title}
                            handle={pro.handle}
                            status={pro.status}
                            avatarUrl={pro.avatar}
                            onContactClick={() => console.log('Profile clicked', pro.handle)}
                            aspectRatio="0.72"
                            cardRadius="12px"
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ProfessionalsShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0);
    const CATEGORY_DURATION = 4000; // Faster transition for categories

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setDirection(1);
            setActiveTab((prev) => (prev + 1) % CATEGORIES.length);
        }, CATEGORY_DURATION);
        return () => clearInterval(interval);
    }, [isPaused]);

    const handleTabChange = (idx) => {
        setDirection(idx > activeTab ? 1 : -1);
        setActiveTab(idx);
    };

    const activeCategory = CATEGORIES[activeTab];
    const data = PROFESSIONALS_DATA[activeCategory.id];

    // Split data into two rows
    const half = Math.ceil(data.length / 2);
    const row1 = data.slice(0, half);
    const row2 = data.slice(half);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-32 bg-[#0B0F19] relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase mb-4 block"
                    >
                        Passe Demanda • Professional Network
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                        A Elite do <span className="text-blue-500">Mercado Digital</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Tenha acesso direto aos especialistas que dominam o mercado, selecionados através de critérios rigorosos de entrega e profissionalismo.
                    </p>
                </div>

                {/* Technical Square Tabs */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-5xl mx-auto mb-16 border border-white/5 bg-white/5 backdrop-blur-sm p-px"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {CATEGORIES.map((cat, idx) => {
                        const isActive = idx === activeTab;
                        const Icon = cat.icon;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleTabChange(idx)}
                                className={cn(
                                    "relative flex flex-col items-start py-4 px-6 transition-all duration-500 group overflow-hidden",
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-900/40 text-slate-500 hover:bg-slate-800/60"
                                )}
                            >
                                <div className="flex justify-between w-full mb-3">
                                    <Icon size={18} className={cn(isActive ? "text-white" : "text-slate-600 group-hover:text-blue-400")} />
                                    <span className={cn("text-[8px] font-mono", isActive ? "text-white/60" : "text-slate-700")}>
                                        {cat.protocol}
                                    </span>
                                </div>
                                <span className="text-[10px] font-black tracking-widest uppercase mb-0.5 opacity-60">
                                    0{idx + 1}
                                </span>
                                <span className="font-black text-xs uppercase tracking-tight">
                                    {cat.label}
                                </span>

                                {/* Progress Indicator */}
                                {isActive && !isPaused && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: CATEGORY_DURATION / 1000, ease: "linear" }}
                                        style={{ originX: 0 }}
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Carousel Area */}
                <div className="relative group/carousel">
                    {/* Sliding Contents */}
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeCategory.id}
                            custom={direction}
                            variants={{
                                enter: (direction) => ({
                                    x: direction > 0 ? 50 : -50,
                                    opacity: 0,
                                    filter: 'blur(10px)'
                                }),
                                center: {
                                    zIndex: 1,
                                    x: 0,
                                    opacity: 1,
                                    filter: 'blur(0px)'
                                },
                                exit: (direction) => ({
                                    zIndex: 0,
                                    x: direction < 0 ? 50 : -50,
                                    opacity: 0,
                                    filter: 'blur(10px)'
                                })
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.5 }
                            }}
                            className="flex flex-col gap-0"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <MarqueeRow professionals={row1} isPaused={isPaused} />
                            <MarqueeRow professionals={row2} reverse={true} isPaused={isPaused} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows (Optional, still present for UX) */}
                    <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:block">
                        <button
                            onClick={() => handleTabChange((activeTab - 1 + CATEGORIES.length) % CATEGORIES.length)}
                            className="p-3 rounded-full bg-slate-900 border border-white/10 text-white hover:bg-blue-600 transition-colors shadow-2xl"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:block">
                        <button
                            onClick={() => handleTabChange((activeTab + 1) % CATEGORIES.length)}
                            className="p-3 rounded-full bg-slate-900 border border-white/10 text-white hover:bg-blue-600 transition-colors shadow-2xl"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>



                {/* Bottom CTA */}
                <div className="mt-16 flex justify-center">
                    <CTAButton
                        href="https://app.passedemanda.com/register"
                        className="w-full sm:w-auto"
                    >
                        Explorar Rede Completa
                    </CTAButton>
                </div>
            </div>
        </motion.section>
    );
};
