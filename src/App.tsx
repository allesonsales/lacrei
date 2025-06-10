import "./App.css";
import ButtonTop from "./components/home/buttonTop/buttonTop";
import Apae from "./pages/apae/apae";
import Colaboradores from "./pages/colaboradores/colaboradores";
import ComoFunciona from "./pages/como_funciona/comoFunciona";
import Contatar from "./pages/contatar/contatar";
import Home from "./pages/home/home";
import Investir from "./pages/investir/investir";
import Mensagens from "./pages/mensagens/mensagens";

function App() {
  return (
    <>
      <ButtonTop />
      <Home />
      <Mensagens />
      <Apae />
      <Investir />
      <ComoFunciona />
      <Colaboradores />
      <Contatar />
    </>
  );
}

export default App;
