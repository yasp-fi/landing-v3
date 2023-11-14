export const WIKI_LINK = `https://yasp-fi.notion.site/Yasp-Fi-Knowledge-Base-9681e7bd9b6a4e8789374e2b9aff61f3`;
export const BLOG_LINK = `/blog`;
// export const ROADMAP = `https://yasp-finance.notion.site/15a1be54513c4d06823e03caf2b0b1da?v=a9bfe20c642c471f9724c6d579f55226`;
export const TWITTER = `https://twitter.com/YaspFi`;
export const GITHUB = `https://github.com/yasp-fi`;
export const GITHUB_CONTRACTS_LINK = 'https://github.com/yasp-fi/evm-contracts';

export const CAREERS_LINK =
  'https://yasp-fi.notion.site/YaspFi-Careers-c933ff7dd5564605aa620081746cfa97';

export const DISCORD = `https://discord.gg/wZqHE8Z5gU`;

export const BASE_APP_URL = 'https://yasp.fi';

export const MONOLITH_URL = process.env.MONOLITH_URL || 'http://0.0.0.0:6565';

export function buildMonolithStaticFileUrl(
  slug: string,
  size = '32px',
  ext = 'svg',
): string {
  let finalPathName = slug;

    finalPathName = `${slug}-${size}`;

  return `${MONOLITH_URL}/static/${finalPathName}.${ext}`;
}


export const WEB_APP_URL = `${BASE_APP_URL}/investments`;

export const TITLE =
  'YaspFi';
export const DESCRIPTION = `YaspFi is a one-stop shop for everything DeFi`;

export const colors = {
  primaryDarkBlue: `#171D25`,
  secondaryDarkBlue: `#2C3542`,
  darkBlue: `#1E242D`,
  mediumDarkGray: `#7D7D7D`,
  mediumDarkBlue: `#384455`,
  selectedDarkBlue: `#232A35`,
  white: `#FFFFFF`,
  orange: `#EF9011`,
  lightPink: `#FF8BB3`,
  blue: `#0085FF`,
  semiLightBlue: `#0078E6`,
  lightBlue: `#1991FF`,
  disabledBlue: `#165CA0`,
  lightRed: `#E85555`,
  errorRed: `#FF5151`,
  green: `#1DC981`,
};

export const whiteLoaderColorsSet: string[] = [
  `#fff`,
  `#fff`,
  `#fff`,
  `#fff`,
  `#fff`,
];

export const breakPointsConf = {
  isMobile: `(max-width: 768px)`,
  isTablet: `(max-width: 1280px)`, // only js and avoid to use it as much as you can, it can cause css media query confuse
  isPc: `(max-width: 99999px)`,
}; // order is important cause only one condition will result true detected by browser
