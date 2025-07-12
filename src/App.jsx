import Cadastro from "./Pages/Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/header";
import Login from "./Pages/Login";
import CadastrarUser from "./Pages/cadastrarUser";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<CadastrarUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
