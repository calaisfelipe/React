import {createGlobalStyle} from 'styled-components'


const GlobalTheme = createGlobalStyle`
    button, a{
        padding: .6em .8em;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius: 5px;
        color:#fff;
        background-color: black;
        text-decoration: none;
        
        &:hover{
            color:#fff;
            background-color: #666;
        }
    }

    body{
        background-color: #333;
        
    }
    
    input[type='text']{
        border: none;
        width: 200px;
        height: 25px;
        &:focus{
            outline: none;
        }
    }

    h2, h3{
        color: #fff;
        text-shadow: 2px 2px 2px black;
        
    }

    

`


export default GlobalTheme