import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import "./style.css";
function Apae() {
    const ref = useRef(null);
    const [estaNoQuemSomos, setEstaNoQuemSomos] = useState(false);
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
    return (_jsxs("section", { id: "apae", ref: ref, children: [_jsx("div", { className: "marca-apae", children: _jsx("img", { src: "/marca-apae-positivo.png", alt: "APAE Cotia" }) }), _jsxs("div", { className: estaNoQuemSomos
                    ? "conteudo-container animar-quem-somos"
                    : "conteudo-container", children: [_jsxs("div", { className: "conteudo", children: [_jsx("h1", { className: "titulo", children: "Quem Somos?" }), _jsx("p", { children: "A APAE de Cotia \u00E9 uma organiza\u00E7\u00E3o sem fins lucrativos que transforma vidas por meio do acolhimento e da inclus\u00E3o. Atendendo prioritariamente moradores de Cotia, Carapicu\u00EDba, Vargem Grande Paulista e Embu das Artes, a institui\u00E7\u00E3o oferece cuidado e aten\u00E7\u00E3o a quem mais precisa." }), _jsx("p", { children: "Com uma atua\u00E7\u00E3o dedicada e cont\u00EDnua, a APAE oferece apoio especializado nas \u00E1reas da sa\u00FAde, assist\u00EAncia social e educa\u00E7\u00E3o, promovendo o desenvolvimento e a autonomia de pessoas com defici\u00EAncia intelectual e m\u00FAltipla." })] }), _jsxs("div", { className: "conteudo", children: [_jsx("h2", { className: "titulo", children: "Nossos Servi\u00E7os" }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("b", { children: "Escola de Educa\u00E7\u00E3o Especializada:" }), " ", _jsx("br", {}), "Ensino voltado para crian\u00E7as, adolescentes e adultos, com foco nas necessidades individuais de aprendizagem."] }), _jsxs("li", { children: [_jsx("b", { children: "Programa de Apoio \u00E0 Educa\u00E7\u00E3o Inclusiva:" }), _jsx("br", {}), " Atendimento complementar com refor\u00E7o pedag\u00F3gico, orienta\u00E7\u00E3o e suporte para estudantes da rede p\u00FAblica e privada."] }), _jsxs("li", { children: [_jsx("b", { children: "Servi\u00E7o de Conviv\u00EAncia e Fortalecimento de V\u00EDnculos:" }), _jsx("br", {}), " Espa\u00E7o acolhedor para adultos de 18 a 59 anos, com atividades culturais, manuais, filos\u00F3ficas e sociais que promovem integra\u00E7\u00E3o e bem-estar."] }), _jsxs("li", { children: [_jsx("b", { children: "Programa de Qualifica\u00E7\u00E3o Profissional:" }), _jsx("br", {}), " Oficinas pr\u00E1ticas para preparar jovens e adultos para o mercado de trabalho afim de promover a inclus\u00E3o produtiva."] }), _jsxs("li", { children: [_jsx("b", { children: "Programa de Estimula\u00E7\u00E3o Precoce e Global:" }), _jsx("br", {}), " atividades que estimulam o desenvolvimento motor e cognitivo, al\u00E9m de oferecer orienta\u00E7\u00E3o e apoio \u00E0s fam\u00EDlias."] }), _jsxs("li", { children: [_jsx("b", { children: "Programa de Avalia\u00E7\u00E3o Psicodiagn\u00F3stica:" }), _jsx("br", {}), " diagn\u00F3stico especializado em diferentes fases da vida, com foco em compreens\u00E3o, acolhimento e direcionamento adequado."] })] })] })] })] }));
}
export default Apae;
