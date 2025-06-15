/**
 * This function is there to retrieve a cookie
 * @param {String} name
 * @return {String || undefined}
 * @exemple : getCookie("cookieConsent")
 * */
export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * This function is there to set a cookie
 * @param {String} name
 * @param {String || Boolean} value
 * @param {Object} options={}
 * @returns {Void}
 * @exemple : setCookie("cookieConsent", e.target.value, httpOnly : true )
 */

export function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    secure: true,
    sameSite: "Lax",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  const updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += "; " + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

/**
 * Description
 * @param {String} name
 * @returns {Void}
 */
export function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": -1,
  });
}
