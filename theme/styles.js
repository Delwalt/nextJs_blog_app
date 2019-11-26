import styled, {createGlobalStyle} from 'styled-components';

// Set Global Variables
export const theme = {
    primary: '#3fb6bf',
    secondary: ' #282c34',
    bg: ' #282c34',
    fontFamily: "'Roboto', sans-serif"
}


// Global Styles
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.bg};
    margin: 0;
    padding:0;
    background-color: ${props => props.theme.secondary};
     font-family: ${props => props.theme.fontFamily};
  }
`

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 15px;
`;



// Navbar Page Styles
export const Logo = styled.h1`
  color: ${props => props.theme.secondary};
  margin:5px;
  font-size: 24px;
   cursor: pointer;
   display:inline-block;
`;

export const Navbar = styled.div`
    background-color: ${props => props.theme.primary};
    color: #fff;
    padding: 5px;
    margin-bottom: 15px;
`;



// Feed Page Styles
export const FeedCard = styled.div`
       display: flex;
           box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
           border-radius: 4px;
           color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 0.5s;
    background-color: #fff;
    margin-top: 15px;
    &:hover {
           transform: translateY(-5px);
      }
`;
export const FeedCardContent = styled.div`
    display: flex;
    flex-direction: column;  
    width: 100%;
   padding: 16px;
`;
export const FeedCardMedia = styled.div`
width: 250px;
`;
export const FeedCardMediaImg = styled.img`
     width: 100%;
     height: 100%;
     cursor: pointer;
     object-fit: cover;
`;
export const FeedTitle = styled.a`
    color:  ${props => props.theme.secondary};
    text-decoration: none;
    font-size:24px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom:10px;
`;
export const FeedAuthor = styled.p`
    color: #ccc;
    margin-top:0;
  `;

export const ArticleView = styled.article`
    padding: 24px 16px;
     box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
      border-radius: 4px;
            color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
`;



// Article Page Styles
export const ArticleViewTitle = styled.h1`
    font-size: 1.8rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight:700;
    line-height: 1.33;
    letter-spacing: 0em;
    margin-top:0;
    margin-bottom:5px;
`;

export const ArticleImage = styled.img`
   width:100%;
    margin-bottom:20px;
`;




