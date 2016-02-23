/**
 * Convert a value to an array if it is not an array.
 *
 * @param {*} array Array or not.
 * @returns {Array}
 */
export function ensureArray(array) {
	return Array.isArray(array) ? array : [array];
}

/**
 * Check if a value is DOM element or document.
 *
 * @param {*} value A value.
 * @returns {boolean}
 */
export function isElement(value) {
	return !!value && (value.nodeType === 1 || value.nodeType === 9);
}
