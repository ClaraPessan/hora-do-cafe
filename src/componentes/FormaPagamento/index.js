import { useContext, useMemo } from "react";
import { useCarrinhoContext } from "../../contexts/Carrinho";
import { UsuarioContext } from "../../contexts/Usuario";
import { usePagamento } from "../../contexts/Pagamento";
import styles from './FormaPagamento.module.scss'

export default function FormaPagamento() {
  const { valorTotal = 0 } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const total = useMemo(() => saldo - valorTotal, [saldo, valorTotal]);
  const { formaPagamento, mudarFormaPagamento, tiposPagamento } =
    usePagamento();
  return (
    <section className={styles.pagamentos}>
      <div className={styles.pagamentos__forma}>
        <label htmlFor="formaPagamento">Forma de Pagamento:</label>
        <select
          id="formaPagamento"
          value={formaPagamento.id}
          onChange={(event) => mudarFormaPagamento(event.target.value)}
        >
          {tiposPagamento.map((pagamento) => (
            <option key={pagamento.id} value={pagamento.id}>
              {pagamento.nome}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.pagamentos__valores}>
        <h5>
          Total:
          <strong> R$ {valorTotal.toFixed(2)}</strong>
        </h5>
        <h5>
          Saldo Restante:
          <strong> R$ {total.toFixed(2)}</strong>
        </h5>
        <h5>
          Saldo Inicial:
          <strong> R$ {saldo.toFixed(2)}</strong>
        </h5>
      </div>
    </section>
  );
}
