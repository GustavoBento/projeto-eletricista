import { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <header className="cabecalho">
      <div className="menu-mobile" onClick={() => setMenuOn(!menuOn)}>
        Menu <span className="material-symbols-outlined">menu</span>
      </div>


      <div className={menuOn ? "menu on" : "menu"}>
        <a href="$">início</a>
        <div  id="menu-suspenso">
          <button className="menubtn">
            meus serviços{" "}
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </button>
          <div className="lista-suspensa">
            <a href="$" className="lista-suspensa-item">
              elétrica residencial e comercial
            </a>
            <a href="$" className="lista-suspensa-item">
              manutençaõ elétrica
            </a>
            <a href="$" className="lista-suspensa-item">
              projeto elétrico
            </a>
            <a href="$" className="lista-suspensa-item">
              chuveiro elétrico
            </a>
            <a href="$" className="lista-suspensa-item">
              padrão de energia coelba
            </a>
          </div>
        </div>
        <a href="$">sobre mim</a>
        <a href="$">blog</a>
        <a href="$">contato</a>
        <a href="$">simulador de consumo</a>
      </div>
    </header>
  );
}
