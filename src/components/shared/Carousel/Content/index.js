import React from 'react';

import Slide from '../Slide/index';

import styles from './Content.module.scss';

const Content = ({
    data,
    translate
}) => {
    return (
        <div
            className={styles.content}
            style={{
                width: `${data.length * 100}%`,
                transform: `translateX(-${translate / data.length}%)`
            }}
        >
            {data.map((item, i) => (
                <Slide
                    item={item}
                    key={i}
                />
            ))}
        </div>
    )
}

export default Content;