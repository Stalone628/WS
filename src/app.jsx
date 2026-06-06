import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { CaseStudies } from './components/CaseStudies'
import { TechStack } from './components/TechStack'
import { ContactSection } from './components/ContactSection'
import { AiAssistantWidget } from './components/AiAssistantWidget'

export function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-300 font-sans selection:bg-primary-500 selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CaseStudies />
        <TechStack />
        <ContactSection />
      </main>
      
      <AiAssistantWidget />
      
      <footer className="py-8 border-t border-dark-800 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Wanderson. Construído com Preact & Tailwind para alta performance.</p>
        </div>
      </footer>
    </div>
  )
}
