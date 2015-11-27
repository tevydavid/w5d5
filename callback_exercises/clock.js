function Clock () {
  // 1. Create a Date object.
  var date = new Date();
  // 2. Store the hours, minutes, and seconds.
  this.currHrs = date.getHours();
  this.currMins = date.getMinutes();
  this.currSecs = date.getSeconds();
  // 3. Call printTime.
  this.printTime();
  // 4. Schedule the tick at 1 second intervals.
  var runningTick = this._tick.bind(this);
  setInterval(runningTick, 1000);
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  console.log(this.currHrs + ":" + this.currMins + ":" + this.currSecs);
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  this.currSecs += 1;
  if (this.currSecs === 60) {
    this.currSecs = 0;
    this.currMins += 1;
  }

  if (this.currMins === 60) {
    this.currMins = 0;
    this.currHrs += 1;
  }
  this.printTime();
};

var clock = new Clock();
