import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import "./style.css";
function Colaboradores() {
    const [itemVisivel, setItemVisivel] = useState(0);
    const [animando, setAnimando] = useState("fade-in"); // classe da animação atual
    const ref = useRef(null);
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
    return (_jsxs("section", { id: "colaboradores", children: [_jsx("h1", { className: "titulo", children: "O cora\u00E7\u00E3o da nossa parceria \u00E9 sua marca" }), _jsx("div", { className: "vantagem-container", children: _jsx("ul", { children: _jsxs("li", { ref: ref, className: `vantagem ${animando}`, children: [_jsx("img", { src: vantagens[itemVisivel].imagens }), _jsx("span", { children: vantagens[itemVisivel].descricao })] }) }) }), _jsxs("div", { className: "parceiros", children: [_jsx("h2", { className: "titulo", children: "Parceiros" }), _jsx("ul", { children: parceiros.map(({ imagem, nome }, index) => (_jsxs("li", { children: [_jsx("img", { src: imagem }), _jsx("span", { children: nome })] }, index))) })] })] }));
}
export default Colaboradores;
