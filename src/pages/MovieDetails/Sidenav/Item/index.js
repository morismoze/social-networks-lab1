import React from 'react';

import styles from './Item.module.scss';

const Item = ({
    item
}) => {
    return (
        <li className={styles.listItem}>
            <a
                href={`#${item}`}
                className={styles.listItem__item}
            >
                {item}
            </a>
        </li>
    );
};

export default Item;