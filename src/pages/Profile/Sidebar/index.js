import React from 'react';

import { SIDEBAR_NAV_ITEMS } from "../../../constants/profile";
import styles from './Sidebar.module.scss';
import Item from "./Item";

const Sidebar = ({
    activeTab,
    setActiveTab
}) => {
    return (
        <div className={styles.sidebar}>
            <span className={styles.sidebar__title}>Menu</span>
            <ul className={styles.sidebar__list}>
                {SIDEBAR_NAV_ITEMS.map((item, index) => (
                    <li className={styles.sidebar__listItem}>
                        <Item
                            item={item}
                            activeTab={activeTab}
                            onClick={setActiveTab}
                            key={item.id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;