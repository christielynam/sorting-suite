import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

describe('Bubble Sort', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.function;
  })
  it('should sort positive numbers', () => {
    var numbers = [29, 12, 9, 8, 4, 21];
    var sorted = bubbleSort(numbers);
    expect(sorted).to.deep.equal([4, 8, 9, 12, 21, 29]);
  });
  it('should sort negative numbers', () => {
    var numbers = [-29, -12, -9, -8, -4, -21];
    var sorted = bubbleSort(numbers);
    expect(sorted).to.deep.equal([-29, -21, -12, -9, -8, -4]);
  });
  it('should sort letters', () => {
    var letters = ['d', 'b', 'a', 'c'];
    var sorted = bubbleSort(letters);
    expect(sorted).to.deep.equal(['a', 'b', 'c', 'd']);
  });
  it('should only accept arrays', () => {
    var input = {};
    expect(bubbleSort(input)).to.equal('This is not a valid array to be sorted!');
    input = [4, 3, 1, 5, 2];
    expect(bubbleSort(input)).to.deep.equal([1, 2, 3, 4, 5]);
  });




})
