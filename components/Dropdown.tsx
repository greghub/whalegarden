"use client"
import React from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

import { useClickOutside } from '@/hooks/useClickOutside';
import { Account, NonEmptyArray } from '@/utils/types';

export type DropdownItemType = {
  id: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface DropdownProps {
  onSelect: (selectedAccount: Account) => void;
  items: NonEmptyArray<DropdownItemType>;
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const DropdownItem = ({ children, onClick }: DropdownItemProps) => {
  return <a onClick={onClick} href="#" className="flex items-start gap-3 text-gray-700 px-4 py-2 text-sm hover:bg-slate-100" role="menuitem" tabIndex={-1} id="menu-item-0">{children}</a>
}

export const Dropdown = ({ items, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const nodeRef = React.useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false)
  };

  const ref = useClickOutside(handleClickOutside);

  const [selectedItem, setSelectedItem] = React.useState(items[0]);

  const handleSelect = (e: React.MouseEvent, item: DropdownItemType) => {
    if (selectedItem.id === item.id) return;

    e.preventDefault();
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(selectedItem as Account);
  }

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="group inline-flex w-full items-center justify-center gap-x-2 rounded-md px-3 py-2 text-lg font-semibold text-gray-900 hover:shadow-sm hover:ring-1 hover:ring-inset hover:ring-gray-300 hover:bg-gray-50 transition-all" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {selectedItem.icon && <Image src={selectedItem.icon} alt={`${selectedItem.label} icon`} width="24" height="24" className="flex-shrink-0" />}
          {selectedItem.label}
          {selectedItem.description && <span className="text-sm text-slate-500">({selectedItem.description})</span>}
          <svg className={`-mr-1 h-5 w-5 text-gray-400 transition-all duration-300 ease opacity-60 group-hover:opacity-100 ${isOpen && 'rotate-180'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={200} classNames="fade">
        <div ref={nodeRef}>
          {isOpen && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1.5" role="none">
              {items.map((item) => (
                <DropdownItem key={item.id} onClick={(e) => handleSelect(e, item)}>
                  {item.icon && <Image src={item.icon} alt={`${item.label} icon`} width="24" height="24" className="flex-shrink-0 mt-1" />}
                  <div>
                    <div>{item.label}</div>
                    {item.description && <div className="text-xs text-slate-500">{item.description}</div>}
                  </div>
                </DropdownItem>
              ))}
            </div>
          </div>}
        </div>
      </CSSTransition>
    </div>
  )
}