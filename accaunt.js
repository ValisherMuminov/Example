const moment = require('moment');
class Account {
    #amount;
    #account_id;
    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }
    telMeBalance() {
        console.log(`Sizning hisobingizdagi qoldi:`, this.#amount);
        return this.#amount;
    }
    withdrawMoney(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Hisobdan ${amount}$ yechildi va qoldiq ${this.#amount}$`);
        } else {
            console.log(`Sizning hisobingizdagi pul yetarli emas ${this.#amount}$`);
        }
    }
    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Hisobingiz toldirildi, hisobingiz ${this.#amount}$`);
    }
    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}$ ga teng`);
        console.log("Hisob raqamingiz:", this.#account_id);
    }
    static telMeAboutClass() {
        console.log('Bu class accountlarni yasash uchun xizmat qiladi ');
    }
    static telMeTime() {
        console.log(`Hozirgi vaqt ${moment().format("YYY MM DD HH:mm:ss")}`);
    }
}
module.exports = Account