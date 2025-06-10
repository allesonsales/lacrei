import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import Rodape from "../../components/contatar/rodape";
import "./style.css";
function Contatar() {
    const ref = useRef(null);
    const [estaNoContatar, setEstaNoContatar] = useState(false);
    const mensagem = "Olá, quero ajudar no Projeto Lacrei!";
    useEffect(() => {
        if (!ref.current)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            setEstaNoContatar(entry.isIntersecting);
        }, {
            root: null,
            threshold: 0.2,
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (_jsxs("section", { id: "contatar", ref: ref, children: [_jsxs("div", { className: "contatar-container", children: [_jsx("h1", { className: "titulo", children: "E a\u00ED, bora ajudar?" }), _jsxs("div", { className: "apoiar-fotos", children: [_jsxs("div", { className: "coracao-menores", children: [_jsx("img", { src: "/lacrei/apoiar/coracao-menor.png" }), _jsx("img", { src: "/lacrei/apoiar/coracao-menor.png" }), _jsx("img", { src: "/lacrei/apoiar/coracao-menor.png" })] }), _jsx("img", { src: "/lacrei/apoiar/coracao-principal.png", className: "animar-coracao" })] }), _jsx("a", { href: `https://wa.me/5511999027679?text=${mensagem}`, children: _jsx("button", { className: estaNoContatar ? `animar-botao` : "", children: "Quero Ajudar!" }) })] }), _jsx(Rodape, {})] }));
}
export default Contatar;
