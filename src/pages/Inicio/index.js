import Carrossel from '../../componentes/Carrossel'
import Titulo from '../../componentes/Titulo'
import styles from './Inicio.module.scss'
import produtos from '../Cardapio/cardapio.json'
import Container from '../../componentes/Container'

export default function Inicio() {
    return(
        <main className={styles.inicio}>
            <Titulo>Cardápio</Titulo>
            <Carrossel produtos={produtos}/>

            <Titulo>Sobre Nós</Titulo>
            <Container>
                <p>
                    Bem-vindo à nossa cafeteria Hora do Café!
                </p> 
                <br/>
                <p>
                    Fundada em 2022, Um estabelecimento dedicado a oferecer uma experiência única para os amantes de café e gastronomia.
                </p>
                <br/>
                <p>
                    Na nossa cafeteria, você encontrará um ambiente acolhedor e convidativo, perfeito para desfrutar de uma pausa tranquila ou para reuniões informais. Nosso menu foi cuidadosamente elaborado para oferecer opções deliciosas e feitas com ingredientes frescos e selecionados. Valorizamos a qualidade dos nossos pratos, buscando proporcionar uma experiência gastronômica única para cada cliente.
                </p>
            </Container>
        </main>
    )
}