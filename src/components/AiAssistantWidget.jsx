import { h } from 'preact'
import { useState, useRef, useEffect } from 'preact/hooks'

const INTENTS = [
  {
    keywords: ['ola', 'olá', 'oi', 'bom', 'tarde', 'noite', 'tudo', 'bem', 'opa'],
    response: "Olá! Eu sou a W.A.N.D.A, assistente virtual cognitiva do Wanderson. Como posso ajudar com a avaliação do perfil dele?"
  },
  {
    keywords: ['stack', 'tecnologia', 'tecnologias', 'linguagem', 'linguagens', 'php', 'node', 'python', 'react', 'preact', 'ferramenta', 'framework', 'banco', 'dados', 'sql'],
    response: "O Wanderson tem um perfil poliglota e domina o Full-Stack! 🚀 No Back-end ele trabalha pesado com Node.js, Python (para IA/RAG) e PHP Moderno (CodeIgniter 4). No Front-end ele usa React, Preact e Tailwind. E para arquiteturas robustas, ele usa PostgreSQL, MySQL, RabbitMQ e WebSockets!"
  },
  {
    keywords: ['experiencia', 'experiência', 'senior', 'sênior', 'pleno', 'trabalho', 'anos', 'projetos', 'portfolio', 'portfólio'],
    response: "O foco dele é Engenharia de Software de Elite. Ele tem experiência na construção de arquiteturas complexas, desde Sistemas Multi-Tenant (SaaS) até Dashboards de Alta Frequência (HFT) e Motores de Busca Semântica usando Inteligência Artificial. Você pode ver todos os detalhes na seção de 'Estudos de Caso'."
  },
  {
    keywords: ['contato', 'falar', 'whatsapp', 'email', 'e-mail', 'contratar', 'entrevista', 'conversa', 'numero'],
    response: "Excelente! A melhor forma de falar com ele é pelo WhatsApp: (96) 98434-4154 ou pelo e-mail stalone628@gmail.com. Fique à vontade para mandar uma mensagem direta!"
  },
  {
    keywords: ['ia', 'ai', 'wanda', 'bot', 'robo', 'robô', 'chatgpt'],
    response: "Eu sou a W.A.N.D.A! Um agente NLP construído totalmente do lado do cliente (Client-side) com Javascript puro. Fui desenvolvida para provar os conhecimentos em algoritmos de busca e UI/UX sem precisar de chaves de API inseguras no Front-end. 😉"
  }
];

export function AiAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá, Tech Recruiter! Eu sou a W.A.N.D.A, a assistente de IA do Wanderson. O que você gostaria de saber sobre ele?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const findBestResponse = (text) => {
    const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Algoritmo simples de matching de palavras-chave
    for (const intent of INTENTS) {
      for (const keyword of intent.keywords) {
        if (normalizedText.includes(keyword)) {
          return intent.response;
        }
      }
    }
    
    return "Hmm, essa é uma pergunta técnica bem específica que não mapeei na minha base de treinamento neural. Mas o Wanderson está online no WhatsApp agora mesmo! Mande um alô para ele no (96) 98434-4154 que ele te responde na hora.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages(prev => [...prev, { text: userText, isBot: false }]);
    setInputValue("");
    setIsTyping(true);

    // Simular o delay de digitação de uma IA (efeito ChatGPT)
    setTimeout(() => {
      const response = findBestResponse(userText);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Janela do Chat */}
      <div 
        className={`bg-dark-800 border border-dark-700 shadow-2xl rounded-2xl w-[350px] sm:w-[400px] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right mb-4 ${
          isOpen ? 'scale-100 opacity-100 h-[500px]' : 'scale-0 opacity-0 h-0'
        }`}
      >
        {/* Header do Bot */}
        <div className="bg-slate-900 border-b border-dark-700 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center border border-primary-500/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">W.A.N.D.A</h3>
              <p className="text-xs text-primary-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                msg.isBot 
                  ? 'bg-dark-800 border border-dark-700 text-slate-200 rounded-tl-none' 
                  : 'bg-primary-600 text-white rounded-tr-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-dark-800 border border-dark-700 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center h-10">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Área */}
        <div className="p-3 border-t border-dark-700 bg-dark-800">
          <div className="flex items-center gap-2 bg-dark-900 border border-dark-700 rounded-full px-4 py-2 focus-within:border-primary-500 transition-colors">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pergunte algo sobre ele..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-200 placeholder-slate-500"
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="text-primary-500 hover:text-primary-400 disabled:text-slate-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Botão Flutuante (FAB) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
        )}
      </button>
    </div>
  )
}
