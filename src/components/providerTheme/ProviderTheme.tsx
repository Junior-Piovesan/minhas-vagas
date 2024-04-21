import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { BiSun } from 'react-icons/bi';
import GlobalStyle from '../../styles/globalStyles/GlobalStyle';

import { lightTheme, darkTheme } from '../../styles/theme/Themes';
import SwitchButton from '../switchButton/SwichButton';

type ProviderThemeProps = {
  children: React.ReactNode;
};

const GlobalContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  width: 100;
  height: 100vh;
  transition: all 1s ease-in-out;
`;

type UseStateTypes = 'light' | 'dark';

export default function ProviderTheme({ children }:ProviderThemeProps) {
  const [theme, setTheme] = useState<UseStateTypes>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={ theme === 'light' ? darkTheme : lightTheme }>
      <GlobalContainer>

        <GlobalStyle />

        <BrowserRouter>
          <SwitchButton isActive={ theme } toggleTheme={ toggleTheme } />
          { children }
        </BrowserRouter>

      </GlobalContainer>
    </ThemeProvider>
  );
}
