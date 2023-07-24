import { Menu, Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { GoTriangleDown } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

export type Option = {
  icon: React.ReactNode;
  label: string;
  key: string;
};

export type DropdownButtonProps = {
  selected: string;
  options: Option[];
} & React.ComponentPropsWithRef<'button'>;

const DropdownMenu = ({
  options,
  defaultSelected,
  onChange,
}: {
  options: Option[];
  defaultSelected: number;
  onChange: (option: Option) => void;
}) => {
  const [selected, setSelected] = useState<number>(defaultSelected);

  const onSelectedChange = (index: number) => {
    onChange(options[index]);
    setSelected(index);
  };

  useEffect(() => {
    if (!selected) return;
    onChange(options[selected]);
  }, [selected]);

  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <Menu.Items className='absolute right-0 z-10 sm:mt-1 lg:mt-2 w-56 origin-top-right divide-y divide-primary-100 rounded-md bg-white shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none'>
        {options.map(({ label, icon, key }, index) => (
          <div className='py-1 justify-center items-center flex' key={key}>
            <Menu.Item>
              <a
                onClick={() => onSelectedChange(index)}
                className={clsxm(
                  selected === index
                    ? 'bg-grey-100 text-black-900'
                    : 'text-black-700',
                  'w-11/12 my-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 sm:test-sm md:text-md rounded-md lg:text-lg font-regular cursor-pointer hover:bg-primary-100 inline-flex items-center'
                )}
              >
                <div className='w-9'>{icon}</div>
                <span className='sm:ml-2 lg:ml-3'>{label}</span>
              </a>
            </Menu.Item>
          </div>
        ))}
      </Menu.Items>
    </Transition>
  );
};

const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>(
  (props, ref) => {
    const { options, selected } = props;

    const defaultSelectedOption = options.find(
      (option) => option.key === selected
    );

    const [selectedOption, setSelectedOption] = useState<Option>(
      defaultSelectedOption ?? options[0]
    );

    const onChange = (option: Option) => {
      setSelectedOption(option);
    };

    const { icon, label } = selectedOption;
    return (
      <Menu as='div' className='relative font-primary inline-block text-left'>
        <div>
          <Menu.Button ref={ref} className='h-max w-full'>
            <div className='inline-flex items-center justify-center rounded bg-white sm:test-sm md:text-md lg:text-lg font-regular text-black shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50'>
              <div className='inline-flex items-center justify-between gap-x-4 sm:pl-4 sm:pr-3 sm:py-2 lg:pl-5 lg:pr-4 lg:py-3'>
                <div className='w-9'>{icon}</div>
                {label ?? 'Select'}
              </div>
              <div className='inline-block h-100 min-h-[1em] w-border-md self-stretch bg-primary opacity-100 dark'></div>
              <div className='sm:pr-4 sm:py-2 sm:pl-2 lg:pr-5 lg:py-3 lg:pl-3'>
                <GoTriangleDown className='fill-primary' />
              </div>
            </div>
          </Menu.Button>
        </div>
        <DropdownMenu
          options={options}
          defaultSelected={0}
          onChange={onChange}
        />
      </Menu>
    );
  }
);

export default DropdownButton;
