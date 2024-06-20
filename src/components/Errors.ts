export const Errors = {
  FIELDS_MISSING: "Missing required fields.",
  USERNAME_INVALID: "Invalid username.",
  BAD_INVITE: "The invite code is invalid or has already been used.",
  BAD_USERNAME_OR_PASSWORD: "The username already exists or either the username or password is invalid.",
  BAD_METHOD: "Method not allowed.",
  PASSWORD_TOO_LONG: "Password is too long. Max length is 100 characters.",
  PASSWORD_TOO_SHORT: "Password is too short. Min length is 12 characters.",
};

export function getKeyByValue(object: any, value: string) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function getErrorJSON(error: string, extraJson?: object) {
  if (!extraJson) return { error: { type: getKeyByValue(Errors, error), message: error } };
  return { error: { type: getKeyByValue(Errors, error), message: error, ...extraJson } };
}
