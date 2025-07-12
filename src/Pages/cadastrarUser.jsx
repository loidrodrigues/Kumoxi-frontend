import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
export default function CadastrarUser() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="mb-2">
          <CardTitle>Criar conta</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Cria uma conta e aproveita a plataforma
          </CardDescription>
          <CardAction>
            <Button variant="link">Login</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Nome Completo</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Sistema de gestao de pessoas"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="autor">E-mail</Label>
                <Input
                  id="autor"
                  type="email"
                  placeholder="@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="autor">Senha</Label>
                <Input
                  id="autor"
                  type="password"
                  placeholder="******"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="outline"
            className="w-full cursor-pointer bg-black text-white"
          >
            Criar conta
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
