import React from 'react';

import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from "@mui/styles";

import colors from '../../../styles/colors.module.scss';

const useStyles = makeStyles(theme => ({
    tooltip: {
        backgroundColor: `${colors.lighterBlack} !important`,
    },
    arrow: {
        color: `${colors.lighterBlack} !important`,
    },
}));

const StyledTooltip = ({
    title,
    arrow = true,
    children
}) => {
    const classes = useStyles();

    return (
        <Tooltip
            title={title}
            arrow={arrow}
            classes={{
                tooltip: classes.tooltip,
                arrow: classes.arrow
            }}
        >
            {children}
        </Tooltip>
    );
};

export default StyledTooltip;