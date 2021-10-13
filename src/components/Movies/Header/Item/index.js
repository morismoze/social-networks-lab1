import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import * as AntDesignIcons from 'react-icons/ai';

import * as HeaderSelectors from "../../../../store/shared/navigation/Navigation.selectors";
import { toggleActiveTab } from "../../../../store/shared/navigation/Navigation.slice";
import styles from './Item.module.scss';

const Item = ({
    id,
    name,
    icon
}) => {
    const dispatch = useDispatch();

    const activeTab = useSelector(HeaderSelectors.activeTab);

    const Icon =AntDesignIcons[icon];

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
            <Icon
                size={15}
                className={styles.item__icon}
            />
            <span className={styles.item__name}>{name}</span>
        </div>
    );
};

export default Item;