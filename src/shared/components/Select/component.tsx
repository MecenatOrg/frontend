import React, { useState } from 'react';
import { SelectedWrapper, SelectWrapper, SelectItemsList, SelectItemsListItem } from './styles';
import { DropdownIcon } from 'shared/icons';
import { SelectProps, SelectItem } from 'shared/types';

const Select: React.FC<SelectProps> = ({ placeholder, options, onSelect }: SelectProps) => {
  const [isOpenedSelect, setIsOpenedSelect] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>(placeholder);
  function openItemListClickHandler(): void {
    setIsOpenedSelect(!isOpenedSelect);
  }

  return (
    <SelectWrapper isOpenedSelect={isOpenedSelect} onClick={openItemListClickHandler}>
      <SelectedWrapper>{selectedText}</SelectedWrapper>
      <DropdownIcon />
      {isOpenedSelect ? (
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
