import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./style.css";
function ButtonTop() {
    const [scrolling, setScrolling] = useState(false);
    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    };
    useEffect(() => {
        const handleScroll = () => {
            const rolar = window.scrollY;
            if (rolar >= 20) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (scrolling && (_jsx("div", { className: "button-top", onClick: scrollTop, children: _jsx("i", { className: "fa-solid fa-arrow-up" }) })));
}
export default ButtonTop;
