import '@aws-amplify/ui-react/styles.css';
import { APP_NAME } from 'common/constants';
import Head from 'next/head';
import 'styles/globals.css';
import '../styles/globals.css';
import Home from './index.page';

// function MyApp({ Component, pageProps }: AppProps) {
function MyApp() {
  // const SafeHydrate = dynamic(() => import('../components/SafeHydrate'), { ssr: false });

  // useEffect(() => {
  //   Amplify.configure({
  //     Auth: {
  //       Cognito: {
  //         userPoolEndpoint: NEXT_PUBLIC_COGNITO_POOL_ENDPOINT,
  //         userPoolId: NEXT_PUBLIC_COGNITO_USER_POOL_ID,
  //         userPoolClientId: NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID,
  //       },
  //     },
  //   });

  //   I18n.putVocabularies(translations);
  //   I18n.setLanguage(navigator.language.split('-')[0]);
  // }, []);

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      {/* <SafeHydrate>
        <Authenticator.Provider>
          <AuthLoader />
          <Component {...pageProps} />
        </Authenticator.Provider>
      </SafeHydrate> */}
      <Home />
    </>
  );
}

export default MyApp;
