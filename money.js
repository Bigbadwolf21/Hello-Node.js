const money = 200; 
const price = 189;
if (money > price) {
    console.log("You paid more than the price of the goods. Here is your change of: "+ "$"+(money - price));
}
else if (money === price) {
    console.log("You paid the exact fare you don't have any change.");
} else {
    console.log("You don't have enough money, please come back later");
}