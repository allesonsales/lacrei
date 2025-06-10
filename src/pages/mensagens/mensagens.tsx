import { useEffect, useState } from "react";
import "./style.css";

function Mensagens() {
  const [mensagemVisivel, setMensagemVisivel] = useState<number>(0);

  const mensagens = [
    {
      mensagem: "Um lacre pode parecer pouco. Milhares deles mudam uma vida.",
      foto: "/mensagem/1.jpg",
    },
    {
      mensagem: "Juntar lacres é simples. O impacto, imenso.",
      foto: "/mensagem/2.jpg",
    },
    {
      mensagem: "Pequenos gestos constroem grandes mudanças.",
      foto: "/mensagem/3.jpg",
    },
    {
      mensagem: "Um simples lacre pode virar liberdade sobre rodas.",
      foto: "/mensagem/4.jpg",
    },
    {
      mensagem: "Solidariedade cabe na ponta de um dedo.",
      foto: "/mensagem/5.jpg",
    },
    {
      mensagem: "Cada lacre é um passo rumo à inclusão.",
      foto: "/mensagem/6.jpg",
    },
    {
      mensagem: "Você doa um lacre. Alguém ganha mobilidade.",
      foto: "/mensagem/7.jpg",
    },
    {
      mensagem: "Milhares de lacres. Uma nova chance.",
      foto: "/mensagem/8.jpg",
    },
    {
      mensagem: "O que você descartaria pode transformar uma vida.",
      foto: "/mensagem/9.jpg",
    },
    { mensagem: "Doar lacres é doar esperança.", foto: "/mensagem/10.jpg" },
  ];
  useEffect(() => {
    setMensagemVisivel(Math.floor(Math.random() * mensagens.length));
  }, [mensagens.length]);

  return (
    <section id="mensagens">
      <div className="mensagens-container">
        <img src={mensagens[mensagemVisivel].foto} />
        <div className="imagem-after"></div>
        <h1 className="titulo">{mensagens[mensagemVisivel].mensagem}</h1>
      </div>
    </section>
  );
}

export default Mensagens;
