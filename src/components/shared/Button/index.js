import React from 'react';

import styles from './Button.module.scss';
import classNames from "classnames";

const Button = ({
    onClick,
    fill = true,
    text
}) => {
    const handleOnClick = () => {
        onClick();
    };

    return (
        <button
            onClick={handleOnClick}
            className={classNames(
                styles.detailsButton,
                { [styles.noFill]: !fill }
            )}
        >
            {text}
        </button>
    );
};

export default Button;