import ProjectCard from "../components/projectCard";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import api from "../services/api";
import Destaques from "../components/destaques";
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
    <div className="p-6 max-w-[1500px] mx-auto space-y-4">
      <Link to="/cadastro">
        <Button variant={"outline"} className="cursor-pointer mb-6">
          Cadastrar Projetos
        </Button>
      </Link>
      <div className="flex gap-4">
        <div className="flex-1 flex-col gap-4 space-y-6">
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
        <div className="w-[500px]">
          <Destaques />
        </div>
      </div>
    </div>
  );
}
