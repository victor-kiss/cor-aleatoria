import GlobalStyle from '../styles/global'
import {ThemeProvider} from 'styled-components'
import randomColor from '../styles/theme/randomColor'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={randomColor}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp
