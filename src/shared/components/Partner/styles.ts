import styled from 'styled-components';

export const PartnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background: #ffffff;
  &:hover {
    box-shadow: 0px 20px 30px rgba(233, 229, 221, 0.6);
  }
`;
export const ImageElement = styled.img`
  display: block;
  width: 140px;
  height: auto;

  @media (max-width: 576px) {
    width: 88.45px;
  }
`;
