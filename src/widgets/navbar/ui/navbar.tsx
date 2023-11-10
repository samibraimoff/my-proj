import { classnames } from "shared/lib/helpers/classnames"
import styles from './navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/app-link"
import { useTranslation } from "react-i18next"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    return (
        <nav className={classnames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to='/'>{t('main', {ns: 'main'})}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>{t('about', {ns: 'about'})}</AppLink>
            </div>
        </nav>
    )
}