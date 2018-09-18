var DateDrift = require('./index.js');
var assert = require('assert');
var baseDate = new Date('2018-9-30 10:04:02');

describe('DriftYears', function() {
  describe('increase 2 years from 2018-9-30 10:04:02', function() {
    it('should be 2020-9-30 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftYears(2).getDate(), +new Date('2020-9-30 10:04:02'));
    });
  });

  describe('decrease 2 years from 2018-9-30 10:04:02', function() {
    it('should be 2016-9-30 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftYears(-2).getDate(), +new Date('2016-9-30 10:04:02'));
    });
  });
});

describe('DriftMonths', function() {
  describe('increase 2 month from 2018-9-30 10:04:02', function() {
    it('should be 2018-11-30 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftMonths(2).getDate(), +new Date('2018-11-30 10:04:02'));
    });
  });

  describe('increase 12 month from 2018-9-30 10:04:02', function() {
    it('should be 2019-9-30 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftMonths(12).getDate(), +new Date('2019-9-30 10:04:02'));
    });
  });

  describe('decrease 2 month from 2018-9-30 10:04:02', function() {
    it('should be 2018-7-30 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftMonths(-2).getDate(), +new Date('2018-7-30 10:04:02'));
    });
  });

  describe('decrease 7 month from 2018-9-30 10:04:02', function() {
    it('should be 2018-2-28 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftMonths(-7).getDate(), +new Date('2018-2-28 10:04:02'));
    });
  });

  describe('decrease 9 month from 2018-9-30 10:04:02', function() {
    it('should be 2017-12-30 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftMonths(-9).getDate(), +new Date('2017-12-30 10:04:02'));
    });
  });
});

describe('DriftDays', function() {
  describe('increase 2 days from 2018-9-30 10:04:02', function() {
    it('should be 2018-10-2 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftDays(2).getDate(), +new Date('2018-10-2 10:04:02'));
    });
  });

  describe('decrease 30 days from 2018-9-30 10:04:02', function() {
    it('should be 2018-8-31 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftDays(-30).getDate(), +new Date('2018-8-31 10:04:02'));
    });
  });
});

describe('DriftHours', function() {
  describe('increase 2 hours from 2018-9-30 10:04:02', function() {
    it('should be 2018-9-30 12:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftHours(2).getDate(), +new Date('2018-9-30 12:04:02'));
    });
  });

  describe('decrease 24 hours from 2018-9-30 10:04:02', function() {
    it('should be 2018-9-29 10:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftHours(-24).getDate(), +new Date('2018-9-29 10:04:02'));
    });
  });
});

describe('DriftMinutes', function() {
  describe('increase 2 minutes from 2018-9-30 10:04:02', function() {
    it('should be 2018-9-30 10:06:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftMinutes(2).getDate(), +new Date('2018-9-30 10:06:02'));
    });
  });

  describe('decrease 60 minutes from 2018-9-30 10:04:02', function() {
    it('should be 2018-9-30 9:04:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftMinutes(-60).getDate(), +new Date('2018-9-30 9:04:02'));
    });
  });
});

describe('DriftSeconds', function() {
  describe('increase 2 seconds from 2018-9-30 10:04:02', function() {
    it('should be 2018-9-30 10:04:04', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftSeconds(2).getDate(), +new Date('2018-9-30 10:04:04'));
    });
  });

  describe('decrease 60 seconds from 2018-9-30 10:04:02', function() {
    it('should be 2018-9-30 10:03:02', function() {
      var df = new DateDrift(baseDate);
      assert.equal(+df.driftSeconds(-60).getDate(), +new Date('2018-9-30 10:03:02'));
    });
  });
});

describe('DriftMilliseconds', function() {
  describe('increase 2 milliseconds from 2018-9-30 10:04:02:000', function() {
    it('should be 2018-9-30 10:04:02:002', function() {
      var df = new DateDrift(new Date('2018-9-30 10:04:02:000'));
      assert.equal(+df.driftMilliseconds(2).getDate(), +new Date('2018-9-30 10:04:02:002'));
    });
  });

  describe('decrease 999 milliseconds from 2018-9-30 10:04:02:000', function() {
    it('should be 2018-9-30 10:04:01:001', function() {
      var df = new DateDrift(new Date('2018-9-30 10:04:02:000'));
      assert.equal(+df.driftMilliseconds(-999).getDate(), +new Date('2018-9-30 10:04:01:001'));
    });
  });
});


describe('Drift chain', function() {
  describe('decrease 1 year, increase 2 months and decrease 3 days from 2018-9-30 10:04:02', function() {
    it('should be 2017-11-27 10:04:02', function() {
      var df = new DateDrift(new Date('2018-9-30 10:04:02'));
      assert.equal(+df.driftYears(-1).driftMonths(2).driftDays(-3).getDate(), +new Date('2017-11-27 10:04:02'));
    });
  });
});

describe('Default params', function() {
  describe('increase 1 day from now', function() {
    it('should be tomorrow', function() {
      var df = new DateDrift();
      console.log(df.driftDays(1).getDate());
      return true;
    });
  });
});
