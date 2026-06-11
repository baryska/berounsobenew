import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";
import { Layout } from '../sections/Layout/Layout';
import { getCookie } from 'cookies-next';
import Head from "next/head";
config.autoAddCss = false;

import type { AppProps } from 'next/app';



function MyApp({ Component, pageProps }: AppProps) {
  const consent = getCookie('localConsent');
  return (
    <>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-PR95W6K');`,
        }}
      />
      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
              });
            `,
          }}
        />
      )}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","x5jzz4pm5y");
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
