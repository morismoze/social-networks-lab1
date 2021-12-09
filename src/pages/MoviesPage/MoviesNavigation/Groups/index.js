import React from 'react';

import Group from "./Group";
import { MOVIES_GROUPS } from "../../../../constants/moviesNavigation";
import styles from './Groups.module.scss';

const Groups = () => {
    return (
        <div className={styles.groups}>
            {MOVIES_GROUPS.map((group, index) => (
                <Group
                    id={group.id}
                    name={group.name}
                    key={index}
                />
            ))}
        </div>
    );
};

export default Groups;