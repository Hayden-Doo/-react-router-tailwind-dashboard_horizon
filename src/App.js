import Routers from './components/Routers';
import { Reset } from 'styled-reset';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import './assets/style/index.css';
import { ChakraProvider } from '@chakra-ui/react';
import extendTheme from './theme/index';

function App() {
  return (
    <>
      <ChakraProvider theme={extendTheme}>
        {/* <ThemeProvider theme={theme}> */}
        <ThemeProvider theme={extendTheme}>
          <Reset />
          <GlobalStyle />
          <Routers />
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}
export default App;
