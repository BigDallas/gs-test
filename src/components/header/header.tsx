import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import CroplogoWebp from '../../assets/croplogo.webp';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/">
                <img
                    src={CroplogoWebp}
                    className={classNames(styles.img1, styles.img2, styles.img3, styles.img4)}
                />
            </a>
            <div className={styles.menu}>
                <h1 className={classNames(styles.header1, styles.header2)}>DELI</h1>
                <NavLink
                    to="tel:2155548984"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                ></NavLink>
            </div>
        </div>
    );
};
