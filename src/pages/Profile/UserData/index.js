import React from 'react';

import { Fade } from "@mui/material";
import { useSelector } from "react-redux";

import Avatar from "../../../components/Avatar";
import Data from "./Data";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import styles from './UserData.module.scss';

const UserData = () => {
    const user = useSelector(UserSelectors.user);

    if (!user.id) {
        return null;
    }

    return (
        <Fade
            in={true}
            timeout={500}
        >
            <div className={styles.userData}>
                <div className={styles.userData__basicDataContainer}>
                    <Avatar
                        pictureUrl={user.pictureUrl}
                        size={92}
                        name={user.name}
                    />
                    <div className={styles.userData__basicData}>
                        <span className={styles.userData__name}>{user.name}</span>
                        <span className={styles.userData__location}>
                            {user.location.timezone}
                        </span>
                    </div>
                </div>
                <Data
                    name={user.name}
                    email={user.email}
                    country={user.location.country}
                />
            </div>
        </Fade>
    );
};

export default UserData;