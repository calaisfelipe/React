import {render, screen} from '@testing-library/react'
import { Greed } from './Greed'

describe('jest', () => {

it('Greed renders correctly', () =>{

    render(<Greed />)

    const textElement = screen.getByText('hello')

    expect(textElement).toBeInTheDocument()

})

it('greet renders with a name', () =>{
    render(<Greed name='calais' />)

    const textWithName =  screen.getByText('hello calais')
    expect(textWithName).toBeInTheDocument()


}
)})