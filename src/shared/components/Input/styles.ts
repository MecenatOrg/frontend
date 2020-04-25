import styled from 'styled-components';
import Colors from 'shared/colors';
import media from 'shared/media-types';

type InputStyleProps = {
  withSend?: boolean;
  validationState?: boolean;
  validationMessage?: string;
};

export const InputRootContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const InputWrapper = styled.input<InputStyleProps>`
  ${({ withSend }: InputStyleProps): string => `height: ${withSend ? '38px' : '44px'}`};
  width: 100%;
  ${({ withSend }: InputStyleProps): string => `padding: ${withSend ? '12px 20px 11px' : '13px 23px 14px 20px'}`};
  ${({ validationState }: InputStyleProps): string =>
    `border: 1px solid ${!validationState ? 'transparent' : Colors.VALIDATION_ERROR}`};
  ${({ validationState }: InputStyleProps): string => `margin-bottom: ${!validationState ? '14px' : '2px'}`};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  background: ${Colors.WHITE};
  color: ${Colors.BLACK};
  &:focus {
    border: 1px solid ${Colors.BLACK};
  }
  &::placeholder {
    color: ${Colors.BLACK};
  }
  ${media.mobileMax} {
    ${({ withSend }: InputStyleProps): string => `height: ${withSend ? '38px' : '54px'}`};
    width: 100%;
    padding: 17px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    max-width: 335px;
  }
`;

export const InputValidationMessageWrapper = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${Colors.VALIDATION_ERROR};
`;

export const InputGroupButton = styled.button`
  background-color: ${Colors.ORANGE_DARK};
  height: 38px;
  min-width: 38px;
  margin-left: 3px;
  border: none;
`;
