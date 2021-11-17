import React from 'react';

import { Link } from "react-router-dom";
import classNames from "classnames";
import * as AIIcons from "react-icons/all";

import styles from './Item.module.scss';

const Item = ({
    item,
    activeTab,
    onClick
}) => {
    const Icon = AIIcons[item.icon];

    return (
        <Link
            to={item.id}
            onClick={() => onClick(item.id)}
            className={classNames(
                styles.item,
                { [styles['item--active']]: activeTab === item.id }
            )}
        >
            <div className={styles.item__iconWrapper}>
                <Icon
                    size={15}
                    className={styles.item__icon}
                />
            </div>
            <span className={styles.item__name}>{item.name}</span>
        </Link>
    );
};

export default Item;