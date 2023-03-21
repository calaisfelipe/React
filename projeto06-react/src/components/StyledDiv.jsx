import styled from "styled-components";


const StyledDiv = styled.div`
    
    display: flex;
    justify-content: ${(props) => props.justify === 'spacebetween' ? 'space-between' : 'center' } ;
    align-items: center;
    gap: ${ (props) => props.gap === '1' ? '1em' : '.5em'};
    
`

export const StyledDivVertical = styled(StyledDiv)`
    flex-direction: column;

`

export default StyledDiv