import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/colors/default';

import AppProvider from './hooks';

import Routes from './routes';
import { PostProvider } from './hooks/post';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={defaultTheme}>
          <PostProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </PostProvider>
        </ThemeProvider>
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
