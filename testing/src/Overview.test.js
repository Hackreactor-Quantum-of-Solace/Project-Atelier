import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const OV_COMPS_DIR = '../../client/src/components/overview';

import Overview from '../../client/src/components/Overview.jsx';
import AddToCart from '../../client/src/components/overview/AddToCart.jsx';
import ClickableStar from '../../client/src/components/overview/ClickableStar.jsx';
import ImageGallery from '../../client/src/components/overview/ImageGallery.jsx';
import ProductInfo from '../../client/src/components/overview/ProductInfo.jsx';
import QuantitySelector from '../../client/src/components/overview/QuantitySelector.jsx';
import SizeSelector from '../../client/src/components/overview/SizeSelector.jsx';
import StarRating from '../../client/src/components/overview/StarRating.jsx';
import StyleIcon from '../../client/src/components/overview/StyleIcon.jsx';
import StyleSelector from '../../client/src/components/overview/StyleSelector';

import exampleData from '../../exampleData/exampleData.json';

/***** React Component Tests *****/

describe('Overview Component and Subcomponents', function() {
  let container = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('StyleIcon', () => {
    it('should render StyleIcon component to the DOM', () => {
      render(<StyleIcon currentStyle={exampleData.styles71697.results[0]} />, container);
      expect(container.querySelector('.style-icon')).not.toBe(null);
    });
  })
});