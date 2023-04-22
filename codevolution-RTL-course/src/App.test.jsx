import {render, screen} from '@testing-library/react'
import App from './App'

describe('Jest' , () => {

it('should work' , () =>{
    expect(1).toBe(1)
})

it.skip('should 2' , () =>{
    expect(2).toBe(2)
    
})

it('should display elements', () => {
    render(<App />)
    const linkElement = screen.getByText(/test/i)
    expect(linkElement).toBeInTheDocument()
    screen.debug()
})

})