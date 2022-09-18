/**
 * @param {string[]} classNames
 * @returns {string[]} Array of class names without undefined values
 */
export default function (classNames) {
	return classNames.filter((curr) => curr).join(" ");
}
