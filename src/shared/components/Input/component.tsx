import React from 'react';
import { InputRootContainer, InputContainer, InputWrapper, InputValidationMessage, InputGroupButton } from './styles';
import { SendIcon } from 'shared/icons';

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  inputType: string;
  validationState: boolean;
  validationMessage: string;
  includeSendButton?: boolean;
  onSend?: (e: React.MouseEvent) => void;
};

const Input: React.FC<InputProps> = ({
  includeSendButton,
  inputType,
  validationState,
  validationMessage,
  onSend,
  ...attrs
}: InputProps) => {
  return (
    <InputRootContainer>
      <InputContainer>
        <InputWrapper
          includeSendButton={includeSendButton}
          validationState={validationState}
          type={inputType}
          {...attrs}
        />
        {validationState ? <InputValidationMessage>{validationMessage}</InputValidationMessage> : ''}
      </InputContainer>
      {includeSendButton ? (
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
