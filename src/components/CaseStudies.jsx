export function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "SaaS de Varejo: Refatorando Monolito para Microsserviços",
      problem: "O sistema de uma rede de lojas sofria com gargalos no banco de dados e lentidão no checkout durante picos de vendas.",
      architecture: "Desacoplamento utilizando Node.js, mensageria com RabbitMQ e banco de dados PostgreSQL com réplicas de leitura.",
      challenges: "Garantir a consistência eventual e evitar falhas na sincronização de estoque entre PDV e o E-commerce.",
      result: "Redução de 70% no tempo de resposta da API e zero downtime na última Black Friday.",
      tags: ["Node.js", "RabbitMQ", "PostgreSQL", "Clean Architecture"],
      icon: "shopping-cart",
      repoLink: "https://github.com/Stalone628/retail-microservices-showcase"
    },
    {
      id: 2,
      title: "Dashboard Financeiro: Dados em Tempo Real com WebSockets",
      problem: "O cliente precisava de uma visão consolidada de ativos financeiros que atualizasse sem a necessidade de recarregar a página (polling ineficiente).",
      architecture: "Construção de uma SPA em React consumindo dados via WebSockets, com gerenciamento de estado otimizado para evitar re-renderizações desnecessárias.",
      challenges: "Lidar com a alta taxa de mensagens por segundo e otimizar a renderização da tabela de dados (Virtualization).",
      result: "Dashboard fluído com mais de 5.000 atualizações por segundo renderizadas de forma limpa, diminuindo a carga no servidor em 80%.",
      tags: ["React", "WebSockets", "Performance", "Finance API"],
      icon: "activity",
      repoLink: "https://github.com/Stalone628/financial-dashboard-showcase"
    },
    {
      id: 3,
      title: "Assistente de IA Corporativo (RAG Engine)",
      problem: "A equipe perdia horas procurando respostas em centenas de manuais de RH e TI espalhados pela empresa, gerando gargalos de suporte.",
      architecture: "Construção de uma arquitetura RAG (Retrieval-Augmented Generation) em Node.js puro, processando similaridade semântica para injetar contexto real em modelos de linguagem (LLMs).",
      challenges: "Criar um mecanismo de busca vetorial e garantir que a IA respondesse EXCLUSIVAMENTE com base na documentação interna, eliminando alucinações.",
      result: "Redução de 90% no tempo de busca de informações e automatização do suporte interno com respostas precisas e com citação de fontes.",
      tags: ["Node.js", "Preact", "RAG", "Artificial Intelligence", "Vector Search"],
      icon: "bot",
      repoLink: "https://github.com/Stalone628/ai-rag-assistant-showcase"
    },
    {
      id: 4,
      title: "BillingCore: SaaS Multi-Tenant B2B",
      problem: "Sistemas de gestão lentos que misturavam dados de diferentes empresas em código espaguete, gerando problemas de segurança e performance.",
      architecture: "Desenvolvimento de SaaS Multi-Tenant com CodeIgniter 4 (PHP), garantindo isolamento de dados no banco MySQL e Server-Side Rendering (SSR) otimizado.",
      challenges: "Criar painéis dinâmicos sem frameworks pesados, utilizando Vanilla JS (Fetch API e Chart.js) combinado com views estritas e Tailwind CSS.",
      result: "Plataforma B2B robusta, segura e responsiva, com gráficos renderizados localmente e carregamento de interface ultrarrápido.",
      tags: ["PHP", "CodeIgniter 4", "Tailwind CSS", "MySQL", "Vanilla JS"],
      icon: "credit-card",
      repoLink: "https://github.com/Stalone628/billingcore-saas"
    }
  ];

  return (
    <section id="cases" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-dark-800/20 skew-y-[-2deg] -z-10 origin-top-left border-y border-dark-700/30"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Estudos de Caso</h2>
          <p className="text-slate-400 max-w-2xl">Mais do que listar tecnologias, aqui mostro como resolvi problemas reais de negócios aplicando engenharia de software de verdade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="glass-card flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center mb-6">
                {/* SVG Icons based on the case */}
                {c.icon === 'shopping-cart' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>}
                {c.icon === 'activity' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>}
                {c.icon === 'server' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
                {c.icon === 'bot' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>}
                {c.icon === 'credit-card' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">{c.title}</h3>
              <div className="flex-grow space-y-4 text-sm text-slate-300 mb-6">
                <p><strong className="text-primary-400 font-medium">O Problema:</strong> {c.problem}</p>
                <p><strong className="text-primary-400 font-medium">A Arquitetura:</strong> {c.architecture}</p>
                <p><strong className="text-primary-400 font-medium">Desafios:</strong> {c.challenges}</p>
                <p><strong className="text-primary-400 font-medium">Resultado:</strong> {c.result}</p>
              </div>
              
              {c.repoLink && (
                <div className="mb-6">
                  <a href={c.repoLink} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors border border-dark-600 hover:border-primary-500/50 rounded-lg px-4 py-2 bg-dark-800/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Ver Código Fonte
                  </a>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {c.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-dark-900 border border-dark-700 rounded text-xs text-slate-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
