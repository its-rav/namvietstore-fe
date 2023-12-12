import React from 'react';

type SideBarMobileProps = {
  closeButtonIcon: React.ReactNode;
  onCloseBtnClick: () => void;
  onSideBarItemClick: () => void;
  dropDownIcon?: React.ReactNode;
  items: SideBarMobileItemProps[];
};

export type SideBarMobileItemProps = {
  title: string;
  url: string;
  dropDownIcon?: React.ReactNode;
  onSideBarItemClick?: () => void;
  subItems?: SideBarMobileItemProps[];
};

const SideBarMobileItem: React.FC<SideBarMobileItemProps> = ({
  title,
  onSideBarItemClick,
  dropDownIcon,
  subItems,
}) => {
  const [open, setOpen] = React.useState(false);

  const openSubItems = () => {
    setOpen(!open);
  };

  const renderSubItems = () => {
    if (subItems && subItems.length > 0 && open) {
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
            className={`w-10 h-10 rotate-90 transition-transform ${
              open ? 'rotate-0' : ''
            }`}
          >
            {dropDownIcon}
          </i>
        </button>
      ) : (
        <button onClick={onSideBarItemClick}>{title}</button>
      )}
      {renderSubItems()}
    </div>
  );
};

const SideBarMobile: React.FC<SideBarMobileProps> = ({
  onCloseBtnClick,
  onSideBarItemClick,
  closeButtonIcon,
  items,
  dropDownIcon,
}) => {
  return (
    <div className='bg-primary w-full px-4 flex flex-col items-center py-9 rounded'>
      <div className=' w-full'>
        <button className='float-right w-12 h-12' onClick={onCloseBtnClick}>
          <i>{closeButtonIcon}</i>
        </button>
      </div>
      {items.map((item) => (
        <SideBarMobileItem
          key={item.title}
          dropDownIcon={dropDownIcon}
          onSideBarItemClick={onSideBarItemClick}
          {...item}
        />
      ))}
    </div>
  );
};

export default SideBarMobile;
