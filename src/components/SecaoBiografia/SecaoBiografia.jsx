import "./SecaoBiografia.css";
import imgPessoa from "../assets/pessoa2.png";
import imgTopo from "../assets/topo.png";

export default function SecaoBiografia() {
  return (
    <section className="secao-biografia">
      <div className="secao-biografia-imagem">
        <img src={imgPessoa} alt="uma imagem de uma pessoa" />
      </div>
      <div className="secao-biografia-conteudo">
        <h4>marcelo henrique </h4>
        <p>
          Me chamo Marcelo, atuo como Eletricista em Salvador a mais de 10 anos
          e busco sempre ser o melhor da capital e região, realizo diversos
          tipos de serviços e tenho uma boa experiência profissional na área,
          sendo assim, estou sempre pronto para realizar o serviço de forma
          exemplar, segura, eficiente e de acordo com as suas preferências.
          Precisando de um eletricista, estou pronto para lhe atender.
        </p>
        <a href="#menu-inicio">
            <img src={imgTopo} alt="icone do topo" />{" "}
          </a>
      </div>
    </section>
  );
}
