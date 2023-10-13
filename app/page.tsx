'use client';

import React, { useEffect, useRef } from 'react';
import { LandingLayout } from '../components/layout-with-fill';
import { HeroSection } from '../components/sections/hero-section';
import { OverviewSection } from '../components/sections/overview/overview-section';
import { SecuritySection } from '../components/sections/security/security-section';
import { YieldOffersSection } from '../components/sections/yield-offers/yield-offers-section';
import { ExchangeSection } from '../components/sections/exchange';
import { FiatEngineSection } from '../components/sections/fiat-engine';
import { JoinUsCallout } from '../components/layout/join-us-call-out';
import { SupportedChainsSection } from '../components/sections/supported-chains';
import useMixpanelContext from '../lib/mixpanel/MixpanelContextLanding';
import MixpanelProvider from '../lib/mixpanel/MixpanelProviderLanding';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../public/header-loader.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// export const metadata: Metadata = {
//   title: TITLE,
//   description: DESCRIPTION,
//   openGraph: {
//     title: TITLE,
//     description: DESCRIPTION,
//     url: BASE_APP_URL,
//     siteName: `YaspFi`,
//     images: [
//       {
//         url: `${BASE_APP_URL}/yasp-thumb.png`,
//         width: 800,
//         height: 600,
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     title: TITLE,
//     description: DESCRIPTION,
//     images: `${BASE_APP_URL}/yasp-thumb.png`,
//   },
// };

export default function LandingPage() {
  const mixpanel = useMixpanelContext();
  useEffect(() => {
    mixpanel.people.set({ product: 'Landing' });
  }, []);

  return (
    <MixpanelProvider>
      <LandingLayout>
        <HeroSection />
        <OverviewSection />
        <YieldOffersSection />
        <SecuritySection />
        <ExchangeSection />
        <FiatEngineSection />
        <SupportedChainsSection />
        <JoinUsCallout />
      </LandingLayout>
    </MixpanelProvider>
  );
}
