import { compare, hash, genSalt } from 'bcryptjs';

export const generateSaltPassword = async (password: string) => {
  try {
    const salt = await genSalt(12);
    return hash(password, salt);
  } catch (error) {
    throw new Error(`EXCEPTION generateSaltPassword(): ${error}`);
  }
};

export const compareSaltPassword = async (
  password: string,
  hashStr: string
) => {
  return compare(password, hashStr);
};
