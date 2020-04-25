import React, { useState } from 'react';
import { SelectedWrapper, SelectWrapper, SelectItemsList, SelectItemsListItem } from './styles';
import { DropdownIcon } from '../../icons';

export type SelectProps = {
  placeholder: string;
  options: SelectItem[];
  onSelect: (value: string) => void;
};

export type SelectItem = {
  value: string;
  name: string;
};

const Select: React.FC<SelectProps> = ({ placeholder, options, onSelect }: SelectProps) => {
  const [openedSelect, setOpenedSelect] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>(placeholder);
  function openItemListClickHandler(): void {
    setOpenedSelect(!openedSelect);
  }

  return (
    <SelectWrapper openedSelect={openedSelect} onClick={openItemListClickHandler}>
      <SelectedWrapper>{selectedText}</SelectedWrapper>
      <DropdownIcon />
      {openedSelect ? (
        <SelectItemsList>
          {options.map((option: SelectItem, i: number) => (
            <SelectItemsListItem
              key={i}
              onClick={(): void => {
                setSelectedText(option.name);
                onSelect(option.value);
              }}
            >
              {option.name}
            </SelectItemsListItem>
          ))}
        </SelectItemsList>
      ) : (
        ''
      )}
    </SelectWrapper>
  );
};

export default Select;
