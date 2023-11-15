import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/button'

describe('button component', () => {
  test('renders button with test label', () => {
    render(<Button onClick={jest.fn()} theme={ButtonTheme.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('clear')
  })
})
