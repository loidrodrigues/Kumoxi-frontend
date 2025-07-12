import { Button } from "../components/ui/button";
import { Toaster } from "../components/ui/sonner";

import { toast } from "sonner";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
export default function Cadastro() {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [data, setData] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title,
      autor,
      data,
      description,
    };
    axios
      .post("http://localhost:3000/api/projects", newProject)
      .then(() => {
        toast("Projeto cadastrado com sucesso", {
          description: "Vamos redirecionar para a pagina principal",
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Toaster />
      <Card className="w-full max-w-sm">
        <CardHeader className="mb-2">
          <CardTitle>Cadastrar um projeto</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Vocë pode cadastrar um projeto aqui
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Titulo</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Sistema de gestao de pessoas"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="autor">Autor</Label>
                <Input
                  id="autor"
                  type="text"
                  placeholder="Jose da Silva"
                  required
                  onChange={(e) => setAutor(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="date"
                  required
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descricão</Label>
                <Textarea
                  required
                  placeholder="Descricao do seu projeto"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="outline"
            className="w-full cursor-pointer"
            onClick={handleSubmit}
          >
            Cadastrar Projeto
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
