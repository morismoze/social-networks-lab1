import React from 'react';

import styles from './Item.module.scss';
import classNames from "classnames";

const Item = ({
    item,
    index,
    activeTab,
    onClick
}) => {
    return (
        <li
            className={styles.listItem}
            onClick={() => onClick(index)}
        >
            <a
                href={`#${item}`}
                className={classNames(
                    styles.listItem__item,
                    { [styles['listItem__item--active']]: activeTab === index }
                )}
            >
                {item}
            </a>
        </li>
    );
};

export default Item;