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
        about: "Sobre o projeto",
        contact: "Contato"
      },
      hero: {
        status: "Em desenvolvimento • Q2 2026",
        title: "Plataforma de Segurança Corporativa",
        description: "Elimine a complexidade da segurança digital com uma solução unificada. Um projeto profissional em desenvolvimento focado na criação de uma plataforma unificada de segurança corporativa. Combinando gerenciamento de credenciais, cofre digital e compliance LGPD em uma arquitetura moderna e escalável.",
        cta: "Saiba mais sobre o projeto",
        features: ["Zero Trust", "LGPD Ready", "Open Source"],
        featuresSub: ["Arquitetura Blindada", "100% Conforme", "Código Aberto"]
      },
      problem: {
        title: "Por que este projeto?",
        description: "Como desenvolvedora com anseio voltado para a área de segurança da informação, venho me interessado pelos desafios técnicos da segurança digital. Este projeto é minha exploração prática de como construir uma plataforma de segurança moderna, utilizando as melhores práticas de desenvolvimento e arquitetura que estou aprendendo.",
        items: [
          "Caos de ferramentas desconectadas",
          "Pontos cegos de segurança críticos", 
          "Horas desperdiçadas em compliance manual"
        ],
        itemsDesc: [
          "Suas equipes usam diversas ferramentas diferentes para gerenciar segurança, criando lacunas e inconsistências.",
          "Você não sabe quem tem acesso ao quê, quando acessou pela última vez, ou se credenciais comprometidas ainda estão ativas.",
          "Sua equipe gasta horas por mês compilando relatórios de compliance manualmente, tempo que poderia ser usado para crescer o negócio."
        ]
      },
      about: {
        title: "Sobre o projeto",
        description: "Um projeto de desenvolvimento de plataforma de segurança corporativa, focado em simplificar a gestão de segurança para empresas.",
        story: "Objetivo: Demonstrar capacidade técnica através da construção de um sistema complexo de segurança, explorando desde a arquitetura do banco de dados até a implementação de criptografia end-to-end e integração com serviços AWS.",
        mission: "Minha missão é clara: criar a ferramenta de segurança corporativa robusta o suficiente para enterprises, simples o suficiente para startups, transparente o suficiente para CTOs, e acessível o suficiente para o orçamento de tecnologia.",
        tech: "Stack Técnica",
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
        title: "Interessado no projeto?",
        description: "Se você é recrutador, CTO ou desenvolvedor interessado em discutir aspectos técnicos deste projeto, ficarei feliz em compartilhar mais detalhes sobre a arquitetura, decisões de design ou processo de desenvolvimento.",
        disclaimer: "Projeto em desenvolvimento ativo • Código disponível no GitHub",
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
        about: "About project",
        contact: "Contact"
      },
      hero: {
        status: "In development • Q2 2025",
        title: "Enterprise Security Platform",
        description: "Eliminate digital security complexity with one unified solution. Smart credential management, secure digital vault for critical documents, and complete LGPD compliance automation. A personal project under development focused on creating a unified corporate security platform. Combining credential management, a digital vault, and LGPD compliance in a modern, scalable architecture.",
        cta: "Learn more about the project",
        features: ["Zero Trust", "LGPD Ready", "Open Source"],
        featuresSub: ["Bulletproof Architecture", "100% Compliant", "Open Source"]
      },
      problem: {
        title: "Why this project?",
        description: "As a developer with a passion for information security, I've been interested in the technical challenges of digital security. This project is my hands-on exploration of how to build a modern security platform, leveraging the development and architectural best practices I'm learning.",
        items: [
          "Chaos of disconnected tools",
          "Critical security blind spots",
          "Hours wasted on manual compliance"
        ],
        itemsDesc: [
          "Your teams use different tools to manage security, creating dangerous gaps and inconsistencies.",
          "You don't know who has access to what, when they last accessed it, or if compromised credentials are still active.",
          "Your team spends hours per month manually compiling compliance reports, time that could be used to grow the business."
        ]
      },
      about: {
        title: "About the Project",
        description: "A corporate security platform development project focused on simplifying security management for companies.",
        story: "Objective: Demonstrate technical capability by building a complex security system, exploring everything from database architecture to implementing end-to-end encryption and integrating with AWS services.",
        mission: "My mission is clear: to create a corporate security tool that's robust enough for enterprises, simple enough for startups, transparent enough for CTOs, and affordable enough for the tech budget.",
        tech: "Tech Stack",
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
        title: "Interested in the project?",
        description: "If you're a recruiter, CTO, or developer interested in discussing the technical aspects of this project, I'd be happy to share more details about the architecture, design decisions, or development process.",
        disclaimer: "Project in active development • Code available on GitHub",
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
      title: language === 'pt' ? "Cofre digital de credenciais" : "Digital credential vault",
      description: language === 'pt' ? "Gerador automático de senhas ultra-seguras + RBAC granular" : "Auto ultra-secure password generator + granular RBAC",
      details: language === 'pt' ? 
        "Acabe com senhas fracas e reutilizadas. Armazenamento com criptografia AES-256, e permite compartilhamento seguro entre equipes com controles de acesso baseados em função. Integração nativa com SSO e 2FA obrigatório." :
        "Eliminate weak and reused passwords. AES-256 encrypted storage enables secure sharing across teams with role-based access controls. Native integration with SSO and mandatory 2FA."
    },
    {
      id: 'storage', 
      icon: <Database className="w-6 h-6" />,
      title: language === 'pt' ? "Cofre de documentos críticos" : "Critical document vault",
      description: language === 'pt' ? "Contratos, certidões, backups - tudo criptografado e organizável" : "Contracts, certificates, backups - all encrypted and organizable",
      details: language === 'pt' ?
        "Transforme o caos de documentos em um sistema organizizado. Upload arrastar-e-soltar, categorização inteligente, busca instantânea por conteúdo, versionamento automático e backup em 3 datacenters brasileiros. Acesso granular por equipe/projeto com logs detalhados." :
        "Transform document chaos into an organized system. Drag-and-drop upload, smart categorization, instant content search, automatic versioning, and backup across 3 Brazilian datacenters. Granular team/project access with detailed logs."
    },
    {
      id: 'access',
      icon: <Users className="w-6 h-6" />,
      title: language === 'pt' ? "Controle de acesso Zero-Trust" : "Zero-Trust access control", 
      description: language === 'pt' ? "Dashboards em tempo real + provisionamento/desprovisionamento automático" : "Real-time dashboards + automatic provisioning/deprovisioning",
      details: language === 'pt' ?
        "Visibilidade completa de quem acessa o quê, quando e de onde. Integração com seu Active Directory/Google Workspace, provisionamento instantâneo para novos colaboradores, revogação automática na saída, e alertas em tempo real para comportamentos suspeitos. Dashboard executivo com métricas de segurança." :
        "Complete visibility of who accesses what, when, and from where. Integration with your Active Directory/Google Workspace, instant provisioning for new employees, automatic revocation on departure, and real-time alerts for suspicious behavior. Executive dashboard with security metrics."
    },
    {
      id: 'compliance',
      icon: <FileText className="w-6 h-6" />,
      title: language === 'pt' ? "Automação LGPD completa" : "Complete LGPD automation",
      description: language === 'pt' ? "Relatórios automáticos + gestão de consentimentos + right to be forgotten" : "Automatic reports + consent management + right to be forgotten",
      details: language === 'pt' ?
        "Mapeamento automático de dados pessoais, gestão completa de consentimentos, relatórios de impacto automáticos, procedimentos de vazamento pré-configurados, e implementação completa do 'direito ao esquecimento'. Relatórios prontos para auditoria em 1 clique." :
        "Automatic personal data mapping, complete consent management, automatic impact reports, pre-configured breach procedures, and complete 'right to be forgotten' implementation. Audit-ready reports in 1 click."
    }
  ];

  const techStack = [
    {
      item: "Backend: Java e PostgreSQL",
      detail: language === 'pt' ? "API REST robusta com autenticação JWT e rate limiting" : "Robust REST API with JWT auth and rate limiting"
    },
    {
      item: "Frontend: React e TypeScript", 
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
                  index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-blue-100' : 'bg-blue-100'
                }`}>
                  {index === 0 && <Settings className="w-6 h-6 text-blue-600" />}
                  {index === 1 && <Eye className="w-6 h-6 text-blue-600" />}
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
              {language === 'pt' ? 'Principais funcionalidades' : 'Core features'}
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
                    {language === 'pt' ? 'Objetivo do projeto' : 'Project objective'}
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
                {/* <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{t.about.whyTrust}</h4>
                  <ul className="space-y-2">
                    {t.about.credentials?.map((credential, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
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
          
       <form 
      action="https://formspree.io/f/xovlpwvd" // substitua pelo seu endpoint
      method="POST"
      className="max-w-md mx-auto flex gap-4 mb-6"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="empresa@dominio.com"
        className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button
        type="submit"
        className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded font-medium transition-colors"
      >
        {language === 'pt' ? 'Enviar' : 'Send'}
      </button>
    </form>
          
          <p className="text-blue-100 text-sm mb-8">{t.cta.disclaimer}</p>

          <div className="flex justify-center space-x-6">
            <a href="mailto:miriamachado.dev@gmail.com" className="text-white hover:text-blue-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/mirimachado" className="text-white hover:text-blue-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/miri%C3%A3-machado-de-camargo-4a6a26206/" className="text-white hover:text-blue-200 transition-colors">
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
              '© 2025 SafeCloud Manager. Em desenvolvimento' :
              '© 2025 SafeCloud Manager. In development'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SafeCloudBilingual;