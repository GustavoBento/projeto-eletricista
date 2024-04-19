import './Card.css'


export default function Card({imagem, titulo, texto, destaque}) {
    return(
        <div className='card'>
            <img src={imagem} alt="icone" />
            <h3> <span> {destaque} </span> {titulo} </h3>
            <p> {texto} </p>
            <button>
                <a href="$">
                <span className="material-symbols-outlined">arrow_forward</span>
                    Saiba Mais
                </a>
            </button>
        </div>
    )
}