import React, { useState } from 'react';

import Content from "./Content";
import Arrow from "./Arrow";
import Dots from "./Dots";
import styles from './Carousel.module.scss';

const Carousel = ({
    data
}) => {
    const [ activeIndex, setActiveIndex ] = useState(0);

    const [ translate, setTranslate ] = useState(0);

    const goToPrevSlide = () => {
        if (activeIndex === 0) {
            setActiveIndex(data.length - 1);
            setTranslate((data.length - 1) * 100);
        } else {
            setActiveIndex(activeIndex - 1);
            setTranslate((activeIndex - 1) * 100);
        }
    };

    const goToNextSlide = () => {
        if (activeIndex === data.length - 1) {
            setActiveIndex(0);
            setTranslate(0);
        } else {
            setActiveIndex(activeIndex + 1);
            setTranslate((activeIndex + 1) * 100);
        }
    };

    return (
        <div className={styles.carousel}>
            <Content
                data={data}
                translate={translate}
            />
            <Arrow
                direction='left'
                handleClick={goToPrevSlide}
            />
            <Arrow handleClick={goToNextSlide}/>
            <div className={styles.carousel__dotsWrapper}>
                <Dots
                    images={data}
                    activeIndex={activeIndex}
                />
            </div>
        </div>
    );
};

export default Carousel;