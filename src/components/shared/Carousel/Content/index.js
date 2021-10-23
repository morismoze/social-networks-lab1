import React from 'react';

import Slide from '../Slide/index';

import styles from './Content.module.scss';

const Content = ({
    slides,
    translate,
    transition,
    width
}) => {
    return (
        <div
            className={styles.content}
            style={{
                width: `${width}px`,
                transform: `translateX(-${translate}px)`,
                transition: `transform ease-in-out ${transition}s`
            }}
        >
            {slides.map((item, i) => (
                <Slide
                    item={item}
                    key={item + i}
                />
            ))}
        </div>
    )
}

export default Content;