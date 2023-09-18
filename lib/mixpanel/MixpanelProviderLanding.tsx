'use client';

import { useIsomorphicLayoutEffect } from '../hooks/use-isomorphic-layout-effect';
import mixpanel, { OverridedMixpanel } from 'mixpanel-browser';
import React, {createContext} from 'react';

type MixpanelContext = {
  mixpanel: OverridedMixpanel;
};
export const MixpanelContext = createContext<MixpanelContext>({
  mixpanel,
});

const MIXPANEL_TOKEN = `ba3bc2864e90f167a486ef65f8c37fb4`;

type Props = {
  children: React.ReactNode;
};

export default function MixpanelProvider({ children }: Props) {
  useIsomorphicLayoutEffect(() => {
    mixpanel.init(MIXPANEL_TOKEN);
  }, []);

  return (
    <MixpanelContext.Provider
      value={{
        mixpanel: mixpanel,
      }}
    >
      {children}
    </MixpanelContext.Provider>
  );
}