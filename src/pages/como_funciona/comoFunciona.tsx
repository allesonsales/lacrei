import { useState, useRef, useEffect } from "react";
import "./style.css";

function ComoFunciona() {
  const ref = useRef<HTMLElement>(null);
  const [estaNaAncora, setEstaNaAncora] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEstaNaAncora(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  interface IconesComoFunciona {
    icone: string;
    descricao: string;
  }

  const iconesFunciona: IconesComoFunciona[] = [
    {
      icone: "fa-solid fa-hand-holding-heart",
      descricao: "A empresa adota uma escola.",
    },
    {
      icone: "bi bi-box2-heart-fill",
      descricao: "A caixa recolhedora é instalada na escola.",
    },
    {
      icone: "fa-solid fa-truck",
      descricao: "Recolhemos os lacres nas escolas.",
    },
    {
      icone: "bi bi-house-heart-fill",
      descricao: "Levamos e armazenamos os lacres na instituição.",
    },
    {
      icone: "fa-solid fa-truck",
      descricao: "Transporte dos lacres para as recicladoras",
    },
    {
      icone: "fa-solid fa-recycle",
      descricao: "Venda á indústria de reciclagem!",
    },
  ];
  return (
    <section id="comofunciona" ref={ref}>
      <h1 className="titulo">Como Funciona?</h1>
      <div className="funciona-container">
        {iconesFunciona.map(({ icone, descricao }, index) => (
          <div
            className={`funciona-item ${estaNaAncora ? "animar" : ""}`}
            style={{ "--delay": `${index * 0.3}s` } as React.CSSProperties}
          >
            <div className="icones">
              <h2>{index + 1}.</h2>
              <div className="icone-container">
                <i className={`${icone} icone`}></i>
              </div>
            </div>
            <div className="texto">
              <span>{descricao}</span>
            </div>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        ))}
        <div className="imagem-final">
          <span>
            Assim você faz nossas<strong> crianças ainda mais felizes!</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
