import React from 'react';

import { Link } from "react-router-dom";

import styles from './Item.module.scss';

const Item = ({
    id,
    value,
    onClick
}) => {
    const handleOnClick = () => {
        onClick();
    }

    return (
        <Link
            to={`/movies/${id}`}
            onClick={handleOnClick}
            className={styles.item}
        >
            {value}
        </Link>
    );
};

export default Item;