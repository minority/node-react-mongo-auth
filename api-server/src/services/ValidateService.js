import Ajv from "ajv";
import AjvErrors from "ajv-errors";
import ValidationError from "../exeptions/ValidationError";
import AppError from "../exeptions/AppError";

const normaliseErrorMessages = errors => {
  const fields = errors.reduce((acc, e) => {
    if (e.dataPath.length && (e.dataPath[0] === "/" || e.dataPath[0] === ".")) {
      acc[e.dataPath.slice(1)] = [
        e.message.toUpperCase()[0] + e.message.slice(1)
      ];
    } else {
      const key = e.params.missingProperty || e.params.additionalProperty;
      acc[key] = [e.message.toUpperCase()[0] + e.message.slice(1)];
    }
    return acc;
  }, {});

  return { fields };
};

const validate = async (data, schema) => {
  try {
    const ajv = new Ajv({ allErrors: true, jsonPointers: true });
    AjvErrors(ajv);
    const validateFunction = ajv.compile(schema);

    const valid = await validateFunction(data);
    if (!valid) {
      throw new ValidationError(
        normaliseErrorMessages(validateFunction.errors)
      );
    }

    return valid;
  } catch (err) {
    if (err instanceof ValidationError) {
      throw err;
    } else {
      throw new AppError(err.message);
    }
  }
};

export default { validate };
