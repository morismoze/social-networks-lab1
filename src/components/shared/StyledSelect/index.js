import React from 'react';

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import colors from '../../../styles/colors.module.scss';

const useFormControlStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputLabel-root': {
            color: `${colors.golden} !important`,
            fontSize: '15px'
        },
        '& .MuiInput-root': {
            color: `${colors.lighterGray} !important`,
            fontSize: '15px',
            '&:before': {
                borderBottomColor: colors.golden
            },
            '&:hover:before': {
                borderBottomColor: `${colors.golden} !important`
            },
            '& .MuiSvgIcon-root': {
                color: colors.golden
            },
            '&:after': {
                borderBottomColor: colors.golden
            }
        }
    }
}));

const useMenuItemStyles = makeStyles((theme) => ({
    root: {
        '&.Mui-selected': {
            backgroundColor: 'rgba(191, 167, 93, .2) !important'
        }
    }
}));

const StyledSelect = ({
    label,
    items,
    value,
    onSelect,
    variant = 'standard',
    multiple
}) => {
    const classes = useFormControlStyles();

    const menuItemClasses = useMenuItemStyles();

    const handleSelect = (event) => {
        onSelect(event.target.value);
    };

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <FormControl
            variant={variant}
            fullWidth
            classes={classes}
        >
            <InputLabel id='select-label'>{label}</InputLabel>
            <Select
                labelId='select-label'
                value={value}
                label={label}
                onChange={handleSelect}
                multiple={multiple}
            >
                {items.map((item, index) => (
                    <MenuItem
                        value={item}
                        classes={menuItemClasses}
                        autoFocus={false}
                        key={index}
                    >
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default StyledSelect;