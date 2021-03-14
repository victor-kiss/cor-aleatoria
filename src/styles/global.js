import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    h1{
        font-size:4.0em;
        letter-spacing:1px;
    }
`

export default GlobalStyle