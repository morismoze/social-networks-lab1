import React from 'react';

import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/all";

import styles from './AdvancedOptionsButton.module.scss';
import {useWindowSize} from "../../../../hooks/useWindowSize";

const AdvancedOptionsButton = ({
    isOpen,
    onClick
}) => {
    const { width } = useWindowSize();

    if (width <= 576) {
        return (
            <div
                onClick={onClick}
                className={styles.mobileAdvancedOptionBtn}
            >
                <span className={styles.mobileAdvancedOptionBtn__text}>
                    {!isOpen ? 'Show filter options' : 'Hide filter options'}
                </span>
            </div>
        );
    }

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