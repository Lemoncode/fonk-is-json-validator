import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isJson {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
