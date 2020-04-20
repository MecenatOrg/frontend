enum MediaTypes {
  MOBILE = '576',
  TABLET_M = '768',
  TABLET_L = '1024',
  DESKTOP = '1920',
}

const customMediaQueryMax = (width: MediaTypes): string => `@media (max-width: ${width}px)`;
const customMediaQueryMin = (width: MediaTypes): string => `@media (min-width: ${width}px)`;

/* please extend it with customMediaQueryMinMax or customMediaQueryMaxMin if you have some specific cases */

export const media: { [key: string]: string } = {
  mobileMax: customMediaQueryMax(MediaTypes.MOBILE),
  mobileMin: customMediaQueryMin(MediaTypes.MOBILE),
  tabletMMax: customMediaQueryMax(MediaTypes.TABLET_M),
  tabletMMin: customMediaQueryMin(MediaTypes.TABLET_M),
  tabletLMax: customMediaQueryMax(MediaTypes.TABLET_L),
  tabletLMin: customMediaQueryMin(MediaTypes.TABLET_L),
  desktopMax: customMediaQueryMax(MediaTypes.DESKTOP),
  desktopMin: customMediaQueryMin(MediaTypes.DESKTOP),
};

export default media;
