import { classnames } from "shared/lib/helpers/classnames"
import styles from './navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/app-link"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <nav className={classnames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to='/'>main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>about</AppLink>
            </div>
        </nav>
    )
}