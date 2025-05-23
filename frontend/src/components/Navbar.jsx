import { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import logo from "../assets/img/logoSC.png"
import "./Navbar.css";

const Navbar = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth)
    }

    handleWidth()
  }, [])

  return (
    <div className="navbar-container">
      <div className="image-container">
        <a href="/SiteSoulCodeJr" className="logo-box">
        <img src={logo} alt="SoulCode Logo" className="logo" />
        {width > 800 ? <h2>SoulCodeJr</h2> : ""}
        </a>


      </div>
      <div className="center-navs-container">
        <nav>
          <a href="/SiteSoulCodeJr/#team">Equipe</a>
        </nav>
        <nav>
          <a href="/SiteSoulCodeJr/#services">Serviços</a>
        </nav>
        <nav>
          <a href="/SiteSoulCodeJr/#projects">Projetos</a>
        </nav>
        <nav>
          <a href="/SiteSoulCodeJr/#plans">Planos</a>
        </nav>
        <nav>
          <a href="/SiteSoulCodeJr/#contacts">Contato</a>
        </nav>
      </div>

      <a href="/SiteSoulCodeJr/processo-seletivo">
      {width > 800 ? 
        <button id="process-btn" className="botao nav-bar-btn">
          <p className="transicao1">Processo seletivo &#129125;</p>
          <p className="transicao2">Processo seletivo &#129122;</p>
        </button> : <button id="process-btn" className="botao nav-bar-btn">
          <p className="transicao1"> &#129125;</p>
          <p className="transicao2"> &#129122;</p>
        </button>}
      </a>

      {/*<a href="/SiteSoulCodeJr/processo-seletivo">
        <button id="process-btn" className="primary-btn">
          {width > 800 ? <p>Processo Seletivo</p> : ""}
          <MdArrowOutward />
        </button>
      </a>
      */}
    </div>
  );
};

export default Navbar;
