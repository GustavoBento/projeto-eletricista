import "./SecaoBlog.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import CardBlog from "../CardBlog/CardBlog";

export default function SecaoBlog() {
  return (
    <section className="secao-blog">
      <h3>
        acesse o nosso <span> blog </span>{" "}
      </h3>
      <div className="secao-blog-card">
          <CardBlog
            imagem={card1}
            titulo="Manutenção elétrica em salvador: Quanto vou gastar em média"
            texto="Nesse artigo irei te mostrar quanto custa em média para realizar uma manutenção elétrica aqui em Salvador e também regiões próximas á cidade."
          />
          <CardBlog
            imagem={card2}
            titulo="Aparelho para economizar energia: Cuidado!"
            texto="Aparelho para economizar energia, afinal, funciona ou não funciona? A respostas é simples, não funciona! Confira agora mesmo nesse artigo completo."
          />
          <CardBlog
            imagem={card3}
            titulo="Fuga de corrente elétrica: Saiba como descobrir e acabar"
            texto="A fuga de corrente elétrica é um dos principais fatores de aumento repentino na conta de luz, afinal, ela é invisível. E evite todo esse problema com exatidão."
          />
      </div>
    </section>
  );
}
