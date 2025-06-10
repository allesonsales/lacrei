import { useState, useRef, useEffect } from "react";
import "./style.css";

function Rodape() {
  const ref = useRef<HTMLElement>(null);
  const [estaNoRodape, setEstaNoRodape] = useState(false);
  const ano: number = new Date().getFullYear();
  const mensagem = "Olá, quero ajudar no Projeto Lacrei!";

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEstaNoRodape(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <footer ref={ref} className={estaNoRodape ? "animar-rodape" : ""}>
      <img
        src="/lacrei/marcalacrei.png"
        alt="Projeto Lacrei"
        className="marca-lacrei"
      />
      <div className="footer-container">
        <ul>
          <li>
            <h3>Menu</h3>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#apae">Quem somos?</a>
          </li>
          <li>
            <a href="#comofunciona">Como funciona?</a>
          </li>
          <li>
            <a href="#investir">Por que Investir?</a>
          </li>
          <li>
            <a href={`https://wa.me/5511999027679?text=${mensagem}`}>
              Quero ajudar!
            </a>
          </li>
        </ul>
        <div className="redes-container">
          <h3>Nossas Redes:</h3>
          <div className="redes">
            <a href="https://www.facebook.com/apaedecotia" target="blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/apaedecotia/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href={`https://wa.me/5511999027679?text=${mensagem}`}>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <img src="/lacrei/marca-apae.png" alt="" />
        </div>
      </div>
      <div className="marca-container">Projeto Lacrei - {ano}</div>
    </footer>
  );
}

export default Rodape;
