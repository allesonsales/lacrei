import { useState } from "react";
import "./style.css";

function MenuMobile() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="menuMobile">
      <img src="/lacrei/marca-apae-positivo.png" />
      <img src="/lacrei/marcalacrei.png" />
      <div className="menuMobile-container">
        <button onClick={toggleMenu}>
          {menuAberto ? (
            <i className="fa-solid fa-circle-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
        <ul className={menuAberto ? "aberto" : "fechado"}>
          <li>Home</li>
          <li>Como Funciona?</li>
          <li>Por que Investir?</li>
          <li>Quero Ajudar!</li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuMobile;
