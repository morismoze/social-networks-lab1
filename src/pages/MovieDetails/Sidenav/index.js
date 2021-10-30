import React, {useState} from 'react';

import Item from "./Item";
import { movieDetailsNavItems } from "../../../constants/movieDetails";
import styles from './Sidenav.module.scss';

const Sidenav = () => {
    const [ activeTab, setActiveTab ] = useState(0);

    const handleOnClick = (id) => {
        setActiveTab(id);
    };

    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                {movieDetailsNavItems.map((item, index) => (
                   <Item
                       item={item}
                       index={index}
                       activeTab={activeTab}
                       onClick={handleOnClick}
                       key={index}
                   />
                ))}
            </ul>
        </div>
    );
};

export default Sidenav;