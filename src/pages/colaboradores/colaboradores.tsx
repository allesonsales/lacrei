import { useEffect, useRef, useState } from "react";
import "./style.css";

function Colaboradores() {
  const [itemVisivel, setItemVisivel] = useState(0);
  const [animando, setAnimando] = useState("fade-in"); // classe da animação atual
  const ref = useRef<HTMLLIElement>(null);

  const vantagens = [
    {
      imagens: "/lacrei/colaboradores/marca-revista.png",
      descricao: "Exposição da marca na revista",
    },
    {
      imagens: "/lacrei/colaboradores/marca-caixa.png",
      descricao: "Exposição da marca na caixa recolhedora",
    },
    {
      imagens: "/lacrei/colaboradores/marca-site.png",
      descricao: "Exposição da marca no site da instituição",
    },
    {
      imagens: "/lacrei/colaboradores/marca-selo.png",
      descricao: "Selô social da instituição",
    },
  ];

  const parceiros = [
    {
      imagem: "/lacrei/colaboradores/marca/pref.png",
      nome: "Prefeitura de Cotia - Sec. Educação, Sec. Verde e Meio Ambiente",
    },
    {
      imagem: "/lacrei/colaboradores/marca/pref-vgp.png",
      nome: "Prefeitura de Vargem Grande Paulista - Sec. Educação",
    },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAnimando("fade-out");

      setTimeout(() => {
        setItemVisivel((prev) => (prev + 1) % vantagens.length);
        setAnimando("fade-in");
      }, 1500);
    }, 6000);

    return () => clearInterval(intervalo);
  }, [vantagens.length]);

  return (
    <section id="colaboradores">
      <h1 className="titulo">O coração da nossa parceria é sua marca</h1>
      <div className="vantagem-container">
        <ul>
          <li ref={ref} className={`vantagem ${animando}`}>
            <img src={vantagens[itemVisivel].imagens} />
            <span>{vantagens[itemVisivel].descricao}</span>
          </li>
        </ul>
      </div>
      <div className="parceiros">
        <h2 className="titulo">Parceiros</h2>
        <ul>
          {parceiros.map(({ imagem, nome }, index) => (
            <li key={index}>
              <img src={imagem}></img>
              <span>{nome}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Colaboradores;
