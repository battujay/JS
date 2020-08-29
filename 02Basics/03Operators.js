var actualPrice  = 109;
var sellingPrice = 33;

var discountedPercentage = ((actualPrice - sellingPrice)/actualPrice)*100;

console.log("Total discount given:",discountedPercentage + "%");

displayDiscountedPerentage = Math.round(discountedPercentage);
//Library Math and method round can be used to show the data as round figure

console.log("Total disconted percentage: "+displayDiscountedPerentage+"%");

//Here we rae trying to check whether data is true or false
var result = actualPrice > sellingPrice;

console.log(result);

console.log(typeof result);
//typeof can be used to show which kind of data it is


