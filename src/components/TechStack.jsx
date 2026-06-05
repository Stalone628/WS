export function TechStack() {
  const categories = [
    {
      title: "Arquitetura & Backend",
      techs: ["Node.js", "PostgreSQL", "REST APIs", "Microservices", "Clean Architecture", "SOLID"]
    },
    {
      title: "Frontend Experience",
      techs: ["React", "Preact", "Tailwind CSS", "WebSockets", "Performance Optimization", "State Management"]
    },
    {
      title: "Infra & DevOps",
      techs: ["Docker", "Linux", "GitHub Actions (CI/CD)", "AWS Basics", "High Availability"]
    }
  ];

  return (
    <section id="tech" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <p className="text-slate-400">
              A linguagem universal da tecnologia não é o framework X ou Y, mas sim como orquestramos as ferramentas certas para entregar escalabilidade e manutenibilidade.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-slate-200 mb-4 border-b border-dark-700 pb-2 inline-block">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.techs.map(tech => (
                    <li key={tech} className="flex items-center text-slate-300">
                      <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
