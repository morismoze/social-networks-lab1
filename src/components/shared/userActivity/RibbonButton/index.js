import React from 'react';

import styles from './RibbonButton.module.scss';
import classNames from "classnames";

import StyledTooltip from "../../StyledTooltip";

const RibbonButton = ({
    onClick,
    active,
    className
}) => {
    return (
        <StyledTooltip
            title={active ? 'Remove from watchlist' : 'Add to watchlist'}
            placement='top'
        >
            <div
                className={classNames(
                    styles.ribbon,
                    className,
                    { [styles['ribbon--active']]: active }
                )}
                onClick={onClick}
            >
                <span className={styles.ribbon__text}>+</span>
            </div>
        </StyledTooltip>
    );
};

export default RibbonButton;