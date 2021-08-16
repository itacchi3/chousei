import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import type Liff from '@line/liff';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { FC } from 'react';
import { AuthProvider, useAuth } from 'src/hooks/auth';
// import { LiffProvider } from 'react-liff';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4bc2d2',
      main: '#1FB3C7',
      dark: '#157d8b',
      contrastText: '#fff',
    },
  },
});

// const stubEnabled = process.env.NODE_ENV !== 'production';
const Layout: FC = ({ children }) => {
  const { initialized, loggedIn, login } = useAuth();

  if (!initialized) {
    return <p>loading...</p>;
  }

  if (!loggedIn) {
    return <button onClick={login}>log in</button>;
  }

  return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppProps) {
  // const [flag, setFlag] = useState(false);
  // // 開発用に一時的にコメントアウト
  // useEffect(() => {
  //   // const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
  //   const liffId = '1656098585-v7VEeZ7Q';
  //   const liffLogin = async () => {
  //     // liffにwindowが含まれるため，ここで定義
  //     const liff = (await import('@line/liff')).default;
  //     try {
  //       if (typeof liffId === 'string') {
  //         await liff.init({ liffId });
  //         // setLiff(liff);
  //       } else {
  //         throw 'NEXT_PUBLIC_LIFF_ID is undefined!';
  //       }
  //     } catch (error) {
  //       console.error('liff init error', error.message);
  //     }
  //     if (!liff.isLoggedIn()) {
  //       liff.login();
  //     }
  //   };
  //   liffLogin();
  //   setFlag(true);
  // }, []);
  return (
    <AuthProvider>
      <Layout>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              spacing={3}
            >
              <Grid
                container
                item
                className="app-content"
                direction="column"
                alignItems="center"
                justify="flex-start"
              >
                {/* {flag && <Component {...pageProps} />} */}
                <Component {...pageProps} />
              </Grid>
            </Grid>
          </RecoilRoot>
        </ThemeProvider>
      </Layout>
    </AuthProvider>
  );
}
export default MyApp;
