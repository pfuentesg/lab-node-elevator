/*jshint esversion:6*/

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = ["up", "Down"];
    
  }


  start() {
    setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval();
  }
  update() {
    console.log(this.floor + "is the floor right now");
  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if(this.floor === this.MAXFLOOR)  stop(); else this.floor++;this.direction="up" ; }
  floorDown() {
    if(this.floor === 0)  stop(); else this.floor--;this.direction="Down" ;
  }
  call() {}
  log() {
    console.log("direction:" + this.direction + "|" + "floor" + this.floor);

  }
}


module.exports = Elevator;
