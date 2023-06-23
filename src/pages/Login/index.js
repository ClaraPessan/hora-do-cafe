import { useNavigate } from "react-router-dom";
import Botao from "../../componentes/Botao";
import Container from "../../componentes/Container";
import Input from "../../componentes/Inputs";
import Label from "../../componentes/Label";
import Titulo from "../../componentes/Titulo";
import styles from './Login.module.scss'
import { UsuarioContext } from "../../contexts/Usuario";
import { useContext } from "react";

export default function Login() {
    const navigate = useNavigate()
    const {nome, setNome, saldo, setSaldo} = useContext(UsuarioContext)

    return (
        <main className={styles.login}>
            <Titulo>Seja Bem-Vindo!</Titulo>
            <Container>
                <section className={styles.login__container_form}>
                    <div className={styles.login__form}>
                        <Label>Nome:</Label>
                        <Input 
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            maxLength="12"
                            type="text"
                        />
                    </div>
                    <div className={styles.login__form}>
                        <Label>Saldo:</Label>
                        <Input 
                            value={saldo}
                            onChange={(event) => setSaldo(Number(event.target.value))}
                            type="number"
                        />
                    </div>
                    <Botao onClick={() => navigate('/cardapio')}>
                        Continuar
                    </Botao>
                </section>
            </Container>
        </main>
    )
}