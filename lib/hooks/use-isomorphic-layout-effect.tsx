import { inClient } from '../utils/is-ssr';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = inClient ? useLayoutEffect : useEffect;
