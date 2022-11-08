const StringSplitter = require('./StringSplitter');

let s1 = new StringSplitter("ciao");
let s2 = new StringSplitter("cio");

console.log("getSplits: ");
console.log(s1.getSplits(2));
console.log();
console.log("getAllSplits: ");
console.log(s1.getAllSplits());
console.log();
console.log("getAllSplits: ");
console.log(s1.addArrays(s1.getAllSplits(), s2.getAllSplits()));