enum Size {
  MOBILE = 576,
  TABLET_M = 768,
  TABLET_L = 1024,
  DESKTOP = 1920,
}

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media: { [key: string]: string } = {
  mobile: customMediaQuery(Size.MOBILE),
  tabletM: customMediaQuery(Size.TABLET_M),
  tabletL: customMediaQuery(Size.TABLET_L),
  desktop: customMediaQuery(Size.DESKTOP),
};
