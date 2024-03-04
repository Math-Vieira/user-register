import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/themes';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
