import { h } from 'preact'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-dark-800/50 backdrop-blur-md border border-dark-700 p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          
          {/* Efeito de brilho de fundo */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>

          {/* Foto de Perfil */}
          <div className="relative z-10 flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-dark-700 overflow-hidden shadow-2xl relative group">
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`} 
                alt="Wanderson" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Wanderson&background=0D8ABC&color=fff&size=200' }}
              />
              <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full animate-pulse-slow pointer-events-none"></div>
            </div>
            {/* Status Online */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-dark-800 rounded-full animate-pulse"></div>
          </div>

          {/* Textos e Botões */}
          <div className="relative z-10 text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">Incrível?</span></h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
              Estou sempre aberto a discutir novas oportunidades, arquiteturas complexas ou propostas para Engenharia de Software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Botão WhatsApp */}
              <a 
                href="https://wa.me/5596984344154?text=Olá%20Wanderson!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.944 6.55L.15 23.51l5.105-1.554A11.93 11.93 0 0 0 12 24a12 12 0 0 0 12-12 12 12 0 0 0-12-12zM12 22a9.92 9.92 0 0 1-5.06-1.38l-.36-.21-3.76 1.15 1.16-3.66-.23-.37A9.9 9.9 0 0 1 2 12a10 10 0 0 1 10-10 10 10 0 0 1 10 10 10 10 0 0 1-10 10zm5.49-7.53c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-1.1-1.01-1.85-2.25-2.07-2.65-.22-.4-.02-.62.13-.77.13-.13.29-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.5 2.65 1.15 3.1 1.03 3.65.98.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"/></svg>
                Chamar no WhatsApp
              </a>

              {/* Botão Email */}
              <a 
                href="mailto:stalone628@gmail.com" 
                className="flex items-center justify-center gap-2 bg-dark-700 hover:bg-dark-600 border border-dark-600 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                stalone628@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
