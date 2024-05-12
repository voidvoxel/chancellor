# `chancellor`

If you need to call a function only part of the time,
then this library can make your code more readable.

If you find yourself frquently writing code like the following in your project:

```js
if (Math.random() >= 0.30) {
    doSomething();
}
```

you can instead write the following using this library:

```js
chanceof(0.30).to(doSomething);
```

or if you prefer using percentages:

```js
chanceof("30%").to(doSomething);
// or
chanceof.percent(30).to(doSomething);
```

## Installation

```sh
npm i chancellor
```

## Importing

```js
import chanceof from "chancellor";
```

## Usage

### If statement

```js
if (chanceof(0.42).roll()) {
    console.log("I say hi 42% of the time");
}
```

or

```js
if (chanceof(0.42).roll()) console.log("I say hi 42% of the time");
```

### While statement

```js
const dice = chanceof(0.7);
while (dice.roll()) console.log("Hello, world!");
```

### Callback

```js
const log = result => console.log(result);

chanceof(0.5, log);
```
