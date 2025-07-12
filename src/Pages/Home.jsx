import ProjectCard from "../components/projectCard";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import api from "../services/api";
export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api
      .get("/projects")
      .then((response) => {
        setProjects(response.data), setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="p-6 max-wxl mx-auto space-y-4">
      <Link to="/cadastro">
        <Button variant={"outline"} className="cursor-pointer mb-6">
          Cadastrar Projetos
        </Button>
      </Link>
      {loading ? (
        <p className="text-center"> Carregando...</p>
      ) : (
        projects
          .slice()
          .reverse()
          .map((data, index) => (
            <ProjectCard
              key={index}
              title={data.title}
              description={data.description}
              data={data.data}
              autor={data.autor}
            />
          ))
      )}
    </div>
  );
}
