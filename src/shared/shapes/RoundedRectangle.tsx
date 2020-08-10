import React from 'react';

import { ShapeProps } from './types';
import Colors from 'shared/colors';

const RoundedRectangle: React.FC<ShapeProps> = ({ fill, className }: ShapeProps) => (
  <svg
    className={className}
    width="157"
    height="172"
    viewBox="0 0 157 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M107.189 0.941162H2.60626C2.60626 0.941162 -4.49161 42.033 7.74197 87.0812C19.9756 132.129 49.0042 171.794 49.0042 171.794H156.45C156.45 171.794 125.211 127.3 113.615 87.0812C102.019 46.8622 107.189 0.941162 107.189 0.941162Z"
      fill={fill || Colors.BLUE_NAVY}
    />
  </svg>
);
export default RoundedRectangle;
