import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "@mui/material";
import { AiOutlineLogout } from "react-icons/all";
import classNames from "classnames";

import Item from "./Item";
import User from "./User";
import Logo from "../Logo";
import Menu from "../../Menu";
import Weather from "../../Weather";
import * as UserSelectors from "../../../store/shared/user/User.selectors";
import { actions as userActions } from "../../../store/shared/user/User.actions";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { storeUserInfo } from "../../../store/shared/user/User.slice";
import { toggleLoading } from "../../../store/shared/navigation/Navigation.slice";
import { fbLogout } from "../../../api/facebook";
import { HEADER_NAV_ITEMS } from "../../../constants/header";
import styles from './Header.module.scss';

const Header = () => {
    const [ anchorElement, setAnchorElement ] = useState(null);

    const isMenuOpen = Boolean(anchorElement);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userName = useSelector(UserSelectors.name);

    const userPictureUrl = useSelector(UserSelectors.pictureUrl);

    const scrollPosition = useScrollPosition();

    const handleUserMenuClick = (event) => {
        setAnchorElement(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setAnchorElement(null);
    };

    const logoutUser = () => {
        handleUserMenuClose();
        dispatch(toggleLoading(true));
        fbLogout(() => {
            navigate('/auth');
            dispatch(toggleLoading(false));
        });
    };

    const fetchUserData = () => {
        dispatch(userActions.getUserData());
    };

    useEffect( () => {
        (async () => {
            if (!userName) {
                await fetchUserData();
            }
        })();
    }, []);

    return (
        <>
            <header
                className={classNames(
                    styles.header,
                    { [ styles.scrolled ]: scrollPosition > 1 }
                )}
            >
                <Logo/>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__navList}>
                        {HEADER_NAV_ITEMS.map((item, index) => (
                            <li
                                className={styles.header__navListItem}
                                key={index}
                            >
                                <Item
                                    id={item.id}
                                    name={item.name}
                                    key={item.id}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.header__weatherUserWrapper}>
                    {/*<Weather/>*/}
                    <div
                        className={styles.header__user}
                        onClick={handleUserMenuClick}
                    >
                        <User
                            name={userName}
                            pictureUrl={userPictureUrl}
                        />
                    </div>
                </div>
                <Menu
                    open={isMenuOpen}
                    onClose={handleUserMenuClose}
                    anchorEl={anchorElement}
                >
                    <MenuItem onClick={logoutUser}>
                        <AiOutlineLogout
                            size={15}
                            className={styles.header__logoutIcon}
                        />
                        Log out
                    </MenuItem>
                </Menu>
            </header>
        </>
    );
};

export default Header;