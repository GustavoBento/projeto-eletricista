import Card from '../Card/Card'
import './SecaoCard.css'
import icone1 from '../assets/icone1.png'
import icone2 from '../assets/icone2.png'
import icone3 from '../assets/icone3.png'
import icone4 from '../assets/icone4.png'
import icone5 from '../assets/icone5.png'
import icone6 from '../assets/icone6.png'

export default function SecaoCard() {
    return (
        <section className='secao-card'>
            <h2>Meus serviços de eletricista em salvador</h2>
            <div className='secao-card-lista'>
                <Card 
                    imagem={icone1}
                    destaque="Eletricista"
                    titulo="Residencial"
                    texto="Eletricista Residencial em Salvador com elaboração e execução de projetos elétricos de acordo com todas as normas exigidas pela NBR-5410. Segurança e Qualidade"
                />
                <Card 
                    imagem={icone2}
                    destaque={"Eletricista"}
                    titulo={"Comercial"}
                    texto={"Instalação de qualidade para que o seu negócio receba a carga necessárias para alimentar os equipamentos elétricos e iluminação local, sem cargas desnecessárias."}
                />
                <Card 
                    imagem={icone3}
                    destaque={"Manutenção"}
                    titulo={"Elétrica"}
                    texto={"Manutenção elétrica e correção de cargas em Salvador, incluindo novas ligações, medidor, projetos de entradas, análise de carga instalada, instalação de tomadas, etc."}
                />
            </div>
            <div className='secao-card-lista'>
                <Card 
                    imagem={icone4}
                    destaque={"Projeto"}
                    titulo={"Elétrico"}
                    texto={"Atuo constantemente na elaboração de projetos elétricos em Salvador, seja ele em infraestruturas ou prestação de consultorias técnicas."}
                />
                <Card 
                    imagem={icone5}
                    destaque={"Chuveiro"}
                    titulo={"Elétrico"}
                    texto={"Por mais que seja apenas um chuveiro, é necessário ter cuidado e cautela para realizar a instalação, portanto, contrate um profissional."}
                />
                <Card 
                    imagem={icone6}
                    destaque={"Padrão"}
                    titulo={"Coelba"}
                    texto={"Se você busca por um Eletricista em Salvador que trabalha com Padrão e Normas Exigidas pela Coelba, basta entrar em contato."}
                />
            </div>
        </section>
    )
}