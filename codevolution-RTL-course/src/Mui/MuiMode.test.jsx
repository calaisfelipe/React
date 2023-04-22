import {render, screen} from '../providers/CustomRender'
import MuiMode from './MuiMode'


describe('Theme testing' , () =>{

    test('renders test correctly', () =>{

        render(<MuiMode />)

        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark Mode')


    })




})