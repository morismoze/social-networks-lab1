import React, { useRef } from 'react';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import * as HeaderSelectors from "../../../../store/shared/navigation/Navigation.selectors";
import { setActiveTab } from "../../../../store/shared/navigation/Navigation.slice";
import styles from './Item.module.scss';

const Item = ({
    id,
    name
}) => {
    const dispatch = useDispatch();

    const itemRef = useRef();

    const activeTab = useSelector(HeaderSelectors.activeTab);

    const handleOnClick = () => {
        dispatch(setActiveTab(id));
    };

    return (
        <>
            <Link
                to={id === 'home' ? '/' : `/${id}`}
                className={classNames(
                    styles.item,
                    { [styles.active]: activeTab === id }
                )}
                onClick={handleOnClick}
                ref={itemRef}
            >
                <span className={styles.item__name}>{name}</span>
            </Link>
        </>
    );
};

export default Item;