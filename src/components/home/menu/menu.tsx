import "./style.css";

function MenuDesktop() {
  return (
    <nav className="menuDesktop">
      <ul className="menuDesktop-botoes">
        <li>
          <a href="#apae">
            <button className="botaoMenu">A APAE</button>
          </a>
        </li>
        <li>
          <a href="#comofunciona">
            <button className="botaoMenu">O Projeto</button>
          </a>
        </li>
        <li>
          <a href="#investir">
            <button className="botaoMenu">Por que investir?</button>
          </a>
        </li>
        <li>
          <a href="#comofunciona">
            <button className="botaoMenu">Como funciona?</button>
          </a>
        </li>
        <li>
          <a href="#colaboradores">
            <button className="botaoMenu">Parceiros & Colaboradores</button>
          </a>
        </li>
        <li>
          <a href="#contatar">
            <button className="botaoMenu">Quero ajudar</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuDesktop;
