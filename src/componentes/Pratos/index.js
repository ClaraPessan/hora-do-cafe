import { useContext } from 'react'
import { useCarrinhoContext } from '../../contexts/Carrinho'
import { UsuarioContext } from '../../contexts/Usuario'
import styles from './Pratos.module.scss'

export default function Pratos({ id, nome, valor, foto, unidade }) {
    const { carrinho, adicionarProduto, removerProduto, valorTotal } = useCarrinhoContext();
    const { saldo } = useContext(UsuarioContext);
    const itemNoCarrinho = carrinho.find(item => item.id === id);

    return (
        <div className={styles.pratos}>
            <div className={styles.pratos__principal}>
                <img src={foto} alt={nome}/>
                <h4>{nome} - R$ {valor.toFixed(2)}</h4>
            </div>
            <div className={styles.pratos__quantidade}>
                <button
                    className={styles.diminuir} 
                    disabled={!itemNoCarrinho || itemNoCarrinho.quantidade === 0}
                    onClick={() => removerProduto(id)}
                >
                    -
                </button>
                {itemNoCarrinho?.quantidade || 0}
                <button
                    className={styles.aumentar}
                    disabled={saldo < valor || saldo < valorTotal}
                    onClick={() => adicionarProduto({
                        id,
                        nome,
                        foto,
                        valor,
                        unidade
                    })}
                >
                    +
                </button>
            </div>
        </div>
    )
}