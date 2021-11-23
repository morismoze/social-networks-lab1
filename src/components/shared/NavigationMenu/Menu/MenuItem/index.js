import React from 'react';

import { Link } from "react-router-dom";
import { Slide } from "@mui/material";

import styles from './MenuItem.module.scss';

const MenuItem = ({
    to,
    onClick,
    text,
    timeout,
    containerRef
}) => {
    return (
        <Slide
            in={true}
            timeout={timeout}
            container={containerRef.current}
        >
            <div
                className={styles.menuItem}
            >
                <Link
                    to={to}
                    onClick={onClick}
                    className={styles.menuItem__link}
                >
                    {text}
                </Link>
            </div>
        </Slide>
    );
};

export default MenuItem;