import React, { useRef } from 'react';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import * as NavigationSelectors from "../../../../store/shared/navigation/Navigation.selectors";
import styles from './Item.module.scss';

const Item = ({
    id,
    path,
    name
}) => {
    const itemRef = useRef();

    const activeTab = useSelector(NavigationSelectors.activeTab);

    return (
        <>
            <Link
                to={path}
                className={classNames(
                    styles.item,
                    { [styles.active]: activeTab === id }
                )}
                ref={itemRef}
            >
                <span className={styles.item__name}>{name}</span>
            </Link>
        </>
    );
};

export default Item;