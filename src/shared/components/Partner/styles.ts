import styled from 'styled-components';
import MediaTypes from 'shared/media-types';

export const PartnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  padding: 35px 60px;
  background: #ffffff;
  margin-top: 14px;
  @media (max-width: ${MediaTypes.MOBILE}) {
    padding: 22px 37px;
  }
  &:hover {
    box-shadow: 0px 20px 30px rgba(233, 229, 221, 0.6);
  }
`;
export const ImageElement = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
