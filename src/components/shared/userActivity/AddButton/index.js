import React from 'react';

import { useSelector } from "react-redux";
import classNames from "classnames";
import { AiOutlinePlusSquare, AiFillCheckSquare } from "react-icons/all";

import StyledTooltip from "../../StyledTooltip";
import * as UserSelectors from "../../../../store/shared/user/User.selectors";
import styles from './AddButton.module.scss';

const AddButton = ({
    onClick,
    active
}) => {
    const id = useSelector(UserSelectors.id);

    const handleClick = () => {
        if (!id) {
            // @todo: add snackbar saying that the user has to login to add movie to watchlist
        } else {
            onClick();
        }
    };

    return (
        <StyledTooltip
            title={active ? 'Remove from watchlist' : 'Add to watchlist'}
            placement='top'
        >
            <div
                className={styles.addBtn}
                onClick={handleClick}
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