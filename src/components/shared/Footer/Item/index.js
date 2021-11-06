import React from 'react';

import { Link } from "react-router-dom";

import styles from './Item.module.scss';

const Item = ({
    id,
    name
}) => {
    return (
        <Link
            to={id === 'home' ? '/' : `/${id}`}
            className={styles.item}
        >
            <span className={styles.item__name}>{name}</span>
        </Link>
    );
};

export default Item;