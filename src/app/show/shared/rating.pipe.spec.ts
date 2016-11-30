import { RatingPipe } from './rating.pipe';

describe('RatingPipe', () => {
  let pipe = new RatingPipe();

  it('transform 1 to "Awesome show"', () => {
    expect(pipe.transform(1)).toBe('Awesome show');
  });

  it('transform 2 to "Not bad, you can watch it"', () => {
    expect(pipe.transform(2)).toBe('Not bad, you can watch it');
  });

  it('transform 3 to "Terrible, better go code Java"', () => {
    expect(pipe.transform(3)).toBe('Terrible, better go code Java');
  });

  it('transform any other value to "Wrong rating, it isn\'t that hard"', () => {
    expect(pipe.transform(5)).toBe('Wrong rating, it isn\'t that hard');
  });
});
