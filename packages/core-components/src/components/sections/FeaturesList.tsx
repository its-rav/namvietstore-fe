import React from 'react';

import ServiceCard, {
  type ServiceCardItemType,
} from '@/components/ServiceCard';

export type FeaturesListItemType = ServiceCardItemType & {
  id: number;
};

type FeaturesListProps = {
  items: FeaturesListItemType[];
};

const FeaturesList: React.FC<FeaturesListProps> = ({ items }) => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center justify-between'>
      {items.map((item) => (
        <ServiceCard key={item.id} serviceCardItem={item} />
      ))}
    </div>
  );
};

export default FeaturesList;
