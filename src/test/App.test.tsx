import { render, screen } from '@testing-library/react'

import App from '../App'
import React from 'react'

test('renders Simple Nav component', () => {
  render(<App />)
  const NavTitleElement = screen.getByText(/Simple Nav/i)
  expect(NavTitleElement).toBeInTheDocument()
})
