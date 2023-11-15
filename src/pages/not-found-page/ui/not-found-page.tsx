import { useTranslation } from 'react-i18next'
import styles from './not-found-page.module.scss'
import { classnames } from 'shared/lib/classnames/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={classnames(styles.notFoundPage, {}, [className ?? ''])}>
      <h1>{t('pageNotFound')}</h1>
      <AppLink theme={AppLinkTheme.PRIMARY} to='/' className={styles.linkFont}>{t('returnToMainPage')}</AppLink>
    </div>
  )
}
