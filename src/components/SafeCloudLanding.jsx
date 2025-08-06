import React, { useState } from 'react';
import { Shield, Lock, Database, Users, BarChart3, FileText, Settings, Activity, Eye, GitBranch, CheckCircle, Menu, X, Globe, Github, Linkedin, Mail } from 'lucide-react';

const SafeCloudBilingual = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('passwords');
  const [language, setLanguage] = useState('pt');

  const content = {
    pt: {
      nav: {
        features: "Recursos",
        architecture: "Arquitetura",
        about: "Sobre o Projeto",
        contact: "Contato"
      },
      hero: {
        status: "Em desenvolvimento • Q2 2025",
        title: "Plataforma de Segurança Corporativa",
        description: "Gerenciamento centralizado de credenciais, armazenamento seguro de documentos e automação de compliance projetado para empresas brasileiras. Construído com arquitetura security-first e práticas operacionais transparentes.",
        cta: "Early Access",
        features: ["Zero Trust", "LGPD Ready", "Open Source"],
        featuresSub: ["Arquitetura", "Compliance", "Transparência"]
      },
      problem: {
        title: "O Desafio da Segurança Distribuída",
        description: "Organizações em crescimento enfrentam credenciais espalhadas, controles de acesso inconsistentes e processos manuais de compliance que não escalam efetivamente.",
        items: [
          "Fragmentação de Ferramentas",
          "Visibilidade Limitada", 
          "Processos Manuais"
        ]
      },
      about: {
        title: "Sobre o Projeto",
        description: "Um projeto pessoal que nasceu da necessidade real de simplificar a segurança digital corporativa no Brasil",
        story: "Como desenvolvedor, sempre me incomodei com a complexidade desnecessária das soluções de segurança corporativa existentes. A maioria são caras, complexas demais e não atendem às necessidades específicas das empresas brasileiras.",
        mission: "Minha missão é criar uma ferramenta que seja ao mesmo tempo poderosa e simples de usar, focada nas necessidades reais das empresas brasileiras e com transparência total sobre como funciona.",
        tech: "Stack Técnica",
        contact: "Entre em Contato"
      },
      cta: {
        title: "Programa Early Access",
        description: "Atualmente estou trabalhando com organizações selecionadas para refinar a plataforma. Participe do programa early access para ajudar a moldar o produto final.",
        disclaimer: "Sem compromisso • Entraremos em contato em até 48 horas"
      }
    },
    en: {
      nav: {
        features: "Features",
        architecture: "Architecture",
        about: "About Project", 
        contact: "Contact"
      },
      hero: {
        status: "In development • Q2 2025",
        title: "Enterprise Security Management Platform",
        description: "Centralized credential management, secure document storage, and compliance automation designed for Brazilian enterprises. Built with security-first architecture and transparent operational practices.",
        cta: "Early Access",
        features: ["Zero Trust", "LGPD Ready", "Open Source"],
        featuresSub: ["Architecture", "Compliance", "Transparency"]
      },
      problem: {
        title: "The Challenge of Distributed Security",
        description: "Growing organizations struggle with scattered credentials, inconsistent access controls, and manual compliance processes that don't scale effectively.",
        items: [
          "Tool Fragmentation",
          "Limited Visibility",
          "Manual Processes"
        ]
      },
      about: {
        title: "About the Project",
        description: "A personal project born from the real need to simplify corporate digital security in Brazil",
        story: "As a developer, I've always been bothered by the unnecessary complexity of existing corporate security solutions. Most are expensive, overly complex, and don't address the specific needs of Brazilian companies.",
        mission: "My mission is to create a tool that is both powerful and simple to use, focused on the real needs of Brazilian companies and with complete transparency about how it works.",
        tech: "Tech Stack",
        contact: "Get in Touch"
      },
      cta: {
        title: "Early Access Program",
        description: "I'm currently working with select organizations to refine the platform. Join our early access program to help shape the final product.",
        disclaimer: "No commitment required • We'll reach out within 48 hours"
      }
    }
  };

  const t = content[language];

  const features = [
    {
      id: 'passwords',
      icon: <Lock className="w-6 h-6" />,
      title: language === 'pt' ? "Gerenciamento de Senhas" : "Password Management",
      description: language === 'pt' ? "Armazenamento centralizado com RBAC" : "Centralized storage with RBAC"
    },
    {
      id: 'storage', 
      icon: <Database className="w-6 h-6" />,
      title: language === 'pt' ? "Armazenamento Seguro" : "Secure Storage",
      description: language === 'pt' ? "Arquivos criptografados com permissões granulares" : "Encrypted files with granular permissions"
    },
    {
      id: 'access',
      icon: <Users className="w-6 h-6" />,
      title: language === 'pt' ? "Gestão de Acessos" : "Access Management", 
      description: language === 'pt' ? "Controle centralizado de usuários" : "Centralized user control"
    },
    {
      id: 'compliance',
      icon: <FileText className="w-6 h-6" />,
      title: language === 'pt' ? "Compliance & Auditoria" : "Compliance & Audit",
      description: language === 'pt' ? "Relatórios LGPD automatizados" : "Automated LGPD reporting"
    }
  ];

  const techStack = [
    "Backend: Node.js + PostgreSQL",
    "Frontend: React + TypeScript",
    language === 'pt' ? "Infraestrutura: AWS (regiões brasileiras)" : "Infrastructure: AWS (Brazilian regions)",
    language === 'pt' ? "Segurança: AES-256, zero-trust" : "Security: AES-256, zero-trust",
    "Compliance: LGPD by design"
  ];

  const handleEmailSubmit = () => {
    const message = language === 'pt' 
      ? `Obrigado pelo interesse! Entraremos em contato com ${email} em breve.`
      : `Thank you for your interest! We'll reach out to ${email} soon.`;
    alert(message);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">SafeCloud Manager</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.features}</a>
              <a href="#architecture" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.architecture}</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.about}</a>
              
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <button
                  onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  {language === 'pt' ? 'EN' : 'PT'}
                </button>
              </div>
              
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                {t.hero.cta}
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">{t.nav.features}</a>
              <a href="#architecture" className="block text-gray-600 hover:text-gray-900">{t.nav.architecture}</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900">{t.nav.about}</a>
              <div className="flex items-center space-x-2 py-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <button
                  onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  {language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
                </button>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">{t.hero.cta}</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Activity className="w-4 h-4" />
              <span>{t.hero.status}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-10">
              {t.hero.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-1">{feature}</div>
                  <div className="text-gray-600 text-sm">{t.hero.featuresSub[index]}</div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.problem.title}</h2>
            <p className="text-lg text-gray-600">{t.problem.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.problem.items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-red-100' : index === 1 ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  {index === 0 && <Settings className="w-6 h-6 text-red-600" />}
                  {index === 1 && <Eye className="w-6 h-6 text-yellow-600" />}
                  {index === 2 && <BarChart3 className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'pt' ? 'Principais Funcionalidades' : 'Core Features'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'pt' ? 
                'Uma plataforma unificada que consolida ferramentas de segurança mantendo padrões enterprise.' :
                'A unified platform that consolidates security tools while maintaining enterprise standards.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'pt' ? 'Arquitetura Técnica' : 'Technical Architecture'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'pt' ? 
                'Construído sobre princípios de segurança comprovados com transparência em seu núcleo' :
                'Built on proven security principles with transparency at its core'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Zero Trust</h3>
              <p className="text-sm text-gray-600">
                {language === 'pt' ? 'Nunca confie, sempre verifique' : 'Never trust, always verify'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'pt' ? 'Criptografia E2E' : 'E2E Encryption'}
              </h3>
              <p className="text-sm text-gray-600">AES-256 encryption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Source</h3>
              <p className="text-sm text-gray-600">
                {language === 'pt' ? 'Código transparente e auditável' : 'Transparent, auditable code'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'pt' ? 'Monitoramento 24/7' : 'Real-time Monitoring'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'pt' ? 'Trilhas de auditoria completas' : 'Comprehensive audit trails'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
              <p className="text-lg text-gray-600">{t.about.description}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {language === 'pt' ? 'A História' : 'The Story'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{t.about.story}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {language === 'pt' ? 'Minha Missão' : 'My Mission'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{t.about.mission}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.tech}</h3>
                <ul className="space-y-3">
                  {techStack.map((tech, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">{t.cta.description}</p>
          
          <div className="max-w-md mx-auto flex gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="empresa@dominio.com"
              className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button 
              onClick={handleEmailSubmit}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded font-medium transition-colors"
            >
              {language === 'pt' ? 'Enviar' : 'Submit'}
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mb-8">{t.cta.disclaimer}</p>

          <div className="flex justify-center space-x-6">
            <a href="mailto:contato@safecloud.com" className="text-white hover:text-blue-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">SafeCloud Manager</span>
          </div>
          <p className="text-gray-400 text-sm">
            {language === 'pt' ? 
              '© 2025 SafeCloud Manager. Em desenvolvimento • Lançamento previsto Q2 2025' :
              '© 2025 SafeCloud Manager. In development • Expected launch Q2 2025'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SafeCloudBilingual;