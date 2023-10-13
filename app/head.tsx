import { BASE_APP_URL, DESCRIPTION, TITLE } from '../lib/constants';
import React from 'react';

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
    </>
  );
}
