import React from 'react';

import { ShapeProps } from './types';

const Oval: React.FC<ShapeProps> = ({ size, fill }: ShapeProps) => {
  const getSize = (): number => {
    if (size === 'large') return 246;
    if (size === 'medium') return 240;
    return 193;
  };

  return (
    <svg width={getSize()} height={getSize()} viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.4054 192.811C149.649 192.811 192.811 149.649 192.811 96.4054C192.811 43.1622 149.649 0 96.4054 0C43.1622 0 0 43.1622 0 96.4054C0 149.649 43.1622 192.811 96.4054 192.811Z"
        fill={fill}
      />
    </svg>
  );
};
export default Oval;
