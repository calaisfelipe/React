import styled from 'styled-components'


export const StyledButton = styled.button`
  border: none;

  background-color: ${(props) => props.variant === 'outline'? 'green' : 'purple'};

  color: ${(props) => props.variant === 'outline' ? 'purple' : 'green'};

  padding: .8em .6em;
  border-radius: 10px;
  font-weight: bolder;
  cursor: pointer;

 &:hover {
     background-color: #bff007;
  }
`


export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100% );
    border:none;

`

export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit',
    name: 'botaoSubmit'
    
})`

box-shadow: 0 9px #999;
&:active{
    background-color: ${(props) => props.variant !== 'outline' ? '#fff' : '#bff007' } ;
    box-shadow: 0 5px #666;
    transform: translateY(4px)

}
    
`

export const DarkButton = styled(StyledButton)`

border: 2px solid ${(props) => props.theme.dark.text};
background-color: ${(props) => props.theme.dark.primary};
color: ${(props) => props.theme.dark.text};


`


export const LightButton = styled(StyledButton)`

border: 2px solid ${(props) => props.theme.light.text};
background-color: ${(props) => props.theme.light.primary};
color: ${(props) => props.theme.light.text};


`