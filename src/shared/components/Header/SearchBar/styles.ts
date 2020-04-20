import styled from 'styled-components';
import Colors from 'shared/colors';

type StyleProps = {
  isOpenSearch: boolean;
};

export const SearchBarWrapper = styled.div<StyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: ${Colors.WHITE};
  z-index: 10;
  transform: translateY(-100%);
  ${({ isOpenSearch }: StyleProps): string => `transform: translateY(${isOpenSearch ? '0' : '-100%'})`};
  transition: transform 0.3s;
`;

export const LabelIcon = styled.label`
  margin-right: 10px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    border: 0;
    font-size: 14px;
    line-height: 1;
    outline: none;
    flex-grow: 1;
    font-weight: 500;
    &::placeholder {
      font-size: 14px;
      font-weight: 500;
      color: ${Colors.LIGHT_GREY};
      line-height: 1;
    }
  }
`;

export const ButtonClose = styled.button`
  display: block;
  padding: 0;
  width: 34px;
  height: 34px;
  background-color: transparent;
  border: 0;
`;
