# date-drift

Increase or decrease a Date by year, month, date, hours, minutes, seconds and milliseconds.

## Install

    $ npm install date-drift

## Usage
    var DateDrift = require('date-drift');
    var df = new DateDrift(new Date('2018-9-30 10:02:04')); // default: new Date();
    var newDate = df.driftYears(-1).driftMonths(2).driftDays(-3).getDate();
    console.log(newDate.toISOString());
    // output: 2017-11-27T02:02:04.000Z

## APIs

Increase/decrease years by driftYears(dYears), dYears must be an integer.

    df.driftYears(dYears);

Increase/decrease months by driftMonths(dMonths), dMonths must be an integer.

    df.driftMonths(dMonths);

Increase/decrease days by driftDays(dDays), dDays must be an integer.

    df.driftDays(dDays);

Increase/decrease hours by driftHours(dHours), dHours must be an integer.

    df.driftHours(dHours);

Increase/decrease minutes by driftMinutes(dMinutes), dMinutes must be an integer.

    df.driftMinutes(dMinutes);

Increase/decrease seconds by driftSeconds(dSeconds), dSeconds must be an integer.

    df.driftSeconds(dSeconds);

Increase/decrease milliseconds by driftMilliseconds(dMilliseconds), dMilliseconds must be an integer.

    df.driftMilliseconds(dMilliseconds);

Get javascript Date instance.

    df.getDate(); // return a Date instance.

## Test
To run the test suite, first install the dependencies, then run npm test:
    
    $ npm install
    $ npm test
