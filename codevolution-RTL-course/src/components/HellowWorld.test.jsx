import {render, screen} from '@testing-library/react'
import HelloWorld from './HelloWorld'

test('hellow Test' , () =>{

    render(<HelloWorld />)

    const textElement = screen.getByText(/hello world/i)

    expect(textElement).toBeInTheDocument()



})