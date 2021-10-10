import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import * as HeaderSelectors from "../redux/Header.selectors";
import { toggleActiveTab } from "../redux/Header.slice";
import styles from './Item.module.scss';

const Item = ({
    id,
    name
}) => {
    const dispatch = useDispatch();

    const activeTab = useSelector(HeaderSelectors.activeTab);

    const onClick = () => {
        dispatch(toggleActiveTab({ id: id }));
    };

    return (
        <div
            className={classNames(
                styles.item,
                { [styles.active]: activeTab === id }
            )}
            onClick={onClick}
        >
            <span className={styles.item__name}>{name}</span>
        </div>
    );
};

export default Item;