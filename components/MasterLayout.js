import Header from './Header';
import {GlobalStyle, theme} from "../theme/styles";
import {ThemeProvider} from "styled-components";


const Layout = props => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
            <Header />
            {props.children}
    </ThemeProvider>
);

export default Layout;
