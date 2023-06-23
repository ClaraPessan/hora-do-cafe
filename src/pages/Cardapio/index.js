import { useContext } from "react";
import Container from "../../componentes/Container";
import Pratos from "../../componentes/Pratos";
import opcoes from './cardapio.json'
import styles from './Cardapio.module.scss'
import { UsuarioContext } from "../../contexts/Usuario";

export default function Cardapio() {
    const {nome, saldo = 0} = useContext(UsuarioContext)

    return (
        <section className={styles.cardapio}>
            <Container>
                <div className={styles.cardapio__informacoes}>
                    <p>Olá, {nome}!</p>
                    <p>Saldo: R${saldo.toFixed(2)}</p>
                </div>
                {opcoes.map(opcao => (
                    <Pratos 
                        key={opcao.id} 
                        {...opcao}
                    />
                ))}
            </Container>
        </section>
    )
}