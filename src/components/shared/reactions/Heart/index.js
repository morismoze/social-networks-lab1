import React from 'react';

import classNames from "classnames";
import { AiFillHeart } from "react-icons/all";

import StyledTooltip from "../../StyledTooltip";
import styles from './Heart.module.scss';

const Heart = ({
    onClick,
    active
}) => {
    return (
        <StyledTooltip title={active ? 'Like' : 'Dislike'}>
            <div
                className={styles.heartReaction}
                onClick={onClick}
            >
                <AiFillHeart
                    size={25}
                    className={classNames(
                        styles.heartReaction__icon,
                        { [styles['heartReaction__icon--active']]: active }
                    )}
                />
            </div>
        </StyledTooltip>
    );
};

export default Heart;