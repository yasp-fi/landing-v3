import { providerTypes } from '@yasp/models';
import { Bold18x36 } from '../kit/typography';
import { Row } from '../kit/layout';
import React from 'react';
import styled from 'styled-components';

type CategoryBadgeProps = {
  categoryText: string;
};

export function mapCategoryText(category: string) {
  const providerCategory = providerTypes.find((type) => type === category);

  switch (providerCategory) {
    case `lending`:
      return `Lending`;
    case `cdp`:
      return `CDP`;
    case `liquid-staking`:
      return `Liquid Staking`;
    case `bridge`:
      return `Bridge`;
    case `yield`:
      return `Yield`;
    case `derivatives`:
      return `Derivatives`;
    case `cex`:
      return `CEX`;
    case `staking`:
      return `Staking`;
    case `options`:
      return `Options`;
    case `synthetics`:
      return `Synthetics`;
    case `algo-stables`:
      return `Algo Stables`;
    case `prices`:
      return `Prices`;
    case `dex`:
      return `DEX`;
    default:
      return category;
  }
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  categoryText,
}) => {
  return (
    <CategoryBadgeContainer $alignItems={`center`} $justifyContent={`center`}>
      <Bold18x36>{mapCategoryText(categoryText)}</Bold18x36>
    </CategoryBadgeContainer>
  );
};

const CategoryBadgeContainer = styled(Row)`
  height: 35px;
  border-radius: 60px;
  padding: 4px 12px;
  background-color: #353f4e;
`;
