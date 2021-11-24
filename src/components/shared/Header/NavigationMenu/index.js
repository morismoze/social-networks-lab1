import React, { useState } from 'react';

import Hamburger from "./Hamburger";
import Menu from "./Menu";
import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navigationMenu}>
            <Hamburger
                isOpen={isOpen}
                toggleMenu={toggleMenu}
            />
            <Menu
                isOpen={isOpen}
                toggleMenu={toggleMenu}
            />
        </div>
    );
};

export default NavigationMenu;