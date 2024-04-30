import './CardBlog.css'


export default function CardBlog({imagem, titulo, texto}) {
    return (
        <div className='card-blog'>
            <img src={imagem} alt="imagem de elétrica" />
            <h4>{titulo}</h4>
            <p>{texto}</p>
            <button>Continuar lendo...</button>
        </div>
    )
}