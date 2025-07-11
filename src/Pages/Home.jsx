import axios from "axios";
import ProjectCard from "../components/projectCard";
import { useEffect, useState } from "react";
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
