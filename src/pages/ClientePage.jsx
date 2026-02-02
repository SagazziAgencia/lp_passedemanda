import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/Hero'
import { Problem } from '../components/Problem'
import { TestimonialsMarquee } from '../components/TestimonialsMarquee'
import { FAQSection } from '../components/FAQSection'
import { VettingProcess } from '../components/VettingProcess'
import { ReputationSection } from '../components/ReputationSection'
import { VideoTestimonials } from '../components/VideoTestimonials'
import { BlogSection } from '../components/BlogSection'
import { FeaturesBento } from '../components/FeaturesBento'
import { ProfessionalsShowcase } from '../components/ProfessionalsShowcase'
import { FinalCTA } from '../components/FinalCTA'
import { SecureDeal } from '../components/SecureDeal'
import { CTAButton } from '../components/ui/CTAButton'
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Menu, X } from 'lucide-react';

// Header específico para Clientes
function ClienteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#precos", label: "Planos" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 bg-white/80 backdrop-blur-md border-slate-200">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-base md:text-xl transition-colors text-slate-900 group">
          <img src="/favicon.png" alt="PasseDemanda" className="w-8 h-8 rounded-lg" />
          <span className="hidden sm:inline">Passe<span className="text-blue-600">Demanda</span></span>
        </a>

        {/* Badge de Persona - Desktop */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Área do Cliente</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold transition-colors text-slate-600 hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center gap-2 md:gap-3">
          <Link 
            to="/"
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <CTAButton
            href="https://app.passedemanda.com"
            className="px-3 md:px-5 py-2 md:py-2.5 text-xs text-slate-600 border-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white shadow-none"
            showIcon={false}
          >
            Login
          </CTAButton>
          <CTAButton
            href="https://app.passedemanda.com/register"
            className="px-3 md:px-5 py-2 md:py-2.5 text-xs bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-none"
            showIcon={false}
          >
            Começar Agora
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg"
          >
            {/* Badge de Persona - Mobile */}
            <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border-b border-blue-100">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Área do Cliente</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex flex-col gap-2 p-4 bg-slate-50">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
              <CTAButton
                href="https://app.passedemanda.com"
                className="w-full py-3 text-sm text-slate-600 border-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white shadow-none"
                showIcon={false}
              >
                Login
              </CTAButton>
              <CTAButton
                href="https://app.passedemanda.com/register"
                className="w-full py-3 text-sm bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-none"
                showIcon={false}
              >
                Começar Agora
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function ClienteFooter() {
  return (
    <footer className="py-12 border-t transition-colors duration-300 bg-slate-50 border-slate-200 text-slate-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-lg">
            <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-slate-500">
              <div className="w-3 h-3 bg-slate-400 rounded-full" />
            </div>
            <span className="font-semibold text-slate-900">Passe Demanda</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Passe Demanda. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Termos</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ClientePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 bg-white text-slate-900">
      <ClienteHeader />

      <main>
        <Hero variant="white" />
        <ProfessionalsShowcase />
        <SecureDeal variant="white" />
        <Problem variant="brand" />
        <VettingProcess variant="brand" />
        <TestimonialsMarquee variant="white" />
        <FeaturesBento variant="brand" />
        <ReputationSection variant="white" />
        <VideoTestimonials variant="white" />
        <FAQSection variant="white" />
        <BlogSection />
        <FinalCTA />
      </main>

      <ClienteFooter />
    </div>
  )
}
