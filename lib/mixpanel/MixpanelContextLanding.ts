'use client';

import { useContext } from 'react';

import { MixpanelContext } from './MixpanelProviderLanding';

export default function useMixpanelContext() {
  const { mixpanel } = useContext(MixpanelContext);

  if (!mixpanel) {
    throw new Error(`useMixpanelContext must be within MixpanelProvider`);
  }

  return mixpanel;
}