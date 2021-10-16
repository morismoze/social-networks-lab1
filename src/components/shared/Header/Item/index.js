import React from 'react';

import { useHistory } from "react-router-dom";
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

    const history = useHistory();

    const activeTab = useSelector(HeaderSelectors.activeTab);

    const Icon =AntDesignIcons[icon];

    const onClick = () => {
        switch (id) {
            case 1: {
                history.push('/top-rated');
                break;
            }
            case 2: {
                history.push('/recommended');
                break;
            }
            case 3: {
                history.push('/all-movies');
                break;
            }
        }
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