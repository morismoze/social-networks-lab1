import React, { useState } from 'react';

import Tooltip from '@mui/material/Tooltip';
import { AiFillHeart } from "react-icons/all";

import styles from './Heart.module.scss';
import classNames from "classnames";
import StyledTooltip from "../../StyledTooltip";

const Heart = ({
    onClick
}) => {
    const [ isActive, setIsActive ] = useState(false);

    const handleOnClick = () => {
        onClick();
        setIsActive(!isActive);
    };

    return (
        <StyledTooltip title={!isActive ? 'Like' : 'Dislike'}>
            <div
                className={styles.heartReaction}
                onClick={handleOnClick}
            >
                <AiFillHeart
                    size={25}
                    className={classNames(
                        styles.heartReaction__icon,
                        { [styles.heartReaction__isActive]: isActive }
                    )}
                />
            </div>
        </StyledTooltip>
    );
};

export default Heart;