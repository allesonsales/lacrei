import { useState, useRef, useEffect } from "react";
import "./style.css";

function Apae() {
  interface Servico {
    titulo: string;
    servico: string;
  }

  const ref = useRef<HTMLElement>(null);
  const [estaNoQuemSomos, setEstaNoQuemSomos] = useState(false);

  const servicos: Servico[] = [
    {
      titulo: "Escola de Educação Especializada:",
      servico:
        "Ensino voltado para crianças, adolescentes e adultos, com foco nas necessidades individuais de aprendizagem.",
    },
    {
      titulo: "Programa de Apoio à Educação Inclusiva:",
      servico:
        "Atendimento complementar com reforço pedagógico, orientação e suporte para estudantes da rede pública e privada.",
    },
    {
      titulo: "Serviço de Convivência e Fortalecimento de Vínculos:",
      servico:
        "Espaço acolhedor para adultos de 18 a 59 anos, com atividades culturais, manuais, filosóficas e sociais que promovem integração e bem-estar.",
    },
    {
      titulo: "Serviço de Convivência e Fortalecimento de Vínculos:",
      servico:
        "Espaço acolhedor para adultos de 18 a 59 anos, com atividades culturais, manuais, filosóficas e sociais que promovem integração e bem-estar.",
    },
    {
      titulo: "Programa de Qualificação Profissional:",
      servico:
        "Oficinas práticas para preparar jovens e adultos para o mercado de trabalho afim de promover a inclusão produtiva.",
    },
    {
      titulo: "Programa de Estimulação Precoce e Global:",
      servico:
        "Atividades que estimulam o desenvolvimento motor e cognitivo, além de oferecer orientação e apoio às famílias.",
    },
    {
      titulo: "Programa de Avaliação Psicodiagnóstica:",
      servico:
        "Diagnóstico especializado em diferentes fases da vida, com foco em compreensão, acolhimento e direcionamento adequado.",
    },
  ];

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEstaNoQuemSomos(entry.isIntersecting);
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
    <section id="apae" ref={ref}>
      <div className="marca-apae">
        <img src="/lacrei/marca-apae-positivo.png" alt="APAE Cotia" />
      </div>
      <div
        className={
          estaNoQuemSomos
            ? "conteudo-container animar-quem-somos"
            : "conteudo-container"
        }
      >
        <div className="conteudo">
          <h1 className="titulo">Quem Somos?</h1>
          <p>
            A APAE de Cotia é uma organização sem fins lucrativos que transforma
            vidas por meio do acolhimento e da inclusão. Atendendo
            prioritariamente moradores de Cotia, Carapicuíba, Vargem Grande
            Paulista e Embu das Artes, a instituição oferece cuidado e atenção a
            quem mais precisa.
          </p>

          <p>
            Com uma atuação dedicada e contínua, a APAE oferece apoio
            especializado nas áreas da saúde, assistência social e educação,
            promovendo o desenvolvimento e a autonomia de pessoas com
            deficiência intelectual e múltipla.
          </p>
        </div>
        <div className="conteudo">
          <h2 className="titulo">Nossos Serviços</h2>
          <ul>
            {servicos.map(({ titulo, servico }, index) => {
              return (
                <li key={index}>
                  <b>{titulo}</b> <br />
                  {servico}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Apae;
