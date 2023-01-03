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

import exampleData from '../../exampleData/exampleData';

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

  /***** STYLE ICON *****/

  describe('StyleIcon', () => {
    const renderStyleIcon = (currentlySelected = true, onClick) => {
      ReactDOM.render(
        <StyleIcon
          currentStyle={currentlySelected}
          style={exampleData.styles71697.results[0]}
          onClick={onClick}
        />,
        container
      );
    }

    it('should render StyleIcon component to the DOM', () => {
      act(renderStyleIcon);
      expect(container.querySelector('.style-icon')).not.toBe(null);
    });
    it('should have className "currently-selected" if style is currentStyle', () => {
      act(renderStyleIcon);
      expect(container.querySelector('.style-icon').className.split(' ')).toContain('currently-selected');
    });
    it('should not have className "currently-selected if style is not currentStyle', () => {
      act(() => renderStyleIcon(false));
      expect(container.querySelector('.style-icon').className.split(' ')).not.toContain('currently-selected');
    });
    it('should handle click', () => {
      const onClick = jest.fn();
      act(() => renderStyleIcon(true, onClick));
      act(() => {
        container.querySelector('.style-icon').dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  /***** CLICKABLE STAR*****/

  describe('ClickableStar', () => {
    let outfit = {};
    const addToOutfit = jest.fn(item => outfit[item] ? outfit[item] += 1 : outfit[item] = 1);
    const removeFromOutfit = jest.fn(item => {
      if (outfit[item]) {
        outfit[item] -= 1;
      };
    });

    const renderClickableStar = (inOutfit = false) => {
      ReactDOM.render(
        <ClickableStar
          inOutfit={inOutfit}
          removeFromOutfit={removeFromOutfit}
          addToOutfit={addToOutfit}
        />,
        container
      );
    }

    afterEach(() => {
      outfit = {};
    });

    it('should render to the DOM', () => {
      act(renderClickableStar);
      expect(document.querySelector('.clickable-star')).not.toBe(null);
    });
    it('should display hollow star if not inOutfit', () => {
      act(() => renderClickableStar(false));
      expect(document.querySelector('.clickable-star').textContent).toBe('☆');
    });
    it('should display solid star if inOutfit', () => {
      act(() => renderClickableStar(true));
      expect(document.querySelector('.clickable-star').textContent).toBe('⭐');
    });
    it.todo('should toggle the star on click');
    it('should call removeFromOutfit on click if item is in outfit', () => {
      act(() => renderClickableStar(true));
      act(() => {
        container.querySelector('.clickable-star').dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(removeFromOutfit).toHaveBeenCalledTimes(1);
      expect(addToOutfit).toHaveBeenCalledTimes(0);
    });
    it('should call addToOutfit on click if item is not in outfit', () => {
      act(() => renderClickableStar(false));
      act(() => {
        container.querySelector('.clickable-star').dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(addToOutfit).toHaveBeenCalledTimes(1);
      // NEED MORE ISOLATION IN TESTS...THIS FUNCTION HAS TECHNICALLY BEEN CALLED
      // FROM PREVIOUS TEST:
      // expect(removeFromOutfit).toHaveBeenCalledTimes(0);
    });
    // it('should rerender when props change', () => {
    //   act(renderClickableStar);

    // });
  });
});