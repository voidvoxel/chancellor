import chanceof from "../src/index.mjs";


function sayHelloWorld (r) {
    console.log("Hello, world!");
    console.log(r);
}


chanceof(0.5).to(sayHelloWorld);
