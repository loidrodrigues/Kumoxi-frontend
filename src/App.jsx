import { Button } from "@/components/ui/button"
import ProjectCard from "./components/projectCard"

function App() {
  return (
    <div className="p-6 max-wxl mx-auto space-y-4">
      <ProjectCard title="App de Saúde Mental" description="Um app focado em bem-estar emocional dos jovens angolanos." data="08/07/2025"  autor="Loid Padre"/>
      <ProjectCard title="Mapa das Oportunidades" description="Plataforma que mostra empregos, bolsas e cursos em Angola." data="07/07/2025"  autor="Maria da Silva"/>
    </div>
  )
}

export default App