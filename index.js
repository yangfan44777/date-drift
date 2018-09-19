/**
 * @file date-drift. Increase or decrease a Date by year, month, date, hours, minutes, seconds and milliseconds.
 * @author yangfan44777@163.com
 */

function DateDrift(date) {

    if (!date) {
        date = new Date();
    }
    
    this._d = date;
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.date = date.getDate();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.milliseconds = date.getMilliseconds();
}

DateDrift.prototype = {
    driftYears: function (dYears) {
        const _year = this.year + dYears;
        const _date = Math.min(this._getMaxDateOfMonth(_year, this.month + 1), this.date);
        return new DateDrift(new Date(_year + '-' + (this.month + 1) + '-' + _date + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds + ':' + this.milliseconds));
    },

    driftMonths: function (dMonths) {
        const dYears = Math.floor((this.month + dMonths) / 12);
        let monthInYear = (this.month + dMonths) % 12;
        if (monthInYear < 0) {
            monthInYear += 12;
        }
        monthInYear++;
        const daysInMonth = Math.min(this._getMaxDateOfMonth(this.year + dYears, monthInYear), this.date);
        return new DateDrift(new Date((this.year + dYears)+ '-' + monthInYear + '-' + daysInMonth + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds + ':' + this.milliseconds));
    },

    driftDays: function (dDays) {
        return this.driftHours(dDays * 24);
    },

    driftHours: function (dHours) {
        return this.driftMinutes(dHours * 60);
    },

    driftMinutes: function (dMinutes) {
        return this.driftSeconds(dMinutes * 60);
    },

    driftSeconds: function (dSeconds) {
        return this.driftMilliseconds(dSeconds * 1000);
    },

    driftMilliseconds: function (dMilliseconds) {
        const fromDate = +this._d;
        return new DateDrift(new Date(fromDate + dMilliseconds));
    },

    _getMaxDateOfMonth(year, month) {
        return new Date(year, month, 0).getDate();
    },

    getDate: function () {
        return this._d;
    }
}

module.exports = DateDrift;
