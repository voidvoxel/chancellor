import chanceof, { flipcoin } from "../src/index.mjs";


test(
    "callback",
    () => {
        function callback (roll) {
            expect(roll.value)
                .toBeLessThanOrEqual(roll.chance);
        }

        let chance = chanceof(0.5);

        let remainingLoops = 10;

        while (remainingLoops --> 0) {
            chance.to(callback);
        }
    }
);


test(
    "chance to do something",
    () => {
        let accumulator = 0;
        let totalLoops = 1000;
        let remainingLoops = totalLoops;

        function increment () {
            accumulator++;
        }

        let chance = chanceof(0.5);

        while (remainingLoops --> 0) {
            chance.to(increment);
        }

        expect(accumulator).toBeGreaterThan(0);
        expect(accumulator).toBeLessThan(totalLoops);
    }
);


test(
    "roll with 0% chance",
    () => {
        expect(
            chanceof(0).roll()
        ).toBe(false);
    }
);


test(
    "roll with 100% chance",
    () => {
        expect(
            chanceof(1).roll()
        ).toBe(true);
    }
);


test(
    "roll with string chance",
    () => {
        expect(
            chanceof("0%").roll()
        ).toBe(false);


        expect(
            chanceof("100%").roll()
        ).toBe(true);
    }
);


test(
    "roll with percentage chance",
    () => {
        expect(
            chanceof.percent(0).roll()
        ).toBe(false);

        expect(
            chanceof.percent(100).roll()
        ).toBe(true);
    }
);


test(
    "coin flip",
    () => {
        expect(
            typeof flipcoin()
        ).toBe('boolean');

        expect(
            typeof chanceof().roll()
        ).toBe('boolean');

        expect(
            typeof chanceof.percent().roll()
        ).toBe('boolean');
    }
);
