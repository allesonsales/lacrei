import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import "./style.css";
function ComoFunciona() {
    const ref = useRef(null);
    const [estaNaAncora, setEstaNaAncora] = useState(false);
    useEffect(() => {
        if (!ref.current)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            setEstaNaAncora(entry.isIntersecting);
        }, {
            root: null,
            threshold: 0.2,
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    const iconesFunciona = [
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
    return (_jsxs("section", { id: "comofunciona", ref: ref, children: [_jsx("h1", { className: "titulo", children: "Como Funciona?" }), _jsxs("div", { className: "funciona-container", children: [iconesFunciona.map(({ icone, descricao }, index) => (_jsxs("div", { className: `funciona-item ${estaNaAncora ? "animar" : ""}`, style: { "--delay": `${index * 0.3}s` }, children: [_jsxs("div", { className: "icones", children: [_jsxs("h2", { children: [index + 1, "."] }), _jsx("div", { className: "icone-container", children: _jsx("i", { className: `${icone} icone` }) })] }), _jsx("div", { className: "texto", children: _jsx("span", { children: descricao }) }), _jsx("i", { className: "fa-solid fa-arrow-down" })] }))), _jsx("div", { className: "imagem-final", children: _jsxs("span", { children: ["Assim voc\u00EA faz nossas", _jsx("strong", { children: " crian\u00E7as ainda mais felizes!" })] }) })] })] }));
}
export default ComoFunciona;
