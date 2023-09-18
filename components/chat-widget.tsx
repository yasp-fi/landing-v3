'use client';
import { Crisp as CrispSDK } from 'crisp-sdk-web';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

type CrispProps = {
  websiteId: string;
};

export const Crisp = ({ websiteId }: CrispProps) => {
  useEffect(() => {
    CrispSDK.configure(websiteId, { safeMode: true, autoload: false });
    CrispSDK.load();
  }, [websiteId]);

  return null;
};


