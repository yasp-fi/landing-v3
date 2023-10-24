import { BASE_APP_URL, DESCRIPTION, TITLE } from "../lib/constants";
import React from "react";
import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>{TITLE}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta name="description" content={DESCRIPTION} />
      {/*<link rel='canonical' href={url} />*/}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={BASE_APP_URL} />
      <meta key="title" property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={`${BASE_APP_URL}/yasp-thumb.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={`${BASE_APP_URL}/yasp-thumb.png`} />
      <meta name="twitter:image:alt" content={DESCRIPTION} />
      <Script>
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1075475973898383');
        fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1075475973898383&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
}
