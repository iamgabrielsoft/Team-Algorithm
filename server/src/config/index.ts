import * as joi from '@hapi/joi';
import * as dotenv from 'dotenv';

dotenv.config();

const schema = joi
  .object({
    HTTP_PORT: joi.number().required(),
    NODE_ENV: joi
      .string()
      .valid('development', 'production', 'staging')
      .required(),
  })
  .unknown()
  .required();

const { error, value: envVars } = schema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  PORT: envVars.HTTP_PORT,
  NODE_ENV: envVars.NODE_ENV,
};
