export function HeroSection() {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
          <span className="flex w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
          Software Engineer | Building Scalable Web Apps
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Transformo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent">lógicas de negócio complexas</span> em arquiteturas limpas.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Especialista em resolver gargalos de performance e escalar sistemas utilizando React, Node e ecossistemas cloud. O código é apenas a ferramenta; o foco é o <strong className="text-slate-200">impacto no negócio</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cases" className="btn-primary w-full sm:w-auto">
            Ver Estudos de Caso
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="https://wa.me/5596984344154?text=Olá,%20vi%20o%20seu%20portfólio%20e%20gostaria%20de%20bater%20um%20papo!" target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
            Bater um papo (10 min)
          </a>
        </div>
      </div>
    </section>
  )
}
