import React, { useRef } from 'react';

import { Slide } from "@mui/material";

import MenuItem from "./MenuItem";
import styles from './Menu.module.scss';

const Menu = ({
    isOpen,
    toggleMenu
}) => {
    const menuItemsRef = useRef();

    const handleClick = () => {
        toggleMenu();
    };

    return (
        <Slide
            in={isOpen}
            timeout={300}
            unmountOnExit
        >
            <div className={styles.menu}>
                <div
                    ref={menuItemsRef}
                    className={styles.menu__items}
                >
                    <MenuItem
                        to='/'
                        onClick={handleClick}
                        text='Home'
                        timeout={600}
                        containerRef={menuItemsRef}
                    />
                    <MenuItem
                        to='/movies'
                        onClick={handleClick}
                        text='Movies'
                        timeout={650}
                        containerRef={menuItemsRef}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default Menu;