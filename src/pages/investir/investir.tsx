import { useEffect, useRef, useState } from "react";
import "./style.css";

function Investir() {
  const ref = useRef<HTMLElement | null>(null);
  const [estaNoInvestir, setEstaNoInvester] = useState(false);

  interface Investir {
    icone: string;
    titulo: string;
    descricao: string;
  }
  const investir: Investir[] = [
    {
      icone: "bi bi-hand-thumbs-up",
      titulo: "Mostre que sua marca se importa!",
      descricao:
        "Apoiar o projeto é contribuir com a reciclagem de lacres, reduzir a poluição e reforçar seu compromisso com a sustentabilidade e a educação ambiental.",
    },
    {
      icone: "bi bi-balloon-heart",
      titulo: "Seja lembrado por apoiar boas causas!",
      descricao:
        "O projeto Lacrei conecta sua empresa a valores sociais e ambientais, aumentando sua visibilidade e fortalecendo sua imagem com propósito.",
    },
    {
      icone: "bi bi-coin",
      titulo: "Beneficios fiscais!",
      descricao:
        "Ao investir em um projeto socioambiental, sua empresa pode obter isenção ou redução de impostos! Uma forma inteligente de fazer o bem e economizar.",
    },
    {
      icone: "bi bi-emoji-wink",
      titulo: "Transparência e confiança",
      descricao:
        "Prestamos contas de cada doação com clareza e responsabilidade. Sua marca apoia uma causa séria, com gestão ética e resultados reais.",
    },
  ];

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEstaNoInvester(entry.isIntersecting);
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
    <section id="investir" ref={ref}>
      <h1 className="titulo">Por que Investir no Lacrei?</h1>
      <div className="conteudo-container">
        <ul>
          {investir.map(({ icone, titulo, descricao }, index) => (
            <li key={index}>
              <i
                className={
                  estaNoInvestir
                    ? `${icone} icone animar-investir`
                    : `${icone} icone`
                }
                style={{ "--delay": `${index * 0.3}s` } as React.CSSProperties}
              ></i>
              <div
                className={estaNoInvestir ? "animar-investir borda" : `borda`}
                style={{ "--delay": `${index * 0.3}s` } as React.CSSProperties}
              >
                <h2>{titulo}</h2>
                <span>{descricao}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Investir;
