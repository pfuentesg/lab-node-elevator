/*jshint esversion:6*/

const Elevator = require('./elevator.js');
const Person = require('./person.js');
const elev = new Elevator();


elev.requests[elev.requests.length+1]=new Person(name, origin,destination );
