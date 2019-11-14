import { setErrorMessage, validator } from './validator';

describe('fonk-is-json-validator specs', () => {
  it('should return succeeded validation when value is a valid JSON', () => {
    const value = '{ "name": "John", "age": 30, "car": null }';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_JSON',
    });
  });

  it('should return succeeded validation when value is a valid JSON', () => {
    const value = '{ "fruit": "Apple", "size": "Large", "color": "Red"}';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_JSON',
    });
  });

  it('should return succeeded validation when value is a valid JSON', () => {
    const value =
      '{ "object": { "a": "bau bau", "c": "boo boo", "e": "mrau mrau" }, "array": [1, 2, 3], "string": "Foo bar" }';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_JSON',
    });
  });

  it('should return succeeded validation when value is a valid JSON', () => {
    const value =
      '{ "quiz": { "sport": { "q1": { "question": "Which one is correct team name in NBA?", "options": ["New York Bulls", "Los Angeles Kings", "Golden State Warriros", "Huston Rocket"], "answer": "Huston Rocket" } }, "maths": {"q1": { "question": "5 + 7 = ?", "options": [10, 11, 12, 13], "answer": 12 }, "q2": { "question": "12 - 8 = ?", "options": [1, 2, 3, 4], "answer": 4 } } } }';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_JSON',
    });
  });

  it('should return succeeded validation when it feeds value equals undefined', () => {
    const value = void 0;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_JSON',
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    const value = null;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_JSON',
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    const value = '';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_JSON',
    });
  });

  it("should return failed validation when value isn't a valid JSON", () => {
    const value = { name: 'John', age: 30, car: null };

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it("should return failed validation when value isn't a valid JSON", () => {
    const value = '{ name: "John", age: 30, car: null }';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it('should return failed validation when value equals {}', () => {
    const value = {};

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it('should return failed validation when value equals []', () => {
    const value = [];

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it("should return failed validation when value isn't a valid JSON", () => {
    const value = [{ name: 'Nya' }];

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it('should return failed validation when value equals false', () => {
    const value = false;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it('should return failed validation when value equals true', () => {
    const value = true;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it('should return failed validation when value is an integer', () => {
    const value = 12;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it('should return failed validation when value is a string', () => {
    const value = 'foo';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid JSON',
      type: 'IS_JSON',
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    const value = 'test';
    const message = 'other message';

    const result = validator({ value, message });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IS_JSON',
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    const value = 'test';

    setErrorMessage('other message');

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IS_JSON',
    });
  });
});
