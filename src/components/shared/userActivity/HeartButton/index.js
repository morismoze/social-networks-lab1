import React from 'react';

import classNames from "classnames";
import { AiFillHeart } from "react-icons/all";

import StyledTooltip from "../../StyledTooltip";
import styles from './HeartButton.module.scss';

const HeartButton = ({
    onClick,
    active
}) => {
    return (
        <StyledTooltip
            title={active ? 'Dislike' : 'Like'}
            placement='top'
        >
            <div
                className={styles.heartBtn}
                onClick={onClick}
            >
                <AiFillHeart
                    size={25}
                    className={classNames(
                        styles.heartBtn__icon,
                        { [styles['heartBtn__icon--active']]: active }
                    )}
                />
            </div>
        </StyledTooltip>
    );
};

export default HeartButton;