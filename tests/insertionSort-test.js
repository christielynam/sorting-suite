import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort';
import genRandNum from '../scripts/genRandNum';

describe('Insertion Sort', () => {

  it('should be a function', () => {
    expect(insertionSort).to.be.function;
  });

  it('should sort positive numbers', () => {
    var numbers = [29, 12, 9, 8, 4, 21];
    var sorted = insertionSort(numbers);
    expect(sorted).to.deep.equal([4, 8, 9, 12, 21, 29]);
  });

  it('should sort negative numbers', () => {
    var numbers = [-29, -12, -9, -8, -4, -21];
    var sorted = insertionSort(numbers);
    expect(sorted).to.deep.equal([-29, -21, -12, -9, -8, -4]);
  });

  it('should sort large amounts of numbers', () => {
    var randomArray = genRandNum(17500);
    var sortedArray = [ ...randomArray ].sort( (a, b) => a - b );
    expect(insertionSort(randomArray)).to.be.deep.equal(sortedArray);
  });

  it('should sort letters', () => {
    var letters = ['d', 'b', 'a', 'c'];
    var sorted = insertionSort(letters);
    expect(sorted).to.deep.equal(['a', 'b', 'c', 'd']);
  });

  it('should only accept arrays', () => {
    var objInput = {};
    expect(insertionSort(objInput)).to.equal('This is not a valid array to be sorted!');
    var stringInput = 'string';
    expect(insertionSort(stringInput)).to.equal('This is not a valid array to be sorted!');
    var arrayInput = [4, 3, 1, 5, 2];
    expect(insertionSort(arrayInput)).to.deep.equal([1, 2, 3, 4, 5]);
  });

})
