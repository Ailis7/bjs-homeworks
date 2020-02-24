"use strict"
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = {};
    }
    addClock(date, action, alarmID) {
        if (alarmID === undefined) return console.error("ERROR - введите идентификатор будильника");
        if (this.alarmCollection.find(identif => identif.ID === alarmID)) return console.error("Error - уже есть такое имя");
        this.alarmCollection[this.alarmCollection.length] = {
            "ID": alarmID,
            "time": date,
            "callback": action
        }
    }
    removeClock(alarmID) {
        let deleteItem = this.alarmCollection.findIndex(element => element.ID === alarmID);
        if (deleteItem === -1) return console.log(false);
        this.alarmCollection.splice(deleteItem, ++deleteItem);
        clearInterval(this.timerId[alarmID]);
        return console.log(true);
    }
    getCurrentFormattedTime() {
        return (new Date().getHours() + ":" + new Date().getMinutes());
    }
    start() {
        let checkClock = () => {
            function transformDate(time) {
                let dateArr = time.split(`:`);
                return (Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), (dateArr[0] - 3), dateArr[1]) - new Date())
            }
            this.alarmCollection.forEach(element => this.timerId[element.ID] = setInterval(element.callback, transformDate(element.time)));
        }
        return checkClock();
    }
    stop() {
        for (let prop in this.timerId) {
            if (this.timerId[prop] !== null) {
                clearInterval(this.timerId[prop]);
                this.timerId[prop] = null;
            }
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`"${element.ID}" - ${element.time}`));
    }
    clearAlarms() {
        this.stop();
        this.timerId = {};
        this.alarmCollection = [];
    }
}

function test() {
    console.log("УРААА");
}

let abv = new AlarmClock();

function testCase() {
    abv.addClock(abv.getCurrentFormattedTime(), function () {
        console.log("Hello world");
    }, "firstAlarm");

    function plusMinute(n) {
        let plus = abv.getCurrentFormattedTime().split(":")
        plus[1] = parseFloat(plus[1]) + n;
        return plus.join(":")
    }

    abv.addClock(plusMinute(1), function () {
        console.log("REMOVE world");
        abv.removeClock("secondAlarm");
    }, "secondAlarm");

    abv.addClock(plusMinute(2), function () {
        console.log("Remove ALL alarms");
        abv.stop();
    }, "thirdAlarm");
    abv.start();
}
testCase();

// abv.addClock("16:16", "act");
// abv.addClock("18:40", test, "Hi");
// abv.addClock("18:41", test, "crasler");
// abv.addClock("18:42", test, "Crid");
// abv.addClock(123, 1, 1);
// abv.addClock(123, 1, 1);
// console.log(abv.removeClock(1));
// //console.log(abv);
// console.log(abv.getCurrentFormattedTime());
// console.log(abv.start());
// console.log(abv.timerId)
// setInterval(function() {
//     abv.clearAlarms()
//     console.log(abv.alarmCollection, abv.timerId)
// }, 12000)
// console.log(abv.alarmCollection)
// let data = [{
//     ID: 1
// }, {
//     ID: 2
// }];
// data.forEach(element => console.log(element.ID));
// console.log();
// console.log(Date.parse('Thu, 01 Jan 2020 00:00:00 GMT'));
// let a = 'Thu, 01 Jan 2020 00:00:00 GMT'

// function transDate(time) {
//     let dateArr = time.split(`:`);
//     //console.log(dateArr[0]);
//     return Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getUTCDate(), dateArr[0], dateArr[1])
// }
// console.log((transDate("1:55") - new Date()) / 1000 / 60 / 60)
// let b = a.split(` `, )

// let a = {key: `prop`};
// for (let prop in a) {
//     console.log("djfn", a[prop]);
// }
// console.log(a);
// delete a.key;
// console.log(a);