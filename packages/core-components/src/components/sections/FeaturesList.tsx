import React from 'react';

import FeaturesCard, {
  type FeaturesCardItemType,
} from '@/components/FeaturesCard';

export type FeaturesListItemType = FeaturesCardItemType & {
  id: number;
};

type FeaturesListProps = {
  items: FeaturesListItemType[];
};

const FeaturesList: React.FC<FeaturesListProps> = ({ items }) => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center justify-between'>
      {items.map((item) => (
        <FeaturesCard key={item.id} featuresCardItem={item} />
      ))}
    </div>
  );
};

export default FeaturesList;
