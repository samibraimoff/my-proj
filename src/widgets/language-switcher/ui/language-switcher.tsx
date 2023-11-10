import { classnames } from "shared/lib/helpers/classnames"
import styles from './language-switcher.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/button";

interface LangSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }   
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={changeLanguage} className={classnames(styles.langSwitcher, {}, [className])}>
           {t('language')}
        </Button>
    )
}