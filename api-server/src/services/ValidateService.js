import Ajv from "ajv";
import ValidationError from "../exeptions/ValidationError";
import AppError from "../exeptions/AppError";

const validate = async (data, schema) => {
  try {
    const ajv = new Ajv({ allErrors: true });
    const validateFunction = ajv.compile(schema);

    const validationErrors = [];

    const valid = await validateFunction(data);
    if (!valid) {
      throw new ValidationError(validateFunction.errors);
    }

    return true;
  } catch (err) {
    if (err instanceof ValidationError) {
      throw err;
    } else {
      throw new AppError(err.message);
    }
  }
};

export default { validate };
