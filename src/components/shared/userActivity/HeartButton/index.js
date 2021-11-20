import React from 'react';

import { useSelector } from "react-redux";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/all";

import StyledTooltip from "../../StyledTooltip";
import * as UserSelectors from "../../../../store/shared/user/User.selectors";
import styles from './HeartButton.module.scss';

const HeartButton = ({
    onClick,
    active
}) => {
    const id = useSelector(UserSelectors.id);

    const handleClick = () => {
        if (!id) {
            // @todo: add snackbar saying that the user has to login to like movies
        } else {
            onClick();
        }
    };

    return (
        <StyledTooltip
            title={active ? 'Dislike' : 'Like'}
            placement='top'
        >
            <div
                className={styles.heartBtn}
                onClick={handleClick}
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