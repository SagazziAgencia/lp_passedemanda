import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Wrench, Target, Wallet, ScanEye, Medal, ChevronRight, Diamond, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CTAButton } from '../components/ui/CTAButton';
import WelcomeScreen from '../components/WelcomeScreen';

// Componente de background animado com grid
function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Linhas diagonais animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 100 0 L 0 100"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// Componente de partículas flutuantes
function FloatingParticles({ color, count = 20 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${color}`}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 50 + '%'],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

// Card de feature com animação
function FeatureCard({ icon: Icon, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
    >
      <Icon className="w-4 h-4" />
      <span className="text-xs font-bold uppercase tracking-wider">{text}</span>
    </motion.div>
  );
}

// Side Panel Component - Uses Tailwind responsive classes only
function SidePanel({
  type,
  isHovered,
  onHover,
  onLeave,
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  to,
  gradient,
  accentColor,
  particleColor,
}) {
  const isActive = isHovered === type;
  const isOtherActive = isHovered && isHovered !== type;

  return (
    <>
      {/* MOBILE VERSION - Always visible, simplified, no hover effects */}
      <motion.div
        className={`relative h-1/2 w-full cursor-pointer overflow-hidden ${gradient} md:hidden`}
        onClick={() => window.location.href = to}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Overlay de brilho */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Conteúdo Compacto para Mobile */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 py-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center"
          >
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm border border-white/30`}>
              <Icon className="w-3 h-3" />
              {subtitle}
            </span>
          </motion.div>

          {/* Título */}
          <motion.h2
            className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          {/* Descrição */}
          <motion.p
            className="text-xs font-medium text-white/80 max-w-[280px] mb-5 leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Features - sempre visíveis no mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-6 justify-center"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-white/90 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20"
              >
                <feature.icon className="w-2.5 h-2.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Botão CTA */}
          <CTAButton
            href={to}
            className="text-white border-white/50 hover:bg-white hover:text-slate-900 text-xs py-2 px-4"
          >
            Continuar
          </CTAButton>
        </div>

        {/* Ícone decorativo pequeno */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <Icon className="w-24 h-24 text-white" />
        </div>

        {/* Indicador de tap */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50" />
      </motion.div>

      {/* DESKTOP VERSION - With hover animations */}
      <motion.div
        className={`relative h-full cursor-pointer overflow-hidden ${gradient} hidden md:block`}
        initial={{ width: '50%' }}
        animate={{
          width: isActive ? '65%' : isOtherActive ? '35%' : '50%',
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => onHover(type)}
        onMouseLeave={onLeave}
      >
        {/* Overlay de brilho no hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Conteúdo */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-8 lg:px-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isActive ? 1 : 0.7,
              scale: isActive ? 1 : 0.8,
              y: isActive ? 0 : 20
            }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center"
          >
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm border border-white/30`}>
              <Icon className="w-4 h-4" />
              {subtitle}
            </span>
          </motion.div>

          {/* Título */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isActive ? 1 : 0.9,
              y: isActive ? 0 : 20,
              scale: isActive ? 1 : 0.95
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          {/* Descrição */}
          <motion.p
            className="text-lg md:text-xl font-medium text-white/80 max-w-md mb-8 leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isActive ? 1 : 0.7,
              y: isActive ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Features - só aparecem no hover */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-3 mb-8 justify-center"
              >
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    text={feature.text}
                    delay={0.3 + index * 0.1}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: isActive ? 0 : 20,
              scale: isActive ? 1 : 0.9
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <CTAButton
              href={to}
              className="text-white border-white/50 hover:bg-white hover:text-slate-900"
            >
              Continuar
            </CTAButton>
          </motion.div>
        </div>

        {/* Ícone decorativo grande */}
        <motion.div
          className="absolute bottom-8 right-8 opacity-10"
          animate={{
            scale: isActive ? 1.2 : 1,
            rotate: isActive ? 10 : 0
          }}
          transition={{ duration: 0.8 }}
        >
          <Icon className="w-48 h-48 text-white" />
        </motion.div>

        {/* Indicador de hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-white/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </>
  );
}

export function GatewayPage() {
  const [hovered, setHovered] = useState(null);
  const [showLogo, setShowLogo] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  // Esconde a logo após interação
  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => setShowLogo(false), 500);
      return () => clearTimeout(timer);
    } else {
      setShowLogo(true);
    }
  }, [hovered]);

  // Auto-fecha a mensagem de boas-vindas após 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-slate-900">
      {/* Background animado global */}
      <AnimatedGridBackground />

      {/* Mensagem de Boas-Vindas */}
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen />
        )}
      </AnimatePresence>
      
      {/* Logo Central Flutuante - Hidden on mobile */}
      <AnimatePresence>
        {showLogo && !hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none hidden md:flex"
          >
            <div className="flex flex-col items-center pointer-events-auto">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
                <img src="/favicon.png" alt="PasseDemanda" className="w-10 h-10 rounded-lg" />
                <span className="text-2xl font-bold text-white">
                  Passe<span className="text-blue-400">Demanda</span>
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-white/60 text-sm font-medium"
              >
                Escolha seu perfil para continuar
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Container Split Screen */}
      <div className="flex flex-col md:flex-row h-full w-full relative z-10">
        {/* Lado Cliente - Azul Premium */}
        <SidePanel
          type="cliente"
          isHovered={hovered}
          onHover={setHovered}
          onLeave={() => setHovered(null)}
          icon={Crown}
          title="Passar Demandas"
          subtitle="Sou Cliente"
          description="Encontre os melhores profissionais verificados do mercado. Segurança, qualidade e praticidade em cada negócio."
          to="/cliente"
          gradient="bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900"
          accentColor="text-blue-600"
          particleColor="bg-blue-200"
          features={[
            { icon: ScanEye, text: 'Verificação Rigida' },
            { icon: Target, text: 'Match Preciso' },
            { icon: Diamond, text: 'Qualidade Premium' }
          ]}
        />

        {/* Lado Profissional - Azul Marinho Premium */}
        <SidePanel
          type="profissional"
          isHovered={hovered}
          onHover={setHovered}
          onLeave={() => setHovered(null)}
          icon={Wrench}
          title="Pegar Demandas"
          subtitle="Sou Profissional"
          description="Conecte-se com clientes qualificados e aumente sua renda. Sua expertise merece reconhecimento."
          to="/profissional"
          gradient="bg-gradient-to-bl from-blue-900 via-blue-800 to-slate-950"
          accentColor="text-blue-600"
          particleColor="bg-blue-300"
          features={[
            { icon: Rocket, text: 'Demandas em Alta' },
            { icon: Wallet, text: 'Pagamento Seguro' },
            { icon: Medal, text: 'Reputação Real' }
          ]}
        />
      </div>

      {/* Footer fixo - Responsive positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute inset-x-0 flex justify-center z-50 pointer-events-none bottom-4 md:bottom-6"
      >
        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 pointer-events-auto gap-3 px-4 py-2 md:gap-6 md:px-6 md:py-3">
          <span className="text-white/70 text-xs md:text-sm">
            Já tem uma conta?
          </span>
          <a
            href="https://app.passedemanda.com"
            className="text-white font-semibold hover:text-blue-300 transition-colors flex items-center gap-1 text-sm md:text-base"
          >
            Entrar
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>


    </div>
  );
}
