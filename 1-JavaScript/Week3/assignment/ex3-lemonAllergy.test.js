'use strict';

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(basketOfFruits, allergicFruit) {
  if (!allergicFruit) return basketOfFruits;
  return basketOfFruits.filter((fruit) => fruit !== allergicFruit);
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    const actual = sanitizeFruitBasket(fruitBasket);
    expect(originalFruitBasketContents).toEqual(actual);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const alergicFruit = 'lemon';
    const actual = sanitizeFruitBasket(fruitBasket, alergicFruit);

    expect(false).toEqual(actual.includes(alergicFruit));
  });
});
