import { expect } from 'chai';
import quickSort from '../scripts/quickSort';
import genRandNum from '../scripts/genRandNum';

describe('Quick Sort', () => {
  it('should be a function', () => {
    expect(quickSort).to.be.function;
  })
  it('should sort positive numbers', () => {
    var numbers = [29, 12, 9, 8, 4, 21];
    var sorted = quickSort(numbers);
    expect(sorted).to.deep.equal([4, 8, 9, 12, 21, 29]);
  });
  it('should sort negative numbers', () => {
    var numbers = [-29, -12, -9, -8, -4, -21];
    var sorted = quickSort(numbers);
    expect(sorted).to.deep.equal([-29, -21, -12, -9, -8, -4]);
  });

  it('should sort large amounts of numbers', () => {
    var randomArray = genRandNum(90000);
    var sortedArray = [ ...randomArray ].sort( (a, b) => a - b );
    expect(quickSort(randomArray)).to.be.deep.equal(sortedArray);
  });

  it('should sort letters', () => {
    var letters = ['d', 'b', 'a', 'c'];
    var sorted = quickSort(letters);
    expect(sorted).to.deep.equal(['a', 'b', 'c', 'd']);
  });

})
