import React from 'react';

type SideBarMobileProps = {
  closeButtonIcon: React.ReactNode;
  onCloseBtnClick: () => void;
  onSideBarItemClick: (url: string) => void;
  dropDownIcon?: React.ReactNode;
  sideBarItems: SideBarMobileItemProps[];
};

export type SideBarMobileItemProps = {
  title: string;
  url: string;
  dropDownIcon?: React.ReactNode;
  onSideBarItemClick?: (url: string) => void;
  subItems?: SideBarMobileItemProps[];
};

const SideBarMobileItem: React.FC<SideBarMobileItemProps> = ({
  title,
  onSideBarItemClick,
  dropDownIcon,
  subItems,
  url,
}) => {
  const [itemOpen, setItemOpen] = React.useState(false);

  const openSubItems = () => {
    setItemOpen(!itemOpen);
  };

  const renderSubItems = () => {
    if (subItems && subItems.length > 0 && itemOpen) {
      return (
        <ul className={`pl-6`}>
          {subItems.map((subItem) => (
            <SideBarMobileItem
              key={subItem.title}
              dropDownIcon={dropDownIcon}
              onSideBarItemClick={onSideBarItemClick}
              {...subItem}
            />
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className='w-full text-xl justify-between font-primary font-semibold my-5 text-white'>
      {subItems ? (
        <button
          onClick={openSubItems}
          className='flex w-full items-center justify-between'
        >
          {title}
          <i
            className={`w-10 h-10 transition-transform ${
              itemOpen ? 'rotate-90' : ''
            }`}
          >
            {dropDownIcon}
          </i>
        </button>
      ) : (
        <button onClick={() => onSideBarItemClick?.(url)}>{title}</button>
      )}
      {renderSubItems()}
    </div>
  );
};

const SideBarMobile: React.FC<SideBarMobileProps> = ({
  onCloseBtnClick,
  onSideBarItemClick,
  closeButtonIcon,
  sideBarItems,
  dropDownIcon,
}) => {
  return (
    <div className='bg-primary fixed top-0 left-0 w-full h-full px-4 flex flex-col items-center py-9'>
      <div className=' w-full'>
        <button
          className='float-right w-12 h-12'
          aria-label='Close'
          onClick={onCloseBtnClick}
        >
          <i>{closeButtonIcon}</i>
        </button>
      </div>
      {sideBarItems.map((sideBarItem) => (
        <SideBarMobileItem
          key={sideBarItem.title}
          dropDownIcon={dropDownIcon}
          onSideBarItemClick={(url) => onSideBarItemClick?.(url)}
          {...sideBarItem}
        />
      ))}
    </div>
  );
};

export default SideBarMobile;
