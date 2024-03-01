import '@/styles/globals.css';
import type { AppProps } from 'next/app';
const a = 2;
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
