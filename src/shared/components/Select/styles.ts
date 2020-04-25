import styled from 'styled-components';
import Colors from 'shared/colors';

type SelectProps = {
  openedSelect: boolean;
};

const selectFontStyle = `
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const dropdownTransformRotate = `
  svg {
    transform: rotate(180deg);
  }
`;

export const SelectWrapper = styled.div<SelectProps>`
  position: relative;
  background-color: ${Colors.WHITE};
  padding: 14px 22px 13px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  overflow: visible;
  border: 1px solid ${({ openedSelect }: SelectProps): string => (openedSelect ? Colors.BLACK : 'transparent')};

  ${({ openedSelect }: SelectProps): string => (openedSelect ? dropdownTransformRotate : '')};
`;
export const SelectedWrapper = styled.span`
  ${selectFontStyle};
  color: ${Colors.BLACK};
`;

export const SelectItemsList = styled.div`
  width: 100%;

  position: absolute;
  top: 47px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${Colors.WHITE};
`;

export const SelectItemsListItem = styled.div`
  width: 100%;
  padding: 13px 20px 14px;
  border-bottom: 1px solid ${Colors.LIGHT};
  ${selectFontStyle};
  color: ${Colors.BLACK};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.LIGHT};
  }
  &:last-child {
    border-bottom: none;
  }
`;
