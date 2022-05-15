import { ProjectsFactory } from './factory_method.js';
import { AbsctractProjectsFactory } from './abstract_factory_method.js';
import { ComittedDeadline } from './singleton.js';
import { MySum } from './chain_of_responsibility.js';

// #1
// example of factory method
// https://www.youtube.com/watch?v=bTiAfLbmsnY&ab_channel=webDev


const factory = new ProjectsFactory();

const krakenCasino = factory.create('b2c', 'Kraken Casino', 'MGA');
const sparrowCasino = factory.create('b2b', 'Sparrow Casino', 'CUR');

console.log(krakenCasino);
console.log(sparrowCasino);

// #2
// example of abstract factory method
// https://www.youtube.com/watch?v=bTiAfLbmsnY&ab_channel=webDev

const abstractFactory = new AbsctractProjectsFactory();

// let assignedTeam = abstractFactory.assignTeam('X');
// let teamX = new assignedTeam();

let teamX = new (abstractFactory.assignTeam('X'));
let teamY = new (abstractFactory.assignTeam('Y'));

//assignedTeam = abstractFactory.assignTeam('Y');
//const teamY = new assignedTeam();

const bingo = teamX.create('b2c', 'Bingo', 'MGA');
const win2win = teamY.create('b2b', 'Win2win', 'CUR');

console.log(bingo);
console.log(win2win);

// #3
// example of singleton

const commitment = new ComittedDeadline('17-05-2022');
const commitment2 = new ComittedDeadline('23-05-2022');

console.log(commitment.deadline);
console.log(commitment2.deadline);

// #4
// example of chain of responsibility
const sum = new MySum(0);
console.log(sum.add(2).add(3).sum);



