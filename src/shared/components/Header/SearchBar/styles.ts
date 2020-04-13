import styled, { keyframes } from 'styled-components';

const translateY = keyframes`
  from {
    transform: translateY(-100%)
  }

  to {
    transform: translateY(0)
  }
`;

export const SearchBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 10;
  animation: ${translateY} 0.3s both;
`;

export const LabelIcon = styled.label`
  margin-right: 10px;
`;

export const FormWrapper = styled.form`
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
      color: #b1b1b1;
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
