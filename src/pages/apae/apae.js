import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import "./style.css";
function Apae() {
    const ref = useRef(null);
    const [estaNoQuemSomos, setEstaNoQuemSomos] = useState(false);
    const servicos = [
        {
            titulo: "Escola de Educação Especializada:",
            servico: "Ensino voltado para crianças, adolescentes e adultos, com foco nas necessidades individuais de aprendizagem.",
        },
        {
            titulo: "Programa de Apoio à Educação Inclusiva:",
            servico: "Atendimento complementar com reforço pedagógico, orientação e suporte para estudantes da rede pública e privada.",
        },
        {
            titulo: "Serviço de Convivência e Fortalecimento de Vínculos:",
            servico: "Espaço acolhedor para adultos de 18 a 59 anos, com atividades culturais, manuais, filosóficas e sociais que promovem integração e bem-estar.",
        },
        {
            titulo: "Serviço de Convivência e Fortalecimento de Vínculos:",
            servico: "Espaço acolhedor para adultos de 18 a 59 anos, com atividades culturais, manuais, filosóficas e sociais que promovem integração e bem-estar.",
        },
        {
            titulo: "Programa de Qualificação Profissional:",
            servico: "Oficinas práticas para preparar jovens e adultos para o mercado de trabalho afim de promover a inclusão produtiva.",
        },
        {
            titulo: "Programa de Estimulação Precoce e Global:",
            servico: "Atividades que estimulam o desenvolvimento motor e cognitivo, além de oferecer orientação e apoio às famílias.",
        },
        {
            titulo: "Programa de Avaliação Psicodiagnóstica:",
            servico: "Diagnóstico especializado em diferentes fases da vida, com foco em compreensão, acolhimento e direcionamento adequado.",
        },
    ];
    useEffect(() => {
        if (!ref.current)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            setEstaNoQuemSomos(entry.isIntersecting);
        }, {
            root: null,
            threshold: 0.2,
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (_jsxs("section", { id: "apae", ref: ref, children: [_jsx("div", { className: "marca-apae", children: _jsx("img", { src: "/lacrei/marca-apae-positivo.png", alt: "APAE Cotia" }) }), _jsxs("div", { className: estaNoQuemSomos
                    ? "conteudo-container animar-quem-somos"
                    : "conteudo-container", children: [_jsxs("div", { className: "conteudo", children: [_jsx("h1", { className: "titulo", children: "Quem Somos?" }), _jsx("p", { children: "A APAE de Cotia \u00E9 uma organiza\u00E7\u00E3o sem fins lucrativos que transforma vidas por meio do acolhimento e da inclus\u00E3o. Atendendo prioritariamente moradores de Cotia, Carapicu\u00EDba, Vargem Grande Paulista e Embu das Artes, a institui\u00E7\u00E3o oferece cuidado e aten\u00E7\u00E3o a quem mais precisa." }), _jsx("p", { children: "Com uma atua\u00E7\u00E3o dedicada e cont\u00EDnua, a APAE oferece apoio especializado nas \u00E1reas da sa\u00FAde, assist\u00EAncia social e educa\u00E7\u00E3o, promovendo o desenvolvimento e a autonomia de pessoas com defici\u00EAncia intelectual e m\u00FAltipla." })] }), _jsxs("div", { className: "conteudo", children: [_jsx("h2", { className: "titulo", children: "Nossos Servi\u00E7os" }), _jsx("ul", { children: servicos.map(({ titulo, servico }, index) => {
                                    return (_jsxs("li", { children: [_jsx("b", { children: titulo }), " ", _jsx("br", {}), servico] }, index));
                                }) })] })] })] }));
}
export default Apae;
