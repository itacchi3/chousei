import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { FC } from 'react';
import { LiffAuth, useLiff } from 'src/hooks/auth';
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react';

const Layout: FC = ({ children }) => {
  const { initialized } = useLiff();

  if (!initialized) {
    return (
      <Center p="8">
        <Spinner color="green.400" />
      </Center>
    );
  }

  return <>{children}</>;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <LiffAuth>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </LiffAuth>
    </RecoilRoot>
  );
};
export default MyApp;
