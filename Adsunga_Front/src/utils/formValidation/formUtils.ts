
/**
 * Function to check if a value is empty
 * @param {string} value:string
 * @returns {boolean}
 * @description This function checks if a value is empty or not. It trims the value and checks if it is equal to an empty string.
 */
export const checkIfEmpty = (value: string)  : boolean => {
  if (value.trim() === "" || value.trim().length == 0 || value === undefined || value === null) {
    return false;
  }
  return true;
}


/**
 * Fonction to check if a value is valid
 * @param {string} value:string
 * @returns {Boolean}
 */
export const checkIfCheckboxAreEmpty = (value : string[]) : boolean => {
    if (value.length === 0 || value === undefined || value === null) {
         return false;
    }
    return true;
}

/**
 * Fonction to check if a value is valdie
 * @param {string} value:string
 * @param {RegExp} regex:RegExp
 * @returns {Boolean}
 */
export const checkRegex = (value : string, regex: RegExp) : boolean => {
    return regex.test(value.trim());
}


  /**
   * Description
   * @param {React.FocusEvent<HTMLInputElement>} e:React.FocusEvent<HTMLInputElement>
   * @param { React.Dispatch<React.SetStateAction<string>>} setter:React.Dispatch<React.SetStateAction<string>>
   * @param {RegExp | null} regex:RegExp|null=null
   * @param {any} errorMessage:string
   * @returns {string }
   */
  export const checkValidationOfFields = (
    e: React.FocusEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    regex: RegExp | null = null,
    errorMessage: string
  ) => {
    setter("");
    const value = e.target.value.trim();
    const fieldName = e.target.name;
    /* Here to erase space in phone */
    const cleanedValue =
      fieldName === "phone" ? value.replace(/\s+/g, "") : value;
    /* ======= */
    if (!checkIfEmpty(cleanedValue)) {
      /* If Field empty */
      setter("Ce champ est requis");
    } else if (regex != null && checkRegex(cleanedValue, regex) === false) {
      /* If Field not validating regex */
      setter(errorMessage);
    }
  };




  /**
   * Function to check if the date is valide 
   * @param {string} date:string
   * @returns {boolean}
   * @description This function checks if the date is valid or not. It checks if the date is not in the past
   *  */
export const checkIfDateIsValid = (date: string): boolean => {
    const today = new Date();
    const inputDate = new Date(date);
    if (inputDate < today) {
        return false;
    }
    return true;
  }