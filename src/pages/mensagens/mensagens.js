import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./style.css";
function Mensagens() {
    const [mensagemVisivel, setMensagemVisivel] = useState(0);
    const mensagens = [
        {
            mensagem: "Um lacre pode parecer pouco. Milhares deles mudam uma vida.",
            foto: "/lacrei/mensagem/1.jpg",
        },
        {
            mensagem: "Juntar lacres é simples. O impacto, imenso.",
            foto: "/lacrei/mensagem/2.jpg",
        },
        {
            mensagem: "Pequenos gestos constroem grandes mudanças.",
            foto: "/lacrei/mensagem/3.jpg",
        },
        {
            mensagem: "Um simples lacre pode virar liberdade sobre rodas.",
            foto: "/lacrei/mensagem/4.jpg",
        },
        {
            mensagem: "Solidariedade cabe na ponta de um dedo.",
            foto: "/lacrei/mensagem/5.jpg",
        },
        {
            mensagem: "Cada lacre é um passo rumo à inclusão.",
            foto: "/lacrei/mensagem/6.jpg",
        },
        {
            mensagem: "Você doa um lacre. Alguém ganha mobilidade.",
            foto: "/lacrei/mensagem/7.jpg",
        },
        {
            mensagem: "Milhares de lacres. Uma nova chance.",
            foto: "/lacrei/mensagem/8.jpg",
        },
        {
            mensagem: "O que você descartaria pode transformar uma vida.",
            foto: "/lacrei/mensagem/9.jpg",
        },
        { mensagem: "Doar lacres é doar esperança.", foto: "/mensagem/10.jpg" },
    ];
    useEffect(() => {
        setMensagemVisivel(Math.floor(Math.random() * mensagens.length));
    }, [mensagens.length]);
    return (_jsx("section", { id: "mensagens", children: _jsxs("div", { className: "mensagens-container", children: [_jsx("img", { src: mensagens[mensagemVisivel].foto }), _jsx("div", { className: "imagem-after" }), _jsx("h1", { className: "titulo", children: mensagens[mensagemVisivel].mensagem })] }) }));
}
export default Mensagens;
