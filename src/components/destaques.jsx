import { useEffect } from "react";
import api from "../services/api";
import { useState } from "react";
import ProjectCard from "./projectCard";
export default function Destaques() {
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    api
      .get("/destaques")
      .then((response) => {
        setDestaques(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="p-6 max-wxl mx-auto space-y-4 ">
      <h1 className="text-3xl font-bold">Destaques</h1>
      {destaques.map((data, index) => (
        <ProjectCard
          key={index}
          title={data.title}
          description={data.description}
          data={data.data}
          autor={data.autor}
          isDestaque={data.destaque}
        />
      ))}
    </div>
  );
}
