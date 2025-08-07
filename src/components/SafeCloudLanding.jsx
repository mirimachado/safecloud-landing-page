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
        description: "Elimine a complexidade da segurança digital com uma solução unificada. Gerenciamento inteligente de credenciais, cofre digital para documentos críticos e automação completa de compliance LGPD - tudo em uma única plataforma projetada especificamente para empresas brasileiras que levam segurança a sério.",
        cta: "Garantir Acesso Antecipado",
        features: ["Zero Trust", "LGPD Ready", "Open Source"],
        featuresSub: ["Arquitetura Blindada", "100% Conforme", "Código Aberto"]
      },
      problem: {
        title: "Por Que Sua Empresa Ainda Está Vulnerável?",
        description: "A realidade é preocupante: 73% das empresas brasileiras sofreram algum tipo de violação de dados nos últimos 2 anos. O problema não é falta de ferramentas - é o caos de ferramentas desconectadas, senhas fracas espalhadas por toda organização e processos de compliance que consomem semanas de trabalho manual.",
        items: [
          "Caos de Ferramentas Desconectadas",
          "Pontos Cegos de Segurança Críticos", 
          "Horas Desperdiçadas em Compliance Manual"
        ],
        itemsDesc: [
          "Suas equipes usam 15+ ferramentas diferentes para gerenciar segurança, criando lacunas e inconsistências perigosas.",
          "Você não sabe quem tem acesso ao quê, quando acessou pela última vez, ou se credenciais comprometidas ainda estão ativas.",
          "Sua equipe gasta 40+ horas por mês compilando relatórios de compliance manualmente, tempo que poderia ser usado para crescer o negócio."
        ]
      },
      about: {
        title: "Sobre o Projeto",
        description: "Um projeto pessoal que nasceu da frustração real com soluções de segurança corporativa caras, complexas e que não atendem empresas brasileiras",
        story: "Como desenvolvedor sênior com 8+ anos criando sistemas críticos, sempre me incomodou a complexidade desnecessária das soluções de segurança existentes. Gastei milhares de horas implementando sistemas que custam R$ 50.000+/ano, são complexos demais para equipes pequenas e não consideram as particularidades do mercado brasileiro - como compliance LGPD específica e necessidades de empresas em crescimento.",
        mission: "Minha missão é clara: criar a ferramenta de segurança corporativa que eu gostaria de ter usado nos últimos 8 anos. Poderosa o suficiente para enterprises, simples o suficiente para startups, transparente o suficiente para CTOs dormirem tranquilos, e acessível o suficiente para não quebrar o orçamento de tecnologia.",
        tech: "Stack Técnica Robusta",
        contact: "Entre em Contato",
        whyTrust: "Por Que Confiar em Mim?",
        credentials: [
          "8+ anos desenvolvendo sistemas críticos para fintechs e e-commerces",
          "Especialista certificado em segurança de aplicações (OWASP)",
          "Ex-líder técnico em startups que processaram R$ 100M+ em transações",
          "Contribuidor ativo em projetos open source de segurança"
        ]
      },
      cta: {
        title: "Programa de Acesso Antecipado - Vagas Limitadas",
        description: "Estou trabalhando diretamente com apenas 20 empresas selecionadas para co-criar a plataforma perfeita. Essas empresas parceiras terão acesso gratuito por 12 meses, influência direta no roadmap do produto, e suporte direto comigo durante toda implementação. Em troca, preciso do seu feedback honesto e alguns estudos de caso.",
        disclaimer: "Sem compromisso • Processo de seleção rigoroso • Resposta garantida em 24h",
        benefits: "O que você ganha sendo empresa parceira:",
        benefitsList: [
          "12 meses de acesso gratuito (valor estimado R$ 12.000)",
          "Suporte técnico direto comigo via WhatsApp/Slack",
          "Suas necessidades específicas priorizadas no roadmap", 
          "Treinamento completo da equipe incluído",
          "Migração de dados atual sem custo adicional"
        ]
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
        title: "Enterprise Security Platform That Actually Works",
        description: "Eliminate digital security complexity with one unified solution. Smart credential management, secure digital vault for critical documents, and complete LGPD compliance automation - all in a single platform designed specifically for Brazilian companies that take security seriously.",
        cta: "Secure Early Access",
        features: ["Zero Trust", "LGPD Ready", "Open Source"],
        featuresSub: ["Bulletproof Architecture", "100% Compliant", "Open Source"]
      },
      problem: {
        title: "Why Is Your Company Still Vulnerable?",
        description: "The reality is concerning: 73% of Brazilian companies suffered some type of data breach in the last 2 years. The problem isn't lack of tools - it's chaos of disconnected tools, weak passwords scattered throughout the organization, and compliance processes that consume weeks of manual work.",
        items: [
          "Chaos of Disconnected Tools",
          "Critical Security Blind Spots",
          "Hours Wasted on Manual Compliance"
        ],
        itemsDesc: [
          "Your teams use 15+ different tools to manage security, creating dangerous gaps and inconsistencies.",
          "You don't know who has access to what, when they last accessed it, or if compromised credentials are still active.",
          "Your team spends 40+ hours per month manually compiling compliance reports, time that could be used to grow the business."
        ]
      },
      about: {
        title: "About the Project",
        description: "A personal project born from real frustration with expensive, complex corporate security solutions that don't serve Brazilian companies",
        story: "As a senior developer with 8+ years building critical systems, I've always been bothered by the unnecessary complexity of existing security solutions. I spent thousands of hours implementing systems that cost $10,000+/year, are too complex for small teams, and don't consider Brazilian market particularities - like specific LGPD compliance and growing company needs.",
        mission: "My mission is clear: create the corporate security tool I wish I had used in the last 8 years. Powerful enough for enterprises, simple enough for startups, transparent enough for CTOs to sleep well, and affordable enough to not break the technology budget.",
        tech: "Robust Tech Stack",
        contact: "Get in Touch",
        whyTrust: "Why Trust Me?",
        credentials: [
          "8+ years developing critical systems for fintechs and e-commerce",
          "Certified application security specialist (OWASP)",
          "Former tech lead at startups that processed $20M+ in transactions",
          "Active contributor to open source security projects"
        ]
      },
      cta: {
        title: "Early Access Program - Limited Spots",
        description: "I'm working directly with only 20 selected companies to co-create the perfect platform. These partner companies will have free access for 12 months, direct influence on the product roadmap, and direct support from me during the entire implementation. In return, I need your honest feedback and some case studies.",
        disclaimer: "No commitment • Rigorous selection process • Guaranteed response in 24h",
        benefits: "What you get as a partner company:",
        benefitsList: [
          "12 months free access (estimated value $2,400)",
          "Direct technical support from me via WhatsApp/Slack",
          "Your specific needs prioritized in roadmap",
          "Complete team training included",
          "Current data migration at no additional cost"
        ]
      }
    }
  };

  const t = content[language];

  const features = [
    {
      id: 'passwords',
      icon: <Lock className="w-6 h-6" />,
      title: language === 'pt' ? "Cofre Digital de Credenciais" : "Digital Credential Vault",
      description: language === 'pt' ? "Gerador automático de senhas ultra-seguras + RBAC granular" : "Auto ultra-secure password generator + granular RBAC",
      details: language === 'pt' ? 
        "Acabe com senhas fracas e reutilizadas. Nossa IA gera senhas inquebráveis, as armazena com criptografia militar AES-256, e permite compartilhamento seguro entre equipes com controles de acesso baseados em função. Integração nativa com SSO e 2FA obrigatório." :
        "End weak and reused passwords. Our AI generates unbreakable passwords, stores them with military-grade AES-256 encryption, and enables secure team sharing with role-based access controls. Native SSO integration and mandatory 2FA."
    },
    {
      id: 'storage', 
      icon: <Database className="w-6 h-6" />,
      title: language === 'pt' ? "Cofre de Documentos Críticos" : "Critical Document Vault",
      description: language === 'pt' ? "Contratos, certidões, backups - tudo criptografado e organizável" : "Contracts, certificates, backups - all encrypted and organizable",
      details: language === 'pt' ?
        "Transforme o caos de documentos em um sistema organizizado. Upload arrastar-e-soltar, categorização inteligente com IA, busca instantânea por conteúdo, versionamento automático e backup em 3 datacenters brasileiros. Acesso granular por equipe/projeto com logs detalhados." :
        "Transform document chaos into an organized system. Drag-and-drop upload, AI-powered smart categorization, instant content search, automatic versioning, and backup across 3 Brazilian datacenters. Granular team/project access with detailed logs."
    },
    {
      id: 'access',
      icon: <Users className="w-6 h-6" />,
      title: language === 'pt' ? "Controle de Acesso Zero-Trust" : "Zero-Trust Access Control", 
      description: language === 'pt' ? "Dashboards em tempo real + provisionamento/desprovisionamento automático" : "Real-time dashboards + automatic provisioning/deprovisioning",
      details: language === 'pt' ?
        "Visibilidade completa de quem acessa o quê, quando e de onde. Integração com seu Active Directory/Google Workspace, provisionamento instantâneo para novos colaboradores, revogação automática na saída, e alertas em tempo real para comportamentos suspeitos. Dashboard executivo com métricas de segurança." :
        "Complete visibility of who accesses what, when, and from where. Integration with your Active Directory/Google Workspace, instant provisioning for new employees, automatic revocation on departure, and real-time alerts for suspicious behavior. Executive dashboard with security metrics."
    },
    {
      id: 'compliance',
      icon: <FileText className="w-6 h-6" />,
      title: language === 'pt' ? "Automação LGPD Completa" : "Complete LGPD Automation",
      description: language === 'pt' ? "Relatórios automáticos + gestão de consentimentos + right to be forgotten" : "Automatic reports + consent management + right to be forgotten",
      details: language === 'pt' ?
        "Nunca mais perca noites de sono com LGPD. Mapeamento automático de dados pessoais, gestão completa de consentimentos, relatórios de impacto automáticos, procedimentos de vazamento pré-configurados, e implementação completa do 'direito ao esquecimento'. Relatórios prontos para auditoria em 1 clique." :
        "Never lose sleep over LGPD again. Automatic personal data mapping, complete consent management, automatic impact reports, pre-configured breach procedures, and complete 'right to be forgotten' implementation. Audit-ready reports in 1 click."
    }
  ];

  const techStack = [
    {
      item: "Backend: Node.js + PostgreSQL",
      detail: language === 'pt' ? "API REST robusta com autenticação JWT e rate limiting" : "Robust REST API with JWT auth and rate limiting"
    },
    {
      item: "Frontend: React + TypeScript", 
      detail: language === 'pt' ? "Interface moderna e responsiva com PWA support" : "Modern responsive interface with PWA support"
    },
    {
      item: language === 'pt' ? "Infraestrutura: AWS (regiões brasileiras)" : "Infrastructure: AWS (Brazilian regions)",
      detail: language === 'pt' ? "Multi-AZ deployment com backup automático e CDN" : "Multi-AZ deployment with automatic backup and CDN"
    },
    {
      item: language === 'pt' ? "Segurança: AES-256, zero-trust" : "Security: AES-256, zero-trust",
      detail: language === 'pt' ? "Criptografia end-to-end com HSM e certificação SOC2" : "End-to-end encryption with HSM and SOC2 certification"
    },
    {
      item: "Compliance: LGPD by design",
      detail: language === 'pt' ? "Data residency no Brasil e auditoria completa" : "Brazilian data residency and complete audit trail"
    }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.problem.itemsDesc[index]}</p>
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
              <div key={feature.id} className="text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-all hover:bg-white">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.details}</p>
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
                <ul className="space-y-4">
                  {techStack.map((tech, index) => (
                    <li key={index} className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-900 font-medium">{tech.item}</span>
                      </div>
                      <p className="text-gray-600 text-sm ml-8">{tech.detail}</p>
                    </li>
                  ))}
                </ul>

                {/* Credenciais */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{t.about.whyTrust}</h4>
                  <ul className="space-y-2">
                    {t.about.credentials?.map((credential, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
          
          {/* Benefits List */}
          <div className="bg-white/10 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">{t.cta.benefits}</h3>
            <ul className="space-y-3">
              {t.cta.benefitsList.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
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
              {language === 'pt' ? 'Candidatar-se' : 'Apply Now'}
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