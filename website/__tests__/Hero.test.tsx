import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
 
// check for heading (should succeed)
describe('Hero', () => {
  it('renders a heading', () => { 
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })

  // check for any subheading (should fail, the paragraph isnt a subheading)
  it('renders a subheading (h2, h3, or h4)', () => {
    render(<Hero />)
    
    // Query for any subheading (h2, h3, or h4)
    const subheadings = [
      ...screen.queryAllByRole('heading', { level: 2 }),
      ...screen.queryAllByRole('heading', { level: 3 }),
      ...screen.queryAllByRole('heading', { level: 4 })
    ]
    
    // Check if at least one subheading exists
    expect(subheadings.length).toBeGreaterThan(0)
  })

  // check for button (Call to action, should succeed)
  it('renders a button', () => {
    render(<Hero />)
    
    const button = screen.getByRole('button')
    
    expect(button).toBeInTheDocument()
  })

  // check for image (should fail)
  it('renders an image', () => {
    render(<Hero />)
    
    const image = screen.getByRole('img')
    
    expect(image).toBeInTheDocument()
  })
})