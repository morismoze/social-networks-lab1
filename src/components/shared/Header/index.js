import React, { useEffect } from 'react';

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import Item from "./Item";
import User from "./User";
import Logo from "../Logo";
import UserMenu from "./UserMenu";
import Button from "../Button";
import NavigationMenu from "./NavigationMenu";
import * as UserSelectors from "../../../store/shared/user/User.selectors";
import { actions as userActions } from "../../../store/shared/user/User.actions";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { HEADER_NAV_ITEMS } from "../../../constants/header";
import styles from './Header.module.scss';

const Header = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    const navigate = useNavigate();

    const [ anchorEl, setAnchorEl ] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const name = useSelector(UserSelectors.name);
    const pictureUrl = useSelector(UserSelectors.pictureUrl);

    const scrollPosition = useScrollPosition();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    useEffect( () => {
        if (!name) {
            dispatch(userActions.getUserData());
        }
    }, []);

    return (
        <>
            <header
                className={classNames(
                    styles.header,
                    { [ styles.scrolled ]: scrollPosition > 1 }
                )}
            >
                <NavigationMenu/>
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
                                    path={item.path}
                                    name={item.name}
                                    key={index}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
                {name ? (
                    <div className={styles.header__weatherUserWrapper}>
                        <div
                            className={styles.header__user}
                            onClick={handleMenuClick}
                        >
                            <User
                                name={name}
                                pictureUrl={pictureUrl}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={styles.header__signInWrapper}>
                        <Button
                            onClick={() => navigate('/auth', { state: location })}
                            text='Sign In'
                            fill={false}
                        />
                    </div>
                )}
                <UserMenu
                    anchorEl={anchorEl}
                    handleCloseMenu={handleMenuClose}
                    isOpen={isMenuOpen}
                    name={name}
                />
            </header>
        </>
    );
};

export default Header;