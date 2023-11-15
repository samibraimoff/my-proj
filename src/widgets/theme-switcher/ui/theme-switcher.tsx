import { classnames } from 'shared/lib/classnames/classnames'
import { useTheme, Theme } from 'app/providers/theme'
import Light from 'shared/assets/icons/on.svg'
import Dark from 'shared/assets/icons/off.svg'
import { Button, ButtonTheme } from 'shared/ui/button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps): JSX.Element => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classnames('', {}, [className ?? ''])}
    >
      {theme === Theme.DARK ? <Dark /> : <Light />}
    </Button>
  )
}
