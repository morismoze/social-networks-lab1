import React from 'react';

import { Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { SIDEBAR_NAV_ITEMS } from "../../../constants/profile";
import styles from './TabBar.module.scss';
import colors from "../../../styles/colors.module.scss";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) =>({
    root: {
        backgroundColor: 'transparent',
        '& .MuiButtonBase-root': {
            color: colors.lighterGray,
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

    const getTabIndex = SIDEBAR_NAV_ITEMS.findIndex((item) => item.id === activeSidebarTab);

    return (
        <div className={styles.tabBar}>
            <Tabs
                value={getTabIndex}
                onChange={setActiveSidebarTab}
                classes={classes}
            >
                {SIDEBAR_NAV_ITEMS.map((item, index) => (
                    <Tab
                        label={item.name}
                        component={Link}
                        to={item.id}
                        key={index}
                    />
                ))}
            </Tabs>
        </div>
    );
};

export default TabBar;