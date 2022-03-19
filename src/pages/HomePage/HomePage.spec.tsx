import { render, screen } from '@testing-library/react'

import { HomePage } from './HomePage'

describe('<HomePage />', () => {
  it('should render', () => {
    render(<HomePage />)
    expect(screen.getByText(/Hello World!/i)).toBeInTheDocument()
  })
})
