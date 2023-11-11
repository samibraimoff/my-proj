import { Loader } from 'shared/ui/loader/loader'
import styles from './page-loader.module.scss'
import { classnames } from 'shared/lib/helpers/classnames'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): JSX.Element => {
  return (
    <div className={classnames(styles.pageLoader, {}, [className ?? ''])}>
      <Loader />
    </div>
  )
}
