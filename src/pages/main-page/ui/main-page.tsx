import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main')
  return (
    <div>
      <h1>
        {t('main')}
      </h1>
    </div>
  )
}

export default MainPage
