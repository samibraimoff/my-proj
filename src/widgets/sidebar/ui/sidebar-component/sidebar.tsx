import { classnames } from 'shared/lib/helpers/classnames';
import styles from './sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LanguageSwitcher } from 'widgets/language-switcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classnames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={styles.languageSwitcher} />
            </div>
        </div>
    )
}   