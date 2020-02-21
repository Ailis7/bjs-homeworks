class AlarmClock {
    constructor() {
    this.alarmCollection = [];
    this.timerid = null;
    }
    addClock(date, action, alarmID) {
        if (alarmID === undefined) return console.error("ERROR - введите идентификатор будильника");
        if (this.alarmCollection.find(identif => identif.ID === alarmID)) return console.error("Error - уже есть такое имя");
        this.alarmCollection[this.alarmCollection.length] = {"ID": alarmID, "time": date, "callback": action}
    }
    removeClock(alarmID) {
        let deleteItem = this.alarmCollection.findIndex(element => element.ID === alarmID);
        if (deleteItem === -1) return false;
        this.alarmCollection.splice(deleteItem, ++deleteItem);
        return true;
    }
    getCurrentFormattedTime() {
        return (new Date().getHours() + ":" + new Date().getMinutes());
    }
    start() {
        function checkClock {
            
        }
    }
}
let abv = new AlarmClock();
abv.addClock("23:00", "act");
abv.addClock("23:00", "act", "Hi");
abv.addClock(123, 1, 1);
abv.addClock(123, 1, 1);
console.log(abv.removeClock(1));
console.log(abv);
console.log(abv.getCurrentFormattedTime())
