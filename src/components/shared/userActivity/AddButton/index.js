import React from 'react';

import classNames from "classnames";
import { AiTwotonePlusSquare } from "react-icons/all";

import StyledTooltip from "../../StyledTooltip";
import styles from './AddButton.module.scss';

const AddButton = ({
    onClick,
    active
}) => {
    return (
        <StyledTooltip
            title={active ? 'Remove from watchlist' : 'Add to watchlist'}
            placement='top'
        >
            <div
                className={styles.addBtn}
                onClick={onClick}
            >
                <AiTwotonePlusSquare
                    size={25}
                    className={classNames(
                        styles.addBtn__icon,
                        { [styles['addBtn__icon--active']]: active }
                    )}
                />
            </div>
        </StyledTooltip>
    );
};

export default AddButton;