import React, { useEffect, useRef } from 'react';

import { useSelector } from "react-redux";
import { Slide } from "@mui/material";

import MenuItem from "./MenuItem";
import * as UserSelectors from '../../../../../store/shared/user/User.selectors';
import styles from './Menu.module.scss';

const Menu = ({
    isOpen,
    toggleMenu
}) => {
    const menuItemsRef = useRef();

    const userId = useSelector(UserSelectors.id);

    const handleClick = () => {
        toggleMenu();
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }, [isOpen]);

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
                        to='/movies/top-rated'
                        onClick={handleClick}
                        text='Movies'
                        timeout={650}
                        containerRef={menuItemsRef}
                    />
                    <MenuItem
                        to={userId ? '/profile/personal-information' : '/auth'}
                        onClick={handleClick}
                        text={userId ? 'Profile' : 'Sign In'}
                        timeout={650}
                        containerRef={menuItemsRef}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default Menu;