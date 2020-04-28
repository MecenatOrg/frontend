enum MediaTypes {
  MOBILE = '576',
  TABLET = '768',
  TABLET_L = '992',
  TABLET_XL = '1024',
  DESKTOP = '1920',
}

const customMediaQueryMax = (width: MediaTypes): string => `@media (max-width: ${width}px)`;
const customMediaQueryMin = (width: MediaTypes): string => `@media (min-width: ${width}px)`;

/* please extend it with customMediaQueryMinMax or customMediaQueryMaxMin if you have some specific cases */

export const media: { [key: string]: string } = {
  mobileMax: customMediaQueryMax(MediaTypes.MOBILE),
  mobileMin: customMediaQueryMin(MediaTypes.MOBILE),
  tabletMax: customMediaQueryMax(MediaTypes.TABLET),
  tabletMin: customMediaQueryMin(MediaTypes.TABLET),
  tabletLMax: customMediaQueryMax(MediaTypes.TABLET_L),
  tabletLMin: customMediaQueryMin(MediaTypes.TABLET_L),
  tabletXLMax: customMediaQueryMax(MediaTypes.TABLET_XL),
  tabletXLMin: customMediaQueryMin(MediaTypes.TABLET_XL),
  desktopMax: customMediaQueryMax(MediaTypes.DESKTOP),
  desktopMin: customMediaQueryMin(MediaTypes.DESKTOP),
};

export default media;
