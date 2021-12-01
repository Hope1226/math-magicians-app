import operate from '../operate';

describe('Test math operations', () => {
  it('plus case: operate(1, 2, +) should return "3" ', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('minus case: operate(2, 1, -) should return "1" ', () => {
    expect(operate(2, 1, '-')).toBe('1');
  });

  it('times case: operat(5, 5, x) should return "25', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });

  it('div case: operate(5, 5, ÷) should return "1"', () => {
    expect(operate(5, 5, '÷')).toBe('1');
  });

  it('mod case: operate(1, 0.9, "%") should return 0.1', () => {
    expect(operate(1, 0.9, '%')).toBe('0.1');
  });
});
