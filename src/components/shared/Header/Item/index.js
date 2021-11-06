import React, { useRef, useState } from 'react';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import Dropdown from "../Dropdown";
import * as HeaderSelectors from "../../../../store/shared/navigation/Navigation.selectors";
import { setActiveTab } from "../../../../store/shared/navigation/Navigation.slice";
import styles from './Item.module.scss';

const Item = ({
    id,
    name,
    dropdown
}) => {
    const dispatch = useDispatch();

    const itemRef = useRef();

    const [ isDropdownActive, setIsDropdownActive ] = useState(false);

    const activeTab = useSelector(HeaderSelectors.activeTab);

    const handleOnClick = () => {
        dispatch(setActiveTab(id));
    };

    const handleOnMouseOver = () => {
        setIsDropdownActive(true);
    };

    const handleOnMouseLeave = () => {
        setIsDropdownActive(false);
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
                onMouseOver={dropdown && handleOnMouseOver}
                ref={itemRef}
            >
                <span className={styles.item__name}>{name}</span>
            </Link>
            <Dropdown
                isActive={isDropdownActive}
                onMouseOver={handleOnMouseOver}
                onMouseLeave={handleOnMouseLeave}
                itemRef={itemRef}
                items={dropdown}
            />
        </>
    );
};

export default Item;