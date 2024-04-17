import BotaoWhats from "../BotaoWhats/BotaoWhats";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="secao-banner">
          <h2>o seu eletricista em salvador!</h2>
          <p>
            Serviço de Eletricista{" "}
            <span className="destaque-amarelo">Residencial</span>,{" "}
            <span className="destaque-amarelo">Predial</span> e{" "}
            <span className="destaque-amarelo">Comercial</span>.
          </p>
          <p>
            Com excelência, preço acessível e profissionalismo em Salvador e Região.
          </p>
          <BotaoWhats texto={"me chame no whatsapp"} />
      </div>
    </section>
  );
}
