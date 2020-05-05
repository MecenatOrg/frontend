import React from 'react';

import Colors from 'shared/colors';

import { Size } from 'config/configEnums';
import { ShapeProps } from './types';

const RectangleOvalToRight: React.FC<ShapeProps> = ({ size, fill, className }: ShapeProps) => {
  const getWidth = (): number => {
    if (size === Size.EXTRA_LARGE) return 402;
    if (size === Size.LARGE) return 242;
    if (size === Size.MEDIUM) return 202;
    return 170;
  };

  const getHeight = (): number => {
    if (size === Size.EXTRA_LARGE) return 459;
    if (size === Size.LARGE) return 276;
    if (size === Size.MEDIUM) return 230;
    return 194;
  };

  return (
    <svg
      className={className}
      width={getWidth()}
      height={getHeight()}
      viewBox="0 0 170 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H170V194H0C0 194 11.1027 119.828 11.1027 81.573C11.1027 43.3184 0 0 0 0Z"
        fill={fill || Colors.YELLOW_DARK}
      />
    </svg>
  );
};
export default RectangleOvalToRight;
