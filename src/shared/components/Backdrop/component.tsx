import React from 'react';

import { BackdropWrapper, BackdropEmptyContent } from './styles';

type BackdropProps = {
  show?: boolean;
  children: React.ReactNode;
};

const Backdrop: React.FC<BackdropProps> = ({ show = true, children }: BackdropProps) => (
  <>
    <BackdropWrapper show={show}>{children}</BackdropWrapper>
    <BackdropEmptyContent />
  </>
);

export default Backdrop;
