import logo from './logo.png'
import styles from './Cabecalho.module.scss'
import { BsCart } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

export default function Cabecalho() {
    const navigate = useNavigate()

    return (
        <header className={styles.cabecalho}>
            <img 
                src={logo} 
                alt="Logo café" 
                onClick={() => navigate('/')}
            />
            <ul className={styles.cabecalho__opcoes}>
                <li>
                    <Link to="/login" className={styles.cabecalho__link}>
                        Ir comprar
                    </Link>
                </li>
                <li>
                    <Link to="/carrinho" className={styles.cabecalho__link}>                    
                        <BsCart size={22}/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}