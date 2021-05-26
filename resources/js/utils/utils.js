/**
 * Generate Random String
 *
 * @returns {string}
 */
export const randomString = () => {
  return Math.random().toString(36).substring(7)
}

/**
 * Async Timeout
 * Used for to purposely delay async functions
 * https://stackoverflow.com/questions/51200626/using-a-settimeout-in-a-async-function
 *
 * @param {number} delay
 * @returns {Promise}
 */
export const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay))
