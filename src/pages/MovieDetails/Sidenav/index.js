import React from 'react';

import { movieDetailsNavItems } from "../../../constants/movieDetails";
import styles from './Sidenav.module.scss';

const Sidenav = ({

}) => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                {movieDetailsNavItems.map((item) => (
                   <li className={styles.sidebar__listItem}>
                       <a
                           href={`#${item}`}
                           className={styles.sidebar__item}
                       >
                           {item}
                       </a>
                   </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidenav;