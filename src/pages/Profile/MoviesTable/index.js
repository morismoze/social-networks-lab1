import React from 'react';

import MoviesTableRow from "./MoviesTableRow";
import { MOVIES_TABLE_HEADER_ITEMS } from "../../../constants/moviesTable";
import styles from './MoviesTable.module.scss';

const MoviesTable = ({
    moviesIds
}) => {
    return (
        <table className={styles.moviesTable}>
            <thead className={styles.moviesTable__header}>
                <tr>
                    {MOVIES_TABLE_HEADER_ITEMS.map((item, index) => (
                        <th
                            className={styles.moviesTable__headerCell}
                            key={index}
                        >
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {moviesIds.map((id, index) => (
                    <MoviesTableRow
                        id={id}
                        key={index}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default MoviesTable;