import exclusions from '@/data/Exclusions.json';
import validatePartNumber from '@/utils/validatePartNumber.js';
import normalizeToLowerCase from '@/utils/normalizeToLowerCase.js';

/**
 * @description checkExclusionsList function first checks if the part is valid, if it is check
 * if a part number is in the exclusions list.
 * @param {string} partNumber - The part number to validate.
 * @returns {boolean|Array} Returns true if the part number is valid and not excluded,
 * or an empty array if the part number is valid but excluded.
 * @throws {Error} Throws an error if the part number is invalid coming from the validatePartNumber function.
 */
export default function checkExclusionsList(partNumber) {
  /** Validate the part number format first.
  * If the part number is invalid, an error will be thrown
  * and the exclusions check will not be performed
  */
  validatePartNumber(partNumber);

  /** Check if the part number is in the exclusions list.
  * Using some here so when the condition is met, the check will stop
  * rather than going through the rest of the array and also we only 
  * need a true/false outcome.
  */
  const isExcluded = exclusions.some(
    (exclusion) => normalizeToLowerCase(exclusion.PartNumber) == normalizeToLowerCase(partNumber)
  );

  if (isExcluded) {
    return []; // Valid, but excluded
  }

  // If valid and not excluded, nothing is thrown = valid part
  return true;
}
