import React from 'react';

import { Link } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { SIDEBAR_NAV_ITEMS } from "../../../constants/profile";
import styles from './TabBar.module.scss';
import colors from "../../../styles/colors.module.scss";

const useStyles = makeStyles((theme) =>({
    root: {
        backgroundColor: 'transparent',
        '& .MuiButtonBase-root': {
            color: colors.lighterGray,
            paddingLeft: 8,
            paddingRight: 8
        },
        '& .Mui-selected': {
            color: `${colors.golden} !important`,
        },
        '& .MuiTabs-indicator': {
            backgroundColor: `${colors.golden} !important`,
        }
    }
}));

const TabBar = ({
    activeSidebarTab,
    setActiveSidebarTab
}) => {
    const classes = useStyles();

    const tabIndex = SIDEBAR_NAV_ITEMS.findIndex((item) => item.id === activeSidebarTab);

    return (
        <div className={styles.tabBar}>
            <Tabs
                value={tabIndex}
                onChange={setActiveSidebarTab}
                variant='scrollable'
                classes={classes}
            >
                {SIDEBAR_NAV_ITEMS.map((item, index) => (
                    <Tab
                        label={item.name}
                        component={Link}
                        to={item.path}
                        key={index}
                    />
                ))}
            </Tabs>
        </div>
    );
};

export default TabBar;