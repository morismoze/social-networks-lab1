import React from 'react';

import { Link } from "react-router-dom";

import styles from './Item.module.scss';

const Item = ({
    id,
    path,
    name
}) => {
    return (
        <Link
            to={path}
            className={styles.item}
        >
            <span className={styles.item__name}>{name}</span>
        </Link>
    );
};

export default Item;