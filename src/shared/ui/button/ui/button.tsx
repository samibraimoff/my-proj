import { type ButtonHTMLAttributes, type FC } from 'react'
import styles from './button.module.scss'
import { classnames } from 'shared/lib/helpers/classnames'

export enum ButtonTheme {
  CLEAR = 'clear',
  SECONDARY = 'secondary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick: () => void
  theme: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, onClick, theme, ...rest } = props
  return (
    <button
      type='button'
      onClick={onClick}
      className={classnames(styles.button, {}, [className ?? '', styles[theme]])}
      {...rest}
    >
      {children}
    </button>
  )
}
