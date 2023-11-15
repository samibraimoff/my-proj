import { screen } from '@testing-library/react'
import { Sidebar } from 'widgets/sidebar'
import userEvent from '@testing-library/user-event'
import { renderWithTranslation } from 'shared/lib/render-with-translations/render-with-traslation'

describe('sidebar component', () => {
  test('renders correctly sidebar component and user able to toggle sidebar using button', async () => {
    const user = userEvent.setup()
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toHaveClass('sidebar')
    const button = screen.getByRole('button', {
      name: 'toggle'
    })
    await user.click(button)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')

    await user.click(button)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
