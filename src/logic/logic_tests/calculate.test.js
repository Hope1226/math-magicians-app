/* eslint-disable no-dupe-keys */
import calculate from '../calculate';

const intObj = {
  total: null,
  next: null,
  operation: null,
};

describe('Test calculates logics in different use cases', () => {
  it('calculate button "AC" case: calculate(intObj, "AC") should return intObj', () => {
    expect(calculate(intObj, 'AC')).toEqual(intObj);
  });

  it('Test case button and next values are 0: calculate(intObj,"0") should return empty obj', () => {
    intObj.next = '0';
    expect(calculate(intObj, '0')).toEqual({});
  });

  it('Test case user entered operation: calculate(intObj, "+")', () => {
    expect(calculate(intObj, '+')).toEqual(
      {
        total: '0',
        next: null,
        operation: '+',
      },
    );
  });

  it('Test case user entered operation after the entered operant: calculate(intObj, "+")', () => {
    intObj.next = '10';
    expect(calculate(intObj, '+')).toEqual(
      {
        total: '10',
        next: '10+',
        next: null,
        operation: '+',
      },
    );
  });

  it('Test case user do not entered operation after the entered operant: calculate(intObj, "10")', () => {
    intObj.next = '10';
    expect(calculate(intObj, '10')).toEqual(
      {
        next: '1010',
        total: null,
      },
    );
  });

  it('Test case user is using decimal separator for operants: calculate(intObj, ".") should return intObj.total = 0.', () => {
    expect(calculate(intObj, '.')).toEqual(
      {
        total: '0. ',
        next: '10',
        next: '10.',
        operation: null,
        total: null,
      },
    );
  });

  it('Test case user presses "=" wihtout operation and operant: calculate(intObj, "=") where intObj.next and intObj.operation are null, should return {}', () => {
    intObj.next = null;
    intObj.operation = null;
    expect(calculate(intObj, '=')).toEqual({});
  });

  it('Test case user presses "=" with operation and operant: calculate(intObj, "=") where intObj.next / total = "10" and intObj.operation = "+" return intObj.total: 20', () => {
    intObj.next = '10';
    intObj.total = '10';
    intObj.operation = '+';
    expect(calculate(intObj, '=')).toEqual({
      total: '20',
      next: null,
      operation: null,
    });
  });

  it('Test case user presses "+/-" with no operation and operant: calculate(intObj, "+/-") should return {}', () => {
    intObj.next = null;
    intObj.operation = null;
    intObj.total = null;
    expect(calculate(intObj, '+/-')).toEqual({});
  });

  it('Test case user presses "+/-" with operation and operant: calculate(intObj, "+/-") total = 10 should return total: -10', () => {
    intObj.next = null;
    intObj.operation = null;
    intObj.total = '10';
    expect(calculate(intObj, '+/-')).toEqual({
      total: '-10',
      next: null,
      operation: null,
    });
  });

  it('Test case user presses an operation after pressing "=": calculate(intObj, "+") total = 10 should return operation +', () => {
    intObj.next = null;
    intObj.operation = null;
    intObj.total = '10';
    expect(calculate(intObj, '+')).toEqual({
      total: '10',
      next: null,
      operation: '+',
    });
  });

  it('Test case user presses an operation button and there is an existing operation: calculate(intObj, "-") total = 5 should return operation -', () => {
    intObj.next = null;
    intObj.operation = '+';
    intObj.total = '5';
    expect(calculate(intObj, '-')).toEqual({
      total: '5',
      next: null,
      operation: '-',
    });
  });

  it('Test case user presses an operation button and there is an existing operation: calculate(intObj, "+") next should be 1, total should be 5, and it must return new total 6', () => {
    intObj.next = '1';
    intObj.operation = '+';
    intObj.total = '5';
    expect(calculate(intObj, '+')).toEqual({
      total: '6',
      next: null,
      operation: '+',
    });
  });

  it('Test case user user hasn\'t typed a number yet, just the operation: calculate(intObj, "+") total should be 0, and it must return operation +', () => {
    intObj.next = null;
    intObj.operation = null;
    intObj.total = '0';
    expect(calculate(intObj, '+')).toEqual({
      next: null,
      operation: '+',
      total: '0',
    });
  });
});
