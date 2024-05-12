import chanceof from "../src/index.mjs";


const logResult = result => {
    console.log("chance:", result.chance);
    console.log("roll:", result.roll);
};


chanceof(0.5).to(logResult);
