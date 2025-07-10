import { Button } from "@/components/ui/button"
import ProjectCard from "./components/projectCard"
import axios from "axios"
import { useEffect, useState } from "react"
function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/projects").then(response => setProjects(response.data)).catch(error => console.log(error))
    
  }, [])

  return (
    <div className="p-6 max-wxl mx-auto space-y-4">
      {
        projects.map((data, index) =>(
          <ProjectCard key={index} title={data.title} description={data.description} data={data.data}  autor={data.autor}/>
        ))
      }
    </div>
  )
}

export default App