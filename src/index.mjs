import Chance from "./Chance.mjs";


export { default as Chance } from "./Chance.mjs";


/**
 * Perform an action with a percent-chance likelyhood of occuring.
 *
 * @public
 * @since v1.0.0
 * @version 1.0.0
 *
 * @param {number} chance
 * The chance to perform the action.
 * @param {*} callback
 * @returns
 */
export default function chanceof (
    chance
) {
    return new Chance(chance);
}


/**
 * Flip a hypothetical coin and return whether or not it landed on heads.
 *
 * @public
 * @since v1.0.0
 * @version 1.0.0
 *
 * @returns {boolean}
 * If the coin lands on heads, returns `true`.
 * Otherwise, returns `false`.
 */
export function flipcoin () {
    return new Chance().roll();
}


/**
 * Perform an action with a percent-chance likelyhood of occuring.
 *
 * @public
 * @since v1.0.0
 * @version 1.0.0
 *
 * @param {number} chance
 * The chance to perform the action.
 * @param {*} callback
 * @returns
 */
export function percentchanceof (
    chance
) {
    return new Chance(chance / 100);
}


chanceof.percent = percentchanceof;
