import CardBlog from "../CardBlog/CardBlog";
import "./SecaoClientes.css";
import imgEdineuza from "../assets/edineuza.png";
import imgMarcio from "../assets/marcio.png";
import imgVanessa from "../assets/vanessa.png";
import imgMarcela from "../assets/marcela.png";
import imgMauricio from "../assets/mauricio.png";
import imgFernando from "../assets/fernando.png";

export default function SecaoClientes() {
  return (
    <section className="secao-clientes">
      <h3>clientes que confiaram em meus serviços</h3>
      <div className="secao-clientes-card">
        <CardBlog
          imagem={imgEdineuza}
          titulo="Edineuza"
          texto="Sem duvidas um dos melhores Eletricista de Salvador. Deixou absolutamente tudo organizado e sem nenhum problema. Com um preço acessível e de acordo com o que o mercado pede. Recomendo!"
        />
        <CardBlog
          imagem={imgMarcio}
          titulo="Marcio"
          texto="Depois de receber a indicação de alguns amigos através do Facebook, resolvi contratar o Marcelo e não me arrependo. Profissional foi rápido e ágil na solução do meu problema.

"
        />
        <CardBlog
          imagem={imgVanessa}
          titulo="Vanessa"
          texto="Orgulho em dizer que em Salvador tem um ótimo eletricista. Estava com um problema urgente e ele veio na minha casa em pleno Domingo corrigir um problema que deu na fiação do ar condicionado.

"
        />
      </div>
      <div className="secao-clientes-card">
        <CardBlog
          imagem={imgMarcela}
          titulo="Marcela"
          texto="Um profissional exemplar, criativo e disposto a fazer tudo ao seu alcance para entregar o melhor serviço. Recomendo."
        />
        <CardBlog
          imagem={imgMauricio}
          titulo="Mauricio"
          texto="Como minha casa era um pouco antiga, contrarei o Marcelo para refazer toda a elétrica, o profissional me entregou tudo funcionando e o serviço foi rápido."
        />
        <CardBlog
          imagem={imgFernando}
          titulo="Fernando"
          texto="Problema foi resolvido rapidamente e o profissional ainda me deu um desconto á vista, recomendo demais."
        />
      </div>
    </section>
  );
}
