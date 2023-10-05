let go = document.getElementById('go');

var a = 100;
var b = 90;

function val(){
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let output = document.getElementById('output');

let day1 = (input1.value/a)*input2.value;
let day2 = (input3.value/a)*b;

let goal = day2 - day1;

output.innerHTML = `You have to go more ${goal} days to reach your goal!`;

};

