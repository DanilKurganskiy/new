'use strict';

const money = +prompt('Your mounthly budget?');
const time = prompt('Enter the date', 'YYYY-MM-DD');
const whyExpenses = prompt('Please enter a required expense item for this month.');
const howMuch = prompt('How much do you owe?');

let appData = {
   budget: money,
   timeData: Date(time),
   expenses: {
      'whyExpenses' : 'howMuch'
   },
   optionalExpenses:'',
   // income [],
   savings : false
};
alert('Your budget for the month ' +  money / 30);
