import React from 'react';

const RectangleOvalToRight: React.FC<ShapeProps> = ({ size }: ShapeProps) => {
  const getWidth = (): number => {
    if (size === 'large') return 242;
    if (size === 'medium') return 202;
    return 170;
  };

  const getHeight = (): number => {
    if (size === 'large') return 276;
    if (size === 'medium') return 230;
    return 194;
  };

  return (
    <svg width={getWidth()} height={getHeight()} viewBox="0 0 170 194" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H170V194H0C0 194 11.1027 119.828 11.1027 81.573C11.1027 43.3184 0 0 0 0Z"
        fill="#FFD167"
      />
    </svg>
  );
};
export default RectangleOvalToRight;
