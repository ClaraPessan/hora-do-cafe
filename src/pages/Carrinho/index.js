import Container from "../../componentes/Container";
import Titulo from '../../componentes/Titulo'
import Pratos from '../../componentes/Pratos'
import { useContext, useMemo } from 'react'
import { UsuarioContext } from '../../contexts/Usuario';
import { useCarrinhoContext } from '../../contexts/Carrinho';
import styles from "./Carrinho.module.scss";
import FormaPagamento from "../../componentes/FormaPagamento";
import Botao from "../../componentes/Botao";

export default function Carrinho() {
    const { carrinho, quantidadeCarrinho, verificaSaldo, valorTotal = 0} = useCarrinhoContext()
    const { saldo = 0 } = useContext(UsuarioContext)
    const saldoRestante = useMemo(() => saldo - valorTotal, [saldo, valorTotal])
    return (
        <section className={styles.carrinho}>
            <Container>
                <Titulo>Carrinho</Titulo>
                    {carrinho.map((prato) => (
                        <Pratos
                            {...prato}
                            key={prato.id}
                        />
                    ))}
                    <FormaPagamento/>
                    <Botao
                        onClick={() => {
                            verificaSaldo(saldoRestante)
                        }}
                        disabled={quantidadeCarrinho === 0}
                        >
                        Comprar
                    </Botao>
            </Container>
        </section>
    )
}