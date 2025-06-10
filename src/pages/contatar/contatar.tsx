import { useRef, useEffect, useState } from "react";
import Rodape from "../../components/contatar/rodape";
import "./style.css";

function Contatar() {
  const ref = useRef<HTMLElement>(null);
  const [estaNoContatar, setEstaNoContatar] = useState(false);
  const mensagem = "Olá, quero ajudar no Projeto Lacrei!";

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEstaNoContatar(entry.isIntersecting);
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
    <section id="contatar" ref={ref}>
      <div className="contatar-container">
        <h1 className="titulo">E aí, bora ajudar?</h1>
        <div className="apoiar-fotos">
          <div className="coracao-menores">
            <img src="/lacrei/apoiar/coracao-menor.png" />
            <img src="/lacrei/apoiar/coracao-menor.png" />
            <img src="/lacrei/apoiar/coracao-menor.png" />
          </div>
          <img
            src="/lacrei/apoiar/coracao-principal.png"
            className="animar-coracao"
          />
        </div>
        <a href={`https://wa.me/5511999027679?text=${mensagem}`}>
          <button className={estaNoContatar ? `animar-botao` : ""}>
            Quero Ajudar!
          </button>
        </a>
      </div>
      <Rodape />
    </section>
  );
}

export default Contatar;
