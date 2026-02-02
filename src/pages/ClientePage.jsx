import { Hero } from '../components/Hero'
import { Problem } from '../components/Problem'
import { TestimonialsMarquee } from '../components/TestimonialsMarquee'
import { PricingSection } from '../components/PricingSection'
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
import { ArrowLeft, Users } from 'lucide-react';

// Header específico para Clientes
function ClienteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 bg-white/80 backdrop-blur-md border-slate-200">
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl transition-colors text-slate-900 group">
          <img src="/favicon.png" alt="PasseDemanda" className="w-8 h-8 rounded-lg" />
          <span>Passe<span className="text-blue-600">Demanda</span></span>
        </a>

        {/* Badge de Persona */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Área do Cliente</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm font-semibold transition-colors text-slate-600 hover:text-blue-600">Como Funciona</a>
          <a href="#beneficios" className="text-sm font-semibold transition-colors text-slate-600 hover:text-blue-600">Benefícios</a>
          <a href="#precos" className="text-sm font-semibold transition-colors text-slate-600 hover:text-blue-600">Planos</a>
          <a href="#faq" className="text-sm font-semibold transition-colors text-slate-600 hover:text-blue-600">FAQ</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link 
            to="/"
            className="hidden sm:flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <CTAButton
            href="https://app.passedemanda.com"
            className="px-5 py-2.5 text-xs text-slate-600 border-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white shadow-none"
            showIcon={false}
          >
            Login
          </CTAButton>
          <CTAButton
            href="https://app.passedemanda.com/register"
            className="px-5 py-2.5 text-xs bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-none"
            showIcon={false}
          >
            Começar Agora
          </CTAButton>
        </div>
      </div>
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
        <PricingSection variant="blue" />
        <FAQSection variant="white" />
        <BlogSection />
        <FinalCTA />
      </main>

      <ClienteFooter />
    </div>
  )
}
