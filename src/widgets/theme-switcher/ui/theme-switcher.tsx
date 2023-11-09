import { classnames } from 'shared/lib/helpers/classnames';
import styles from './theme-switcher.module.scss';
import { useTheme } from "app/providers/theme";
import Light from 'shared/assets/icons/on.svg';
import Dark from 'shared/assets/icons/off.svg';
import { Theme } from 'app/providers/theme';
import { Button, ButtonTheme } from 'shared/ui/button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button 
            theme={ButtonTheme.CLEAR} 
            onClick={toggleTheme} 
            className={classnames(styles.button, {}, [className])}
        >
            {theme === Theme.DARK ? <Dark className={styles.icon} /> : <Light className={styles.icon} />}
        </Button>
    )
}