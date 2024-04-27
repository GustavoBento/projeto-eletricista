import "./SecaoResponsabilidade.css";
import imagemEletricista from '../assets/eletricista-lado.png'

export default function SecaoResponsabilidade() {
  return (
    <section className="secao-responsabilidade">
        <div className="secao-responsabilidade-imagem">
            <img src={imagemEletricista} alt="" />
        </div>
      <div className="secao-responsabilidade-conteudo">
          <h3>Servico, qualidade <br /> e responsabilidade</h3>
          <p>
            Meu principal objetivo como um profissional Eletricista em Salvador é
            entregar a máxima segurança, qualidade e responsabilidade. Respeitando
            as normas e boas condutas. Agindo de acordo com as suas necessidades e
            buscando a solução dos seus problemas.
          </p>
      </div>
    </section>
  );
}
