import React from 'react';

import Item from "./Item";
import { movieDetailsNavItems } from "../../../constants/movieDetails";
import styles from './Sidenav.module.scss';

const Sidenav = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                {movieDetailsNavItems.map((item, index) => (
                   <Item
                       item={item}
                       key={index}
                   />
                ))}
            </ul>
        </div>
    );
};

export default Sidenav;