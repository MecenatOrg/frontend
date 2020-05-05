import { Size } from 'config/configEnums';
import Colors from 'shared/colors';

export type ShapeProps = {
  size: Size;
  fill?: Colors;
  className?: string;
};
