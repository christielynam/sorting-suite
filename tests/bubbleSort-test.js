import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

describe('Bubble Sort', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.function;
  })



  
})

  // it('should sort positive numbers', () => {
  //   var numbers = [ 5, 3, 2, 1, 4 ];
  //   var sorted = bubbleSort(numbers);
  //
  //   expect(sorted).to.deep.equal([1, 2, 3, 4, 5]);
  // });
