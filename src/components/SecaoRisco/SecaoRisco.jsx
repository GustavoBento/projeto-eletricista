import "./SecaoRisco.css";
import imagemSecaoRisco from "../assets/perigos.png";

export default function SecaoRisco() {
  return (
    <section className="secao-risco">
      <div className="secao-risco-conteudo">
        <h2>
          Você sabia que sua família corre <br />
          sério risco de vida com uma <br />
          instalação antiga ou <br />
          mal feita?
        </h2>
        <p>
          É muito comum acontecer graves acidentes em residências <br />
          cuja a instalaçao elétrica é antiga ou foi mal instalada, <br /> seja
          pelo morador ou um profissional.
        </p>
        <p>
          Por incrivel que pareça, uma instalação elétrica requer <br /> certos
          cuidados e uma ótima execução, para assim, ela <br /> ser considerada
          ideal para uso e que tenha uma boa duração <br /> á longo prazo.
        </p>
        <p>As vantagens são imensas, como por exemplo:</p>
        <p>
          1. Economizar Energia; <br />
          2. Evitar curto circuito; <br />
          3. Evitar acidentes domésticos; <br />
          4. Maior facilidade de utilização; <br />
          5. Sua família fica protegida.
        </p>
        <p>
          Sendo assim, a partir de hoje você encontrou o profissional <br /> ideal para
          realizar a manutenção ou instalação da sua <br /> rede elétrica, evitando
          todos os problemas acima.
        </p>
        <p>
          Trabalho como Eletricista em Salvador e Região. <br /> Aguardo sua ligação!
        </p>
      </div>
      <div className="secao-risco-imagem">
        <img src={imagemSecaoRisco} alt="minha imagem" />
      </div>
    </section>
  );
}
