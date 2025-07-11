import axios from "axios";
import ProjectCard from "../components/projectCard";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
export default function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="p-6 max-wxl mx-auto space-y-4">
      <Link to="/cadastro">
        <Button variant={"outline"} className="cursor-pointer mb-6">
          Cadastrar Projetos
        </Button>
      </Link>
      {projects.map((data, index) => (
        <ProjectCard
          key={index}
          title={data.title}
          description={data.description}
          data={data.data}
          autor={data.autor}
        />
      ))}
    </div>
  );
}
