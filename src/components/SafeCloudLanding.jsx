import React, { useState, useEffect } from 'react';
import { Shield, Lock, Cloud, BarChart3, Users, FileText, Zap, CheckCircle, ArrowRight, Menu, X, AlertTriangle, Database, Key, Bell, Eye, Mail, Calendar } from 'lucide-react';

const SafeCloudLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('business');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Senhas Espalhadas e Vulneráveis",
      description: "Sua equipe usa planilhas do Excel, post-its ou até mesmo navegadores para armazenar senhas críticas da empresa. Um vazamento pode comprometer toda a operação."
    },
    {
      icon: <FileText className="w-8 h-8 text-red-400" />,
      title: "Documentos Sensíveis Desprotegidos",
      description: "Contratos, dados financeiros e informações estratégicas ficam em serviços básicos como Google Drive, sem criptografia adequada ou controle de acesso granular."
    },
    {
      icon: <Users className="w-8 h-8 text-red-400" />,
      title: "Acesso Descontrolado",
      description: "Ex-funcionários ainda têm acesso a sistemas críticos, colaboradores compartilham credenciais, e não há rastreabilidade de quem acessou o quê."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-400" />,
      title: "Falta de Compliance",
      description: "Sua empresa pode estar violando LGPD/GDPR sem saber. Auditorias são um pesadelo porque não há logs centralizados de acesso e atividades."
    }
  ];

  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cofre de Senhas Corporativo",
      description: "Centralize todas as credenciais da empresa em um local seguro com criptografia AES-256. Gere senhas complexas automaticamente e compartilhe com segurança entre equipes.",
      benefits: ["Criptografia militar", "Geração automática", "Compartilhamento seguro", "Histórico de alterações"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Autenticação Multifator Inteligente",
      description: "Proteja cada acesso com MFA adaptativo que aprende os padrões da sua equipe. Receba alertas instantâneos sobre tentativas suspeitas de qualquer lugar do mundo.",
      benefits: ["MFA adaptativo", "Alertas em tempo real", "Reconhecimento de padrões", "Bloqueio automático"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Armazenamento Ultra-Seguro",
      description: "Faça backup automático de documentos críticos com criptografia de ponta a ponta. Seus dados ficam protegidos mesmo se nossos servidores forem comprometidos.",
      benefits: ["Criptografia ponta a ponta", "Backup automático", "Recuperação rápida", "Zero knowledge"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Auditoria e Compliance Automáticos",
      description: "Relatórios detalhados para LGPD/GDPR prontos em segundos. Monitore quem acessou o que, quando e de onde. Transforme auditorias de pesadelo em rotina simples.",
      benefits: ["Relatórios LGPD/GDPR", "Logs detalhados", "Exportação automática", "Dashboard em tempo real"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão Granular de Acessos",
      description: "Controle exato sobre quem pode acessar cada sistema, documento ou senha. Revogue acessos instantaneamente quando funcionários saem da empresa.",
      benefits: ["Permissões granulares", "Revogação instantânea", "Grupos de usuários", "Aprovação de acesso"]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Monitoramento 24/7 Inteligente",
      description: "IA monitora continuamente por atividades suspeitas. Receba notificações via WhatsApp, email ou Slack sobre qualquer anomalia de segurança.",
      benefits: ["Monitoramento por IA", "Múltiplos canais de alerta", "Detecção de anomalias", "Resposta automática"]
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "R$ 89",
      period: "/mês",
      description: "Ideal para pequenas empresas que estão começando a se preocupar com segurança digital",
      features: [
        "Até 10 usuários",
        "100 senhas criptografadas",
        "5GB armazenamento seguro",
        "MFA básico",
        "Relatórios mensais",
        "Suporte por email"
      ],
      highlight: false,
      savings: "Economize R$ 178 no plano anual"
    },
    {
      name: "Business",
      price: "R$ 189",
      period: "/mês",
      description: "Para empresas que levam segurança a sério e precisam de controle total",
      features: [
        "Até 50 usuários",
        "Senhas ilimitadas",
        "50GB armazenamento seguro",
        "MFA avançado + biometria",
        "Relatórios personalizados",
        "Integração com Active Directory",
        "Suporte prioritário",
        "Auditoria LGPD automática"
      ],
      highlight: true,
      savings: "Economize R$ 378 no plano anual",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 389",
      period: "/mês",
      description: "Solução completa para grandes empresas com necessidades específicas de compliance",
      features: [
        "Usuários ilimitados",
        "Senhas e arquivos ilimitados",
        "500GB armazenamento",
        "MFA empresarial completo",
        "Relatórios em tempo real",
        "Integração com SSO",
        "Suporte 24/7 dedicado",
        "Consultoria em segurança",
        "Compliance LGPD/GDPR/SOX",
        "API personalizada"
      ],
      highlight: false,
      savings: "Economize R$ 778 no plano anual"
    }
  ];

  const stats = [
    { value: "R$ 2.3M", label: "Perda média por vazamento de dados" },
    { value: "83%", label: "Das empresas brasileiras já sofreram ataques" },
    { value: "R$ 50M", label: "Multa máxima LGPD" },
    { value: "156 dias", label: "Tempo médio para detectar uma violação" }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Aqui você integraria com seu sistema de email marketing
    alert(`Obrigado! ${email} foi adicionado à nossa lista de espera.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SafeCloud Manager
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problems" className="text-gray-300 hover:text-white transition-colors">Problemas</a>
              <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Solução</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Preços</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
                Entrar na Lista de Espera
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
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#problems" className="block text-gray-300 hover:text-white">Problemas</a>
              <a href="#solution" className="block text-gray-300 hover:text-white">Solução</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white">Preços</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-medium">
                Entrar na Lista de Espera
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Lançamento previsto para Q2 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Pare de Perder o Sono
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Com Segurança Digital
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              A primeira plataforma brasileira que resolve de vez os problemas de segurança digital da sua empresa. 
              <strong className="text-white"> Senhas protegidas, arquivos criptografados, conformidade com LGPD automática</strong> e 
              sua equipe finalmente trabalhando com tranquilidade.
            </p>
            
            <div className="mb-12">
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/25 whitespace-nowrap"
                >
                  Garantir Meu Lugar
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-3">
                🎉 <strong>Oferta de lançamento:</strong> Primeiros 100 clientes ganham 50% de desconto nos primeiros 6 meses
              </p>
            </div>

            {/* Scary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-red-400">
              Reconhece Estes Problemas na Sua Empresa?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Se você é gestor, CTO ou responsável pela TI da empresa, provavelmente já passou por algumas dessas situações. 
              <strong className="text-white"> E cada uma delas é uma bomba-relógio para o seu negócio:</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-red-400">{problem.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">O Resultado Disso Tudo?</h3>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Sua empresa está <strong>vulnerável 24 horas por dia</strong>. Um único erro pode resultar em vazamento de dados, 
              multas milionárias da LGPD, perda de confiança dos clientes e até mesmo o fechamento do negócio. 
              <strong className="text-yellow-400"> Não é exagero - acontece todos os dias no Brasil.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              A Solução Que Vai Transformar a Segurança da Sua Empresa
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              O SafeCloud Manager é a <strong className="text-white">primeira plataforma brasileira</strong> que resolve todos esses problemas 
              em um só lugar. Desenvolvida especialmente para empresas que querem <strong className="text-blue-400">dormir tranquilas</strong> 
              sabendo que seus dados estão protegidos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Por Que Empresas Vão Escolher o SafeCloud?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">100% Brasileiro e LGPD Nativo</h4>
                    <p className="text-gray-300">Desenvolvido no Brasil, para empresas brasileiras. Compliance com LGPD desde o primeiro dia, sem dor de cabeça.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Implementação em 24 Horas</h4>
                    <p className="text-gray-300">Não precisa de meses de implementação. Em 1 dia sua empresa já está protegida e operando com segurança total.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Economia Real de Custos</h4>
                    <p className="text-gray-300">Substitui 5-7 ferramentas diferentes. O que você gastava R$ 2.000+ por mês, agora custa menos de R$ 400.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Suporte Humanizado em Português</h4>
                    <p className="text-gray-300">Chega de chatbot em inglês. Nossa equipe brasileira te atende por WhatsApp, com conhecimento real do seu negócio.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <h4 className="text-xl font-semibold mb-6 text-white">O Que Dizem os Beta Testers:</h4>
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-300 italic mb-3">"Finalmente posso dormir tranquilo. Antes eu tinha pesadelo pensando se algum funcionário tinha deixado a senha do banco numa planilha..."</p>
                  <p className="text-blue-400 text-sm">— João Silva, CTO da TechCorp</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-300 italic mb-3">"Em 2 horas migrei todas as senhas da empresa. O sistema é tão intuitivo que até minha equipe mais resistente a tecnologia adorou."</p>
                  <p className="text-blue-400 text-sm">— Maria Santos, Diretora de TI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Preços Que Fazem Sentido Para o Seu Negócio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chega de pagar caro por ferramentas separadas que não conversam entre si. 
              <strong className="text-white"> Uma solução completa, um preço justo.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                  : 'bg-gray-800/80 border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                  <p className="text-green-400 text-xs mt-2 font-medium">{plan.savings}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Garantir Este Plano
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">🎯 Garantia Especial de Lançamento</h3>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              <strong>Primeiros 100 clientes</strong> que entrarem na lista de espera terão <strong className="text-green-400">50% de desconto</strong> 
              nos primeiros 6 meses + <strong className="text-blue-400">implementação gratuita</strong> + 
              <strong className="text-purple-400"> consultoria de segurança personalizada</strong>. 
              Depois do lançamento, esses bônus não estarão mais disponíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Não Deixe Sua Empresa Ser a Próxima Vítima
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Enquanto você lê isso, centenas de empresas brasileiras estão sendo atacadas. 
            <strong> A diferença entre ser vítima ou estar protegido é tomar uma decisão agora.</strong>
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-1 focus:ring-white backdrop-blur-sm"
              required
            />
            <button 
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              Garantir Minha Vaga Agora
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </form>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>50% de desconto garantido</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Implementação gratuita</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SafeCloud Manager
              </span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A primeira plataforma brasileira de segurança digital corporativa. 
              Desenvolvida para empresas que levam a proteção de dados a sério.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gerenciamento de Senhas</li>
                <li>Armazenamento Seguro</li>
                <li>Auditoria LGPD</li>
                <li>Autenticação Multifator</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Segurança</li>
                <li>Compliance</li>
                <li>Status do Sistema</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentação</li>
                <li>WhatsApp: (47) 99999-9999</li>
                <li>Email: suporte@safecloud.com.br</li>
                <li>Central de Ajuda</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 SafeCloud Manager. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">LGPD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SafeCloudLanding;