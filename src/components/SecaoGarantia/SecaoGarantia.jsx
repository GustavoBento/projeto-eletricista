import "./SecaoGarantia.css";
import imgGarantia from "../assets/garantia.png";
import BotaoWhats from "../BotaoWhats/BotaoWhats";

export default function SecaoGarantia() {
  return (
    <section className="secao-garantia">
      <div className="secao-garantia-container">
          <img src={imgGarantia} alt="um logo de uma garantia" />
          <h3>Garantia de 90 dias</h3>
          <p>
            Sim, meus serviços tem uma garantia de 90 dias. <br /> Ou seja, caso dê algum
            problema nesse prazo, <br /> a reparação e correção será de forma gratuita.
          </p>
          <BotaoWhats texto="me chame no whatsapp" />
      </div>
    </section>
  );
}
