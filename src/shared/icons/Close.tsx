import React from 'react';
import { IconProps } from './types';

const CloseIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9.22168" y="7.80762" width="24" height="2" transform="rotate(45 9.22168 7.80762)" fill="black" />
      <rect
        opacity="0.9"
        x="26.1924"
        y="9.22168"
        width="24"
        height="2"
        transform="rotate(135 26.1924 9.22168)"
        fill="black"
      />
    </svg>
  );
};

export default CloseIcon;
