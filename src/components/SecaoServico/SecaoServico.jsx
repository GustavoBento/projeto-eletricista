import "./SecaoServico.css";
import BotaoWhats from "../BotaoWhats/BotaoWhats";
import imgSecaoServico from "../assets/eletricista2.png"

export default function SecaoServico() {
  return (
    <section className="secao-servico">
      <div className="secao-servico-conteudo">
        <h6>meu compromisso</h6>
        <h2>
          serviço de <span>alto padrão e <br /> com o melhor preço do <br /> mercado.</span>{" "}
        </h2>
        <p>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          Pague em até 5x no cartão
        </p>
        <p>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          Atendimento 24 horas em Salvador
        </p>
        <p>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          Orçamento em até 4 horas
        </p>
        <p>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          Desconto á vista
        </p>

        <BotaoWhats texto={"me chame no whatsapp"} />
      </div>
      <div className="secao-servico-imagem">
        <img src={imgSecaoServico} alt="imagem de um eletrecista" />
      </div>
    </section>
  );
}
