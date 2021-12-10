import React from 'react';

import { AiFillControl, AiOutlineControl } from "react-icons/all";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import styles from './AdvancedOptionsButton.module.scss';

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
                <AiFillControl
                    size={30}
                    onClick={onClick}
                    className={styles.advancedOptionBtn}
                />
            ) : (
                <AiOutlineControl
                    size={30}
                    onClick={onClick}
                    className={styles.advancedOptionBtn}
                />
            )}
        </>
    );
};

export default AdvancedOptionsButton;