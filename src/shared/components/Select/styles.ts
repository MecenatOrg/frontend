import styled from 'styled-components';
import Colors from 'shared/colors';
import media from 'shared/media-types';

type SelectProps = {
  isOpenedSelect: boolean;
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
  padding: 13px 22px 12px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  overflow: visible;
  margin-bottom: 14px;
  border: 1px solid ${({ isOpenedSelect }: SelectProps): string => (isOpenedSelect ? Colors.BLACK : 'transparent')};
  ${({ isOpenedSelect }: SelectProps): string => (isOpenedSelect ? dropdownTransformRotate : '')};
  ${media.mobileMax} {
    height: 54px;
  }
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
  z-index: 1;
`;

export const SelectItemsListItem = styled.div`
  width: 100%;
  padding: 13px 20px 14px;
  border-bottom: 1px solid ${Colors.GREY_ULTRA_LIGHT};
  ${selectFontStyle};
  color: ${Colors.BLACK};
  cursor: pointer;
  &:hover {
    background-color: ${Colors.GREY_ULTRA_LIGHT};
  }
  &:last-child {
    border-bottom: none;
  }
`;
