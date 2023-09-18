'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
  createGlobalStyle,
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components';
import { normalize } from 'styled-normalize';
import isPropValid from '@emotion/is-prop-valid';

export const GlobalStyle = createGlobalStyle<{
  fontFamily?: string;
}>`
  ${normalize}

  body {
    font-family: ${(props) => props.fontFamily || `Poppins`};
    overscroll-behavior: none;
  }
  
  a {
    text-decoration: none;
  }

  .carousel .control-dots {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
  }

  // see https://nextjs.org/docs/api-reference/next/image#known-browser-bugs
  @supports (font: -apple-system-body) and (-webkit-appearance: none) {
    img[loading="lazy"] {
      clip-path: inset(0.6px)
    }
  }
`;

export const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={isPropValid}
    >
      {children}
    </StyleSheetManager>
  );
};
