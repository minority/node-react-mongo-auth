class ValidationError extends Error {
  constructor(validationErrors, httpCode = 422) {
    super();
    this.validationErrors = validationErrors;
    this.status = httpCode;
  }
}

export default ValidationError;
