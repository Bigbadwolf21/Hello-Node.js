function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function givelife(targetPlayer) {
        targetPlayer.life = 2;
        console.log(`${this.name} gave 2 life to ${targetPlayer.name}`)
    }
}

let Dele = new User();
let Deji = new User();
let Son = new User();

Dele.name = "Dele";
Deji.name = "Deji";
Son.name = "Son";

Dele.giveLife(Deji);
console.log(`Dele ${Dele.life}`);
console.log(`Deji ${Deji.life}`);

// Add new features using prototype method
User.prototype.upperCut = function upperCut(targetPlayer) {
    targetPlayer.life -= 4;
    console.log(`${this.name} just uppercutted ${targetPlayer.name}`)

}

Son.upperCut(Dele);
console.log(`Deji ${Deji.life}`);
console.log(`Son ${Son.life}`);
console.log(`Dele ${Dele.life}`);

User.prototype.superPower = 75;
console.log(Dele.superPower);
console.log(Deji.superPower);
console.log(Son.superPower);

User.prototype.powerPunch = function powerPunch(targetPlayer) {
    targetPlayer.life -= 5;
    console.log(`${this.name} deliver power punch to ${targetPlayer.name}`)
}