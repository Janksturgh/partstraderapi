/**
 * @description Validates a part number.
 * The part number must be in the format of 4 digits followed by a hyphen and then an alphanumeric string.
 * @param {string} partNumber - The part number to validate.
 * @throws Will throw an error if the part number is invalid.
 * @returns {boolean} Returns true if the part number is valid.
 */

export default function validatePartNumber(partNumber) {
  /**
   * i think about 1% of people can write regex without help, this was generated at https://rows.com/tools/regex-generator
   * The regex checks that the partNumber is 4 digits at the start, a hyphen, followed
   *  by one or more alphanumeric characters (letters and/or digits)
   */
  const regex = /^\d{4}-[A-Za-z0-9]{4,}$/;

  if (!regex.test(partNumber)) {
    throw new Error(`Invalid part number format: ${partNumber}`);
  }

  return true;
}
