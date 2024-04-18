import "./SecaoRisco.css";
import imagemSecaoRisco from './assets/perigos.png';


export default function SecaoRisco() {
  return (
    <section className="secao-risco">
      <div className="secao-risco-conteudo">
        <h2>
          Você sabia que sua família corre sério risco de vida com uma
          instalação antiga ou mal feita?
        </h2>
        <p>
          É muito comum acontecer graves acidentes em residências cuja a
          instalaçao elétrica é antiga ou foi mal instalada, seja pelo morador
          ou um profissional.
        </p>
        <p>
          Por incrivel que pareça, uma instalação elétrica requer certos
          cuidados e uma ótima execução, para assim, ela ser considerada ideal
          para uso e que tenha uma boa duração á longo prazo.
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
          Sendo assim, a partir de hoje você encontrou o profissional ideal para
          realizar a manutenção ou instalação da sua rede elétrica, evitando
          todos os problemas acima.
        </p>
        <p>
          Trabalho como Eletricista em Salvador e Região. Aguardo sua ligação!
        </p>
      </div>
      <div className="secao-risco-imagem">
        <img src={imagemSecaoRisco} alt="minha imagem" />
      </div>
    </section>
  );
}
