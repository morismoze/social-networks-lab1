import React from 'react';

import Menu from '@mui/material/Menu';
import { makeStyles } from "@mui/styles";

import colors from '../../styles/colors.module.scss';

const UserMenu = (props) => {
    const useStyles = makeStyles((theme) => ({
        menu: {
            '& .MuiPaper-root': {
                borderRadius: 6,
                minWidth: 180,
                color: colors.darkGray,
                boxShadow:
                    'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            },
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                fontSize: '14px'
            }
        }
    }));

    const classes = useStyles();

    return (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            disableAutoFocusItem
            className={classes.menu}
            {...props}
        />
    );
};

export default UserMenu;