import React from 'react';

type SideBarMobileProps = {
  closeButtonIcon: React.ReactNode;
  handleCloseButtonClicked: () => void;
  dropDownIcon?: React.ReactNode;
  items: SideBarMobileItemProps[];
};

export type SideBarMobileItemProps = {
  title: string;
  url: string;
  icon?: React.ReactNode;
  handleSideBarItemClicked?: () => void;
  subItems?: {
    title: string;
    url: string;
  };
};

const SideBarMobileItem: React.FC<SideBarMobileItemProps> = ({
  title,
  handleSideBarItemClicked,
  icon,
  subItems,
}) => {
  return (
    <div className='w-full text-xl flex justify-between font-primary font-semibold px-5 py-4 my-5 text-white'>
      <button onClick={handleSideBarItemClicked}>{title}</button>
      {subItems && <i className='w-10 h-10'>{icon}</i>}
    </div>
  );
};

const SideBarMobile: React.FC<SideBarMobileProps> = ({
  handleCloseButtonClicked,
  closeButtonIcon,
  items,
  dropDownIcon,
}) => {
  const handleSideBarItemClicked = () => {
    window.alert('clicked');
  };

  return (
    <div className='bg-primary w-full flex flex-col items-center py-9 rounded'>
      <div className=' w-full px-5'>
        <button
          className='float-right w-12 h-12'
          onClick={handleCloseButtonClicked}
        >
          <i>{closeButtonIcon}</i>
        </button>
      </div>
      {items.map((item) => (
        <SideBarMobileItem
          key={item.title}
          icon={dropDownIcon}
          handleSideBarItemClicked={handleSideBarItemClicked}
          {...item}
        />
      ))}
    </div>
  );
};

export default SideBarMobile;
