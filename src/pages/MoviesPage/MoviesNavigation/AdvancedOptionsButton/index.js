import React from 'react';

import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/all";

import styles from './AdvancedOptionsButton.module.scss';

const AdvancedOptionsButton = ({
    isOpen,
    onClick
}) => {
    return (
        <>
            {isOpen ? (
                <AiOutlineShrink
                    size={27}
                    onClick={onClick}
                    className={styles.advancedOptionBtn}
                />
            ) : (
                <AiOutlineExpandAlt
                    size={27}
                    onClick={onClick}
                    className={styles.advancedOptionBtn}
                />
            )}
        </>
    );
};

export default AdvancedOptionsButton;