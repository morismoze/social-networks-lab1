import React from 'react';

import Item from "./Item";
import User from "./User";
import Logo from "../../shared/Logo";
import { HEADER_NAV_ITEMS } from "../../../constants/header";
import styles from './Header.module.scss';

const Header = ({
    userName,
    userPictureLink
}) => {
    return (
      <header className={styles.header}>
          <Logo/>
          <nav className={styles.header__nav}>
              <ul className={styles.header__navList}>
                  {HEADER_NAV_ITEMS.map((item, index) => (
                      <li
                          className={styles.header__navListItem}
                          key={index}
                      >
                          <Item
                              id={item.id}
                              name={item.name}
                              icon={item.icon}
                              key={item.id}
                          />
                      </li>
                  ))}
              </ul>
          </nav>
          <div className={styles.header__user}>
              <User
                  name={userName}
                  pictureLink={userPictureLink}
              />
          </div>
      </header>
    );
};

export default Header;