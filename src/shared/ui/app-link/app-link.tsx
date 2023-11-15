import { classnames } from 'shared/lib/classnames/classnames'
import styles from './app-link.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    className,
    to,
    theme = AppLinkTheme.SECONDARY,
    ...rest
  } = props

  return (
    <Link
      to={to}
      {...rest}
      className={classnames(styles.appLink, {}, [className ?? '', styles[theme]])}
    >
      {children}
    </Link>
  )
}
