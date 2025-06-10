import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./style.css";
function MenuMobile() {
    const [menuAberto, setMenuAberto] = useState(false);
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };
    return (_jsxs("nav", { className: "menuMobile", children: [_jsx("img", { src: "/marca-apae-positivo.png" }), _jsx("img", { src: "/marcalacrei.png" }), _jsxs("div", { className: "menuMobile-container", children: [_jsx("button", { onClick: toggleMenu, children: menuAberto ? (_jsx("i", { className: "fa-solid fa-circle-xmark" })) : (_jsx("i", { className: "fa-solid fa-bars" })) }), _jsxs("ul", { className: menuAberto ? "aberto" : "fechado", children: [_jsx("li", { children: "Home" }), _jsx("li", { children: "Como Funciona?" }), _jsx("li", { children: "Por que Investir?" }), _jsx("li", { children: "Quero Ajudar!" })] })] })] }));
}
export default MenuMobile;
