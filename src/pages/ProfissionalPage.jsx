import { Problem } from '../components/Problem'
import { TestimonialsMarquee } from '../components/TestimonialsMarquee'
import { FAQSection } from '../components/FAQSection'
import { VettingProcess } from '../components/VettingProcess'
import { ReputationSection } from '../components/ReputationSection'
import { VideoTestimonials } from '../components/VideoTestimonials'
import { BlogSection } from '../components/BlogSection'
import { FeaturesBento } from '../components/FeaturesBento'
import { FinalCTA } from '../components/FinalCTA'
import { SecureDeal } from '../components/SecureDeal'
import { CTAButton } from '../components/ui/CTAButton'
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, TrendingUp, Shield, Wallet, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Header específico para Profissionais
function ProfissionalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 bg-white/80 backdrop-blur-md border-slate-200">
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl transition-colors text-slate-900 group">
          <img src="/favicon.png" alt="PasseDemanda" className="w-8 h-8 rounded-lg" />
          <span>Passe<span className="text-blue-600">Demanda</span></span>
        </a>

        {/* Badge de Persona */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
          <Briefcase className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-medium text-emerald-700">Área do Profissional</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600">Como Funciona</a>
          <a href="#beneficios" className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600">Benefícios</a>
          <a href="#seguranca" className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600">Segurança</a>
          <a href="#faq" className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600">FAQ</a>
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
            className="px-5 py-2.5 text-xs text-slate-600 border-slate-200 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white shadow-none"
            showIcon={false}
          >
            Login
          </CTAButton>
          <CTAButton
            href="https://app.passedemanda.com/register"
            className="px-5 py-2.5 text-xs bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 shadow-none"
            showIcon={false}
          >
            Cadastrar-se
          </CTAButton>
        </div>
      </div>
    </header>
  )
}

// Hero específico para Profissionais
function ProfissionalHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Para Profissionais
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Transforme suas habilidades em{' '}
            <span className="text-emerald-600">oportunidades reais</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 mb-8 leading-relaxed"
          >
            Conecte-se com clientes que valorizam seu trabalho. Receba demandas qualificadas, 
            negocie com segurança e construa uma reputação sólida no mercado.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton
              href="https://app.passedemanda.com/register"
              className="px-8 py-4 text-base bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700"
            >
              Começar Agora
            </CTAButton>
            <CTAButton
              href="#como-funciona"
              className="px-8 py-4 text-base text-slate-700 border-slate-300 hover:bg-slate-50"
              showIcon={false}
            >
              Saiba Mais
            </CTAButton>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">500+</div>
              <div className="text-sm text-slate-500">Profissionais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">R$2M+</div>
              <div className="text-sm text-slate-500">Em Negócios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">4.8</div>
              <div className="text-sm text-slate-500">Avaliação Média</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Benefícios específicos para Profissionais
function ProfissionalBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Demandas Qualificadas',
      description: 'Receba apenas oportunidades que correspondem às suas habilidades e interesses.'
    },
    {
      icon: Shield,
      title: 'Segurança no Pagamento',
      description: 'Garantia de pagamento antes de iniciar o trabalho. Seu dinheiro está protegido.'
    },
    {
      icon: Wallet,
      title: 'Zero Comissão Inicial',
      description: 'Cadastro gratuito. Comece a trabalhar sem investimento inicial.'
    },
    {
      icon: Star,
      title: 'Reputação Transparente',
      description: 'Sistema de avaliações justo que valoriza seu trabalho de qualidade.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Por que trabalhar com a Passe Demanda?
          </h2>
          <p className="text-lg text-slate-600">
            Nossa plataforma foi criada pensando em você, profissional. 
            Oferecemos as ferramentas e segurança que você precisa para crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Como Funciona para Profissionais
function ComoFuncionaProfissional() {
  const steps = [
    {
      number: '01',
      title: 'Crie seu Perfil',
      description: 'Cadastre-se gratuitamente e apresente suas habilidades, experiência e portfólio.'
    },
    {
      number: '02',
      title: 'Receba Demandas',
      description: 'Clientes interessados em seus serviços entrarão em contato com propostas.'
    },
    {
      number: '03',
      title: 'Negocie e Aceite',
      description: 'Converse com o cliente, defina os detalhes e aceite o projeto quando estiver confortável.'
    },
    {
      number: '04',
      title: 'Trabalhe e Receba',
      description: 'Execute o projeto com qualidade e receba o pagamento de forma segura.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Como funciona para profissionais?
          </h2>
          <p className="text-lg text-slate-600">
            Um processo simples e transparente para você começar a trabalhar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-bold text-emerald-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfissionalFooter() {
  return (
    <footer className="py-12 border-t transition-colors duration-300 bg-slate-900 border-slate-800 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-lg">
            <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400">
              <div className="w-3 h-3 bg-slate-500 rounded-full" />
            </div>
            <span className="font-semibold text-white">Passe Demanda</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Passe Demanda. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ProfissionalPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900 bg-white text-slate-900">
      <ProfissionalHeader />

      <main>
        <ProfissionalHero />
        <ProfissionalBenefits />
        <ComoFuncionaProfissional />
        <SecureDeal variant="white" />
        <ReputationSection variant="white" />
        <TestimonialsMarquee variant="white" />
        <VideoTestimonials variant="white" />
        <FAQSection variant="white" />
        <BlogSection />
        <FinalCTA />
      </main>

      <ProfissionalFooter />
    </div>
  )
}
