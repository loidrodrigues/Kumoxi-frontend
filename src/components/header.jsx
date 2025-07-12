import { Link } from "react-router-dom";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <div className="bg-primary flex justify-between text-primary-foreground p-6 shadow-xs">
      <Link to="/">
        <h1 className="text-3xl font-bold">Kumoxi</h1>
      </Link>
      <div className="flex gap-2">
        <Link to="/cadastrar">
          <Button variant={"default"} className={"cursor-pointer shadow-none"}>
            Cadastrar
          </Button>
        </Link>
        <Link to="/login">
          <Button variant={"outline"} className={"cursor-pointer shadow-none"}>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
