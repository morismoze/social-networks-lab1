import React from 'react';

import { createTheme, TextField } from '@mui/material';
import {makeStyles, ThemeProvider} from "@mui/styles";

import colors from '../../../../styles/colors.module.scss';
import styles from './Data.module.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.darkGray
        },

        text: {
            disabled: colors.darkGray
        }
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: `${colors.darkGray} !important`
        },
    },
    label: {
        color: `${colors.darkGray} !important`
    }
}));

const Data = ({
    name,
    email,
    country,
    city
}) => {
    const userName = name.split(' ');

    const classes = useStyles();

    return (
        <div className={styles.data}>
            <ThemeProvider theme={theme}>
                <TextField
                    id='firstName'
                    name='firstName'
                    label='First name'
                    variant='outlined'
                    type='text'
                    fullWidth={true}
                    autoComplete='name'
                    value={userName[0] || ''}
                    spellCheck='false'
                    disabled
                    className={classes.root}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                />
                <TextField
                    id='lastName'
                    name='lastName'
                    label='Last name'
                    variant='outlined'
                    type='text'
                    fullWidth={true}
                    autoComplete='family-name'
                    value={userName[1] || ''}
                    spellCheck='false'
                    disabled
                    className={classes.root}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                />
                <TextField
                    id='email'
                    name='email'
                    label='E-mail'
                    variant='outlined'
                    type='text'
                    fullWidth={true}
                    autoComplete='email'
                    value={email || ''}
                    spellCheck='false'
                    disabled
                    className={classes.root}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                />
                <TextField
                    id='country'
                    name='country'
                    label='Country'
                    variant='outlined'
                    type='text'
                    fullWidth={true}
                    autoComplete='country-name'
                    value={country || ''}
                    spellCheck='false'
                    disabled
                    className={classes.root}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                />
                <TextField
                    id='city'
                    name='city'
                    label='City'
                    variant='outlined'
                    type='text'
                    fullWidth={true}
                    autoComplete='address-level2'
                    value={city || ''}
                    spellCheck='false'
                    disabled
                    className={classes.root}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                />
            </ThemeProvider>
        </div>
    );
};

export default Data;