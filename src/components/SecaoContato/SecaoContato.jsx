import BotaoWhats from "../BotaoWhats/BotaoWhats";
import Formulario from "../Formulario/Formulario";
import "./SecaoContato.css";

export default function SecaoContato() {
  return (
    <section className="secao-contato">
      <div className="secao-contato-conteudo">
        <h3>
          entre em <span>contato</span> comigo{" "}
        </h3>
        <p>
          Se interessou pelos meus serviços? Você pode entrar em contato comigo,
          através desses canais de atendimento.
        </p>
        <h4 className="secao-contato-conteudo-texto">
          <span className="material-symbols-outlined">location_on</span>
          Localização
        </h4>
        <p>
          Rua João Avelange S/N <br />
          Próximo a Escola Politécnica de Salvador <br />
          Salvador, Bahia <br />
          48500-000
        </p>

        <h4>
          <span className="material-symbols-outlined">call</span>
          Telefone
        </h4>
        <p>
          (00) 9 9885-0099 <br />
          (00) 9 9885-0099
        </p>

        <h4>
          <span className="material-symbols-outlined">alternate_email</span>
          E-mail
        </h4>
        <p id="paragrafo-email" >odesigner@umdesenvolvedoriniciante.com</p>
        <BotaoWhats texto={"me chame no whatsapp"} className={"secao-contato-botao"} />
      </div>
      <div className="secao-contato-formulario">
        <h3>
          <span>agende </span> uma ligação
        </h3>
        <p>
          Quer falar mas está sem tempo? Agende agora mesmo uma ligação e eu
          irei te ligar no horário selecionado.
        </p>
        <Formulario
          label={"nome"}
          nomeLabel={"Nome:"}
          type={"text"}
          placeholder={"Coloque aqui o seu nome..."}
        />
        <Formulario
          label={"telefone"}
          nomeLabel={"Telefone para contato:"}
          type={"tel"}
          placeholder={"Coloque o número com DDD..."}
        />
        <Formulario
          label={"horario"}
          nomeLabel={"Melhor horário:"}
          type={"text"}
          placeholder={"Qual o melhor horário que eu posso te ligar?"}
        />
        <button>agendar ligação</button>
      </div>
    </section>
  );
}
