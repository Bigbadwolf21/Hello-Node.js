const flavor = "vanilla";
const topping = "sprinkles";
const vessel = "wafer cone";

// your code goes here

const flavorType = flavor === "vanilla" || flavor === "chocolate";
const toppingType = topping === "sprinkles" || topping === "peanuts";
const vesselType = vessel === "sugar cone" || vessel === "wafer cone";

if ( flavorType && toppingType && vesselType ) {
    console.log ("Great choice! Your ice cream is at the next window.");
} else {
    console.log ("Please check our menu and try again.");
}