import React from 'react';

import Poster from "../Poster";
import Sidenav from "./Sidenav";
import styles from './StickySidebar.module.scss';

const StickySidebar = ({
    poster,
    navItems,
    children
}) => {
    return (
        <div className={styles.stickySidenav}>
            <Poster
                {...poster}
            />
            <Sidenav items={navItems}/>
            {children}
        </div>
    );
};

export default StickySidebar;