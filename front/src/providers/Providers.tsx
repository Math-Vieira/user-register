import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/themes';
import { Provider } from 'react-redux';
import store from '@/store';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </Provider>
    </>
  );
};
