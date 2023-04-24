import {render, screen} from '@testing-library/react'
import Users from './Users'


describe('Users Test', () =>{

    test('renders correctly',() =>{

        render(<Users />)
        const textElement = screen.getByRole('heading', {
            name: 'Usuarios:'
        })

        expect(textElement).toBeInTheDocument()

    })


    test('renders a list of users', async () =>{
        render(<Users />)
    
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)


    })









})