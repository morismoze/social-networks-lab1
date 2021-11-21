import React from 'react';

import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";

import colors from '../../../styles/colors.module.scss';
import styles from './CustomPagination.module.scss';

const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiPagination-ul': {

        },
        '& .MuiPaginationItem-root': {
            borderColor: colors.lighterGray,
            color: colors.lighterGray,
            '&:hover': {
                backgroundColor: 'transparent !important',
                borderColor: colors.golden,
                color: colors.golden,
            }
        },
        '& .Mui-selected': {
            color: colors.golden,
            borderColor: colors.golden,
            backgroundColor: 'transparent !important',
        },
    }
}));

const CustomPagination = ({
    count,
    page,
    onChange
}) => {
    const classes = useStyles();

    return (
        <div className={styles.pagination}>
            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                variant='outlined'
                shape='rounded'
                className={classes.root}
                disabled={false}
            />
        </div>
    );
};

export default CustomPagination;