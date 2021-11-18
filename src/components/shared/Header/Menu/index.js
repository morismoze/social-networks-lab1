import React, { useEffect, useRef } from 'react';

import { useSelector } from "react-redux";
import { Grow } from "@mui/material";

import Avatar from "../../../Avatar";
import * as UserSelectors from "../../../../store/shared/user/User.selectors";
import styles from './Menu.module.scss';

const Menu = ({
    handleCloseMenu,
    handleGoToAccountDetails,
    handleLogout,
    isOpen,
    userRef
}) => {
    const menuRef = useRef(null);

    const name = useSelector(UserSelectors.name);
    const email = useSelector(UserSelectors.email);
    const pictureUrl = useSelector(UserSelectors.pictureUrl);

    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                handleCloseMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutsideMenu);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMenu);
        };
    }, [isOpen]);

    return (
        <Grow
            in={isOpen}
            style={{ transformOrigin: 'top right' }}
        >
            <div
                className={styles.menu}
                style={{
                    top: userRef.current && userRef.current.offsetHeight - 5
                }}
                ref={menuRef}
            >
                <div className={styles.menu__user}>
                    <Avatar
                        pictureUrl={pictureUrl}
                        name={name}
                        size={65}
                    />
                    <div className={styles.menu__userDataWrapper}>
                        <span className={styles.menu__name}>{name}</span>
                        <span className={styles.menu__email}>{email}</span>
                    </div>
                    <button
                        className={styles.menu__accountBtn}
                        onClick={handleGoToAccountDetails}
                    >
                        Manage your account
                    </button>
                </div>
                <div className={styles.menu__signoutWrapper}>
                    <button
                        className={styles.menu__signout}
                        onClick={handleLogout}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </Grow>
    );
}

export default Menu;
