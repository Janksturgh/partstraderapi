import exclusions from '@/data/exclusions.json';
import validatePartNumber from '@/utils/validatePartNumber.js';

/**
 * @description checkExclusionsList function first checks if the part is valid, if it is check
 * if a part number is in the exclusions list.
 * @param {string} partNumber - The part number to validate.
 */
export default function checkExclusionsList(partNumber) {
  // Validate the part number format first
  // If the part number is invalid, an error will be thrown
  // and the exclusions check will not be performed
  validatePartNumber(partNumber);

  // Check if the part number is in the exclusions list
  const isExcluded = exclusions.some((exclusion) => exclusion.PartNumber == partNumber);

  if (isExcluded) {
    return []; // Valid, but excluded
  }

  // If valid and not excluded, nothing is thrown = valid part
  return true;
}
