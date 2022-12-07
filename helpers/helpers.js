// THIS FILE IS FOR HELPER FUNCTIONS

const roundToNearestQuarter = (rating) => {
  const intRating = Math.round(rating * 100) // Integer rating from 0 - 500
  const quarters = Math.floor(intRating / 25);
  const remainder = intRating % 25;
  return remainder >= 13 ? (quarters + 1) * 0.25 : quarters * 0.25;
}

module.exports = {
  roundToNearestQuarter
};