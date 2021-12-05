import React from 'react';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Divider, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AiFillStar, AiFillHeart, AiOutlineLogout } from "react-icons/all";
import classNames from "classnames";

import { clearUser } from "../../../../store/shared/user/User.slice";
import { toggleLoading } from "../../../../store/shared/navigation/Navigation.slice";
import { fbLogout } from "../../../../api/facebook";
import colors from '../../../../styles/colors.module.scss';
import styles from './UserMenu.module.scss';

const useStyles = makeStyles((theme) => ({
    menu: {
        '& .MuiPaper-root': {
            minWidth: 180,
            color: colors.darkGray,
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            padding: '5px',
            '&:before': {
                content: '',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        },
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            fontSize: '14px',
            color: colors.darkGray
        }
    }
}));

const UserMenu = ({
    anchorEl,
    isOpen,
    handleCloseMenu,
    name
}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const classes = useStyles();

    const handleLogoutUser = () => {
        handleCloseMenu();
        dispatch(toggleLoading(true));
        fbLogout(() => {
            navigate('/auth');
            dispatch(clearUser());
            dispatch(toggleLoading(false));
        });
    };

    const handleGoToProfile = () => {
        handleCloseMenu();
        navigate('/profile/personal-information');
    };

    const handleGoToWatchlist = () => {
        handleCloseMenu();
        navigate('/profile/watchlist');
    };

    const handleGoToLikedList = () => {
        handleCloseMenu();
        navigate('/profile/liked');
    };

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 45, horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isOpen}
            disableScrollLock
            disableAutoFocusItem
            onClose={handleCloseMenu}
            className={classes.menu}
        >
            <MenuItem
                onClick={handleGoToProfile}
                className={styles.menu__user}
            >
                <span className={styles.menu__name}>{name}</span>
                <span className={styles.menu__profileBtn}>View profile</span>
            </MenuItem>
            <Divider/>
            <MenuItem
                onClick={handleGoToWatchlist}
                className={styles.menu__item}
            >
                <AiFillStar size={15}/>
                <span className={styles.menu__btn}>Watchlist</span>
            </MenuItem>
            <MenuItem
                onClick={handleGoToLikedList}
                className={styles.menu__item}
            >
                <AiFillHeart size={15}/>
                <span className={styles.menu__btn}>Liked list</span>
            </MenuItem>
            <Divider/>
            <MenuItem
                onClick={handleLogoutUser}
                className={styles.menu__item}
            >
                <AiOutlineLogout size={15}/>
                <span className={classNames(
                    styles.menu__btn,
                    styles.menu__signoutBtn
                )}>
                    Sign out
                </span>
            </MenuItem>
        </Menu>
    );
}

export default UserMenu;
