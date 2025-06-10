import { useEffect, useState } from "react";
import MenuDesktop from "../../components/home/menu/menu";
import MenuMobile from "../../components/home/menuMobile/menuMobile";
import "./style.css";

function Home() {
  const [celular, setCelular] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 1024) {
        return setCelular(true);
      } else {
        return setCelular(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home">
      {celular && <MenuMobile />}
      <div className="home-container">
        <div className="lacre"></div>
        <div className="girassol"></div>
        <div className="logo">
          <img src="/lacrei/marcalacrei.png" alt="Projeto Lacrei" />
        </div>
        <div className="criancas">
          <img src="/lacrei/home/criancas.png" alt="" />
        </div>
        {!celular && <MenuDesktop />}
      </div>
    </section>
  );
}

export default Home;
