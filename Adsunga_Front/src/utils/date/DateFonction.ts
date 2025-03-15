/* This file is here to regroupe function to handle the date */

/** 
 * @summary Function to get the current year
 * @returns {number} The current year
 * @example getCurrentYear() => 2025
 */

export const getCurrentYear = () => {
  return new Date().getFullYear();
};