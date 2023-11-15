import { classnames } from 'shared/lib/classnames/classnames'
import styles from './page-error.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/button'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
  const { t } = useTranslation()
  const onThrow = (): void => {
    location.reload()
  }
  return (
    <div className={classnames(styles.pageError, {}, [className ?? ''])}>
      <h1>{t('pageErrorMessage')}</h1>
      <Button theme={ButtonTheme.SECONDARY} onClick={onThrow}>{t('reloadPage')}</Button>
    </div>
  )
}
