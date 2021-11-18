import React from 'react';

import classNames from "classnames";
import { AiOutlinePlusSquare, AiFillCheckSquare } from "react-icons/all";

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
                {!active ? (
                    <AiOutlinePlusSquare
                        size={25}
                        className={styles.addBtn__icon}
                    />
                ) : (
                    <AiFillCheckSquare
                        size={25}
                        className={classNames(
                            styles.addBtn__icon,
                            styles.addBtn__addedIcon
                        )}
                    />
                )}
            </div>
        </StyledTooltip>
    );
};

export default AddButton;