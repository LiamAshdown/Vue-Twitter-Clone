/**
 * Generate Random String
 *
 * @returns {string}
 */
export const randomString = () => {
  return Math.random().toString(36).substring(7)
}
