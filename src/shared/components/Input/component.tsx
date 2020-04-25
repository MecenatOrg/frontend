import React from 'react';
import {
  InputRootContainer,
  InputContainer,
  InputWrapper,
  InputValidationMessageWrapper,
  InputGroupButton,
} from './styles';
import { SendIcon } from '../../icons';

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  inputType: string;
  validationState: boolean;
  validationMessage: string;
  withSend?: boolean;
  onSend?: (e: React.MouseEvent) => void;
};

const Input: React.FC<InputProps> = ({
  withSend,
  inputType,
  validationState,
  validationMessage,
  onSend,
  ...attrs
}: InputProps) => {
  return (
    <InputRootContainer>
      <InputContainer>
        <InputWrapper withSend={withSend} validationState={validationState} type={inputType} {...attrs} />
        {validationState ? <InputValidationMessageWrapper>{validationMessage}</InputValidationMessageWrapper> : ''}
      </InputContainer>
      {withSend ? (
        <InputGroupButton onClick={onSend}>
          <SendIcon />
        </InputGroupButton>
      ) : (
        ''
      )}
    </InputRootContainer>
  );
};

export default Input;
