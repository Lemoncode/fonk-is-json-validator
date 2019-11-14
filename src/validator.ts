import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
} from '@lemoncode/fonk';

const VALIDATOR_TYPE = 'IS_JSON';

let defaultMessage = 'Provided value is not a valid JSON';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

const isValidJson = (possibleJson: string): boolean => {
  try {
    return typeof JSON.parse(possibleJson) === 'object';
  } catch {}

  return false;
};

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage, customArgs } = fieldValidatorArgs;

  const succeeded = !isDefined(value) || isValidJson(value);

  return {
    succeeded,
    message: succeeded
      ? ''
      : parseMessageWithCustomArgs(
          (message as string) || defaultMessage,
          customArgs
        ),
    type: VALIDATOR_TYPE,
  };
};
