import React from 'react';

import Item from "./Item";
import { SIDEBAR_NAV_ITEMS } from "../../../constants/profile";
import styles from './Sidebar.module.scss';

const Sidebar = ({
    activeSidebarTab,
    setActiveSidebarTab
}) => {
    return (
        <div className={styles.sidebar}>
            <span className={styles.sidebar__title}>Menu</span>
            <ul className={styles.sidebar__list}>
                {SIDEBAR_NAV_ITEMS.map((item, index) => (
                    <li
                        className={styles.sidebar__listItem}
                        key={index}
                    >
                        <Item
                            item={item}
                            activeTab={activeSidebarTab}
                            onClick={setActiveSidebarTab}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;