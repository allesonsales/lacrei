import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import MenuDesktop from "../../components/home/menu/menu";
import MenuMobile from "../../components/home/menuMobile/menuMobile";
import "./style.css";
function Home() {
    const [celular, setCelular] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                return setCelular(true);
            }
            else {
                return setCelular(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (_jsxs("section", { id: "home", children: [celular && _jsx(MenuMobile, {}), _jsxs("div", { className: "home-container", children: [_jsx("div", { className: "lacre" }), _jsx("div", { className: "girassol" }), _jsx("div", { className: "logo", children: _jsx("img", { src: "/lacrei/marcalacrei.png", alt: "Projeto Lacrei" }) }), _jsx("div", { className: "criancas", children: _jsx("img", { src: "/lacrei/home/criancas.png", alt: "" }) }), !celular && _jsx(MenuDesktop, {})] })] }));
}
export default Home;
