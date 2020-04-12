import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Partner from './component';

const { getByAltText } = render(<Partner imageSrc="partnerLogo.png" imageAlt="partner" />);
test('partner card init', () => {
  const partnerCardElement = getByAltText(/partner/i);
  expect(partnerCardElement).toBeInTheDocument();
});
