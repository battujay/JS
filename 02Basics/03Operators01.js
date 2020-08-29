
var costofshirt = 799;
var afterDiscountCostOfJeans = 1099;
var actualCostOfJeans = 1599;

Calculatediscount = ((actualCostOfJeans-afterDiscountCostOfJeans)/actualCostOfJeans)*100;

console.log("Discount on jeans: "+ Calculatediscount);

Roundfigurediscount = Math.round(Calculatediscount);

console.log("Round Figure of discount percentage: "+Roundfigurediscount+"% off");

var check = afterDiscountCostOfJeans < actualCostOfJeans;

console.log(check);
console.log("Type of data: "+typeof check);
console.log("Type of data: "+typeof Roundfigurediscount);