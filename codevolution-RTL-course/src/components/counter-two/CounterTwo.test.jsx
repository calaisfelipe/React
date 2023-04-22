import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import CounterTwo from './CounterTwo'



describe('CounterTwo tests', () =>{

    test('renders correctly' , () =>{
        render(<CounterTwo count={0} />)

        const textElement = screen.getByRole('heading', {
            name: 'Counter Two'
        })
        expect(textElement).toBeInTheDocument()
    })

    test('handlers are called', async () =>{ 
        user.setup()

        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()

        render(<CounterTwo count={0} 
            handleInclement={incrementHandler} 
            handleDecrement={decrementHandler} />)

        const incrementButton = screen.getByRole('button', {name: /^ / })
        const decrementButton = screen.getByRole('button', {name: 'Decrement'})

    
        await user.click(incrementButton)
        await user.click(decrementButton)

        expect(incrementButton).toHaveBeenCalledTimes(1)
        expect(decrementButton).toHaveBeenCalledTimes(1)
        

    })




} )