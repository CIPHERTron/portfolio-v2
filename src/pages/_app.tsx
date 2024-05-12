import { ChakraProvider } from "@chakra-ui/react";
import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Script from "next/script";
import "@fontsource/recursive/latin.css";
import "@fontsource/catamaran/latin.css";
import { Analytics } from "@vercel/analytics/react";

import Layout from "components/layout";
import { defaultSEOConfig } from "config/next-seo";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/theme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={customTheme}>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />

            <Script
              strategy="lazyOnload"
              src="https://www.googletagmanager.com/gtag/js?id=G-6R37NRLNJE"
            />

            <Script id="google-analytics" strategy="lazyOnload">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);            
            }
            gtag('js', new Date());
            gtag('config', 'G-6R37NRLNJE');
          `}
            </Script>
          </Layout>
        </ChakraProvider>
      </CacheProvider>
      <Analytics />
    </>
  );
};

export default MyApp;
