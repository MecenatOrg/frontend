import styled from 'styled-components';
import media from 'shared/media-types';
import { ContactFormBackground } from 'shared/images';

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0 34px;
  background: transparent url(${ContactFormBackground}) no-repeat center;
  height: 285px;
  margin-bottom: 180px;
  h4 {
    text-align: center;
    margin-bottom: 34px;
  }
  ${media.tabletMax} {
    height: auto;
    background-size: cover;
    margin-bottom: 120px;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 11px;
  }
`;
export const SendButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: auto;
  }
`;
