import React from 'react';
import Slider from 'react-slick';
import styles from './Carrossel.module.scss'

function Carrossel({ produtos }) {
    const configuracoes = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...configuracoes} className={styles.carrossel_container}>
            {produtos.map((produto) => (
                <div key={produto.id} className={styles.carrossel}>
                    <img src={produto.foto} alt={produto.nome} />
                    <p>{produto.nome}</p>
                </div>
            ))}
        </Slider>
    );
}

export default Carrossel;

