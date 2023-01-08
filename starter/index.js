var finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];

//----------------------Finding the total months--------------------------//

let totalMonths = finances.length;

console.log("Total Months = " + totalMonths);

//----------------Finding the total overall profit/loss---------------------//

let totalProfitLoss = 0;
for (let i = 0; i < finances.length; i++) {
  totalProfitLoss += finances[i][1];
}

console.log("Total Profit/Loss is $ " + totalProfitLoss);

//-------Finding the average change in profit over the whole period---------//

let totalChange = 0;
let currentMonth = 0;
let previousMonth = 0;

for (let i = 1; i < finances.length; i++) {
  let currentMonth = finances[i][1];

  let previousMonth = finances[i - 1][1];

  let changePerMonth = currentMonth - previousMonth;
  //console.log(changePerMonth);

  totalChange += changePerMonth;
  //console.log(totalChange);
}

let averageTotalChange = totalChange / (finances.length - 1);

let roundedavgTotalChange = averageTotalChange.toFixed(2);

console.log("Average Total Change: $ " + roundedavgTotalChange);

//-------Find greatest increase/decrease in profit over whole period---------//

let greatestIncreaseMonth = finances[0][0];
let greatestIncreaseCurrency = 0;
let greatestDecreaseMonth = finances[0][0];
let greatestDecreaseCurrency = 0;

for (let i = 1; i < finances.length; i++) {
  let currentMonth = finances[i][1];

  let previousMonth = finances[i - 1][1];

  let changePerMonth = currentMonth - previousMonth;

  //console.log("Change from Previous Month is " + changePerMonth);

  if (changePerMonth > greatestIncreaseCurrency) {
    greatestIncreaseMonth = finances[i][0];
    greatestIncreaseCurrency = changePerMonth;
  } else if (changePerMonth < greatestDecreaseCurrency) {
    greatestDecreaseMonth = finances[i][0];
    greatestDecreaseCurrency = changePerMonth;
  }
}
console.log(
  "Greatest Increase Month Was " +
    greatestIncreaseMonth +
    " and the amount was $ " +
    greatestIncreaseCurrency
);

console.log(
  "Greatest Decrease  Month Was " +
    greatestDecreaseMonth +
    " and the amount was $ " +
    greatestDecreaseCurrency
);

// Psuedocode //

//----------------------Finding the total months--------------------------//

// Use the .length function to find the value of the length of the array, which will tell us how many months there are in total //
// Then print this using concatenation//

//----------------Finding the total overall profit/loss---------------------//

// Create a variable for the total profit/loss.//
// Create a for loop to iterate through all the values in the array//
// Access just the second values in the array (the numbers which tell us the amount of money lost/gained each month, not the strings showing the months)//
// We do this using finances [i][1] because [i][0] would access the first values but we need the second ones to access the numbers//
// We add the variable (currently value 0) to finances[i][1] which gives us the total of all of the numerical values added to the variable//
// Print the total profit/loss value//

//-------Finding the average change in profit over the whole period---------//

// Calculate change in value between each month (Jan to Feb change would be Feb value - Jan value, Feb to March change would be March value - Feb value)//
// Start at feb because no data for the month before January, so no change //
// Create for loop to iterate and subtract the value of the previous month from the current month to determine the change value, and do this for every month with the for loop //
// Then we find the average by adding all of the change values together and then dividing by the total number of months//
// Print the average change value //

//-------Find greatest increase/decrease in profit over whole period---------//

//Declare variables for greatest increase, in both the profits ($) and which month this occurred. Do the same for the greatest decrease (or greatest loss) and the month this occurred.//

//Iterate through, using for loop, starting at the second month because we want to know the greatest increase/decrease values and so the first month has no change (as data was not recorded for the month prior to Jan 2010)//

// Use if statement to check if the change per month value is greater than the greatest increase currency value (initially set to 0), and then update the greatest increase currency value if it is (basically check for the max value as it iterates and then greatest increaase value will continually update to be the biggest)//

// Do the same for the greatest decrease, except use else if so that if the value is not greater, then it checks for the min value as it iterates and the greatest decrease value will update to be the greatest decrease.//

//Print greatest increase and decrease values and the corresponding months for those values //
