import parseNumber from "@voidvoxel/parse-number";

export default class Chance {
    /**
     * The chance to perform an action.
     *
     * @private
     * @since v1.0.0
     * @version 1.0.0
     *
     * @type {string}
     */
    #chance


    constructor (
        chance = 0.5
    ) {
        this.#chance = parseNumber(chance) ?? 0.5;
    }


    chance () {
        return this.#chance;
    }


    roll () {
        return Math.random() <= this.chance();
    }


    to (
        callback
    ) {
        const chance = this.chance();
        const value = Math.random();

        if (value <= chance) {
            const roll = {
                chance,
                value
            };

            callback(roll);
        }
    }
}
