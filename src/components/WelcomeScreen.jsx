import { motion, AnimatePresence } from 'framer-motion';

// Componente de Boas-Vindas Full Screen
function WelcomeScreen({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center"
    >
      {/* Background animado */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradientes animados */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 text-center px-6">
        {/* Logo/Ícone e Texto (Entry Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex justify-center"
        >
          <motion.div
            layout
            className="flex items-center gap-0 bg-white/10 backdrop-blur-xl px-4 py-4 rounded-lg border border-white/20 shadow-2xl overflow-hidden max-w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Favicon Container */}
            <motion.div
              layout
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.95, delay: 0.3, type: "spring" }}
              className="flex-shrink-0 w-20 h-20 flex items-center justify-center relative"
            >
              <motion.img
                src="/favicon.png"
                alt="PasseDemanda Logo"
                className="w-18 h-18 object-contain z-10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Subtle Glow behind favicon - Reduced blur */}
              <div className="absolute inset-0 bg-blue-500/15 blur-lg rounded-full" />
            </motion.div>

            {/* Slide-out Text */}
            <motion.div
              layout
              initial={{ width: 0, opacity: 0, x: -10 }}
              animate={{ width: "auto", opacity: 1, x: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <div className="pl-4 pr-2">
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  Passe Demanda
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
        >
          Seja bem-vindo
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          à melhor rede de negócios do país
        </motion.p>

        {/* Linha decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"
        />

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WelcomeScreen;
