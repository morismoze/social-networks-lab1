import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__heroImgWrapper}>
                <div className={styles.hero__heroImgShade}/>
                <div className={styles.hero__heroImg}/>
            </div>
        </section>
    );
};

export default Hero;