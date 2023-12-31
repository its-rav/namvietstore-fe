import React, { useState } from 'react';

import { ListBulletIcon, Square2x2Icon } from '@/icons';

type ButtonChangeLayoutProps = {
  onChangePageLayout?: (isList: boolean) => void;
};

const ButtonChangeLayout: React.FC<ButtonChangeLayoutProps> = ({
  onChangePageLayout,
}) => {
  const [isListLayout, setListLayout] = useState(false);

  const changePageLayout = () => {
    setListLayout(!isListLayout);
    onChangePageLayout?.(!isListLayout);
  };
  return (
    <button onClick={changePageLayout}>
      {isListLayout ? (
        <ListBulletIcon className='w-5 h-5' />
      ) : (
        <Square2x2Icon className='w-5 h-5' />
      )}
    </button>
  );
};
export default ButtonChangeLayout;
