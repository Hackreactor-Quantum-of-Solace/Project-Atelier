import exampleData from '../../exampleData/exampleData.js';
import { roundToNearestQuarter, getSizeInfoForStyle } from '../../helpers/helpers.js';

/***** Unit Tests for roundToNearestQuarter helper function *****/

describe('roundToNearestQuarter', function() {
  it('should round numbers to nearest quarter of a point', function() {
    expect(roundToNearestQuarter(3)).toBe(3);
    expect(roundToNearestQuarter(1.25)).toBe(1.25);
    expect(roundToNearestQuarter(2.75)).toBe(2.75);
    expect(roundToNearestQuarter(2.73)).toBe(2.75);
    expect(roundToNearestQuarter(3.402342)).toBe(3.5);
    expect(roundToNearestQuarter(3.12)).toBe(3);
    expect(roundToNearestQuarter(3.13)).toBe(3.25);
  });
});

describe('getSizeInfoForStyle', () => {
  it('should return an object with sku and quantity info for each size key', () => {
    let style = exampleData.styles71697.results[0];
    let sizeInfo = getSizeInfoForStyle(style);
    expect(Object.keys(sizeInfo)).not.toBe(null);
    expect(Object.keys(sizeInfo).length).toBe(6);
    expect(sizeInfo.XS.sku).toBe('2580526');
    expect(sizeInfo.XS.quantity).toBe(8);
  });
})