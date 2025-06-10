import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import "./style.css";
function Rodape() {
    const ref = useRef(null);
    const [estaNoRodape, setEstaNoRodape] = useState(false);
    const ano = new Date().getFullYear();
    const mensagem = "Olá, quero ajudar no Projeto Lacrei!";
    useEffect(() => {
        if (!ref.current)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            setEstaNoRodape(entry.isIntersecting);
        }, {
            root: null,
            threshold: 0.2,
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (_jsxs("footer", { ref: ref, className: estaNoRodape ? "animar-rodape" : "", children: [_jsx("img", { src: "/marcalacrei.png", alt: "Projeto Lacrei", className: "marca-lacrei" }), _jsxs("div", { className: "footer-container", children: [_jsxs("ul", { children: [_jsx("li", { children: _jsx("h3", { children: "Menu" }) }), _jsx("li", { children: _jsx("a", { href: "#home", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#apae", children: "Quem somos?" }) }), _jsx("li", { children: _jsx("a", { href: "#comofunciona", children: "Como funciona?" }) }), _jsx("li", { children: _jsx("a", { href: "#investir", children: "Por que Investir?" }) }), _jsx("li", { children: _jsx("a", { href: `https://wa.me/5511999027679?text=${mensagem}`, children: "Quero ajudar!" }) })] }), _jsxs("div", { className: "redes-container", children: [_jsx("h3", { children: "Nossas Redes:" }), _jsxs("div", { className: "redes", children: [_jsx("a", { href: "https://www.facebook.com/apaedecotia", target: "blank", children: _jsx("i", { className: "fa-brands fa-facebook" }) }), _jsx("a", { href: "https://www.instagram.com/apaedecotia/", children: _jsx("i", { className: "fa-brands fa-instagram" }) }), _jsx("a", { href: `https://wa.me/5511999027679?text=${mensagem}`, children: _jsx("i", { className: "fa-brands fa-whatsapp" }) })] }), _jsx("img", { src: "/marca-apae.png", alt: "" })] })] }), _jsxs("div", { className: "marca-container", children: ["Projeto Lacrei - ", ano] })] }));
}
export default Rodape;
