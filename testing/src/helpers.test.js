import { roundToNearestQuarter } from '../../helpers/helpers.js';

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