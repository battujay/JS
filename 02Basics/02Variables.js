const uid = "abc123";

var lastName = " BATTU";
var firstName = "JAYA SIMHA";
var country = "USA";
var password = "123456";
var confirmPassword = "123456";
var courseRegistered = 0;
var loggedInUsingGoodle = false;
var loggedInUsingFb = true;

//Both + and , are valid to add two variables but not when using backticks `` to print data
console.log("Full name is:  ", firstName , lastName)


//Interpolation = where u can able to print the data as a combination of all data shown below using backticks` ` in console.log(``)
console.log(`
Log Id of User: ${uid}
First Name is: ${firstName}
Last Name is: ${lastName}
Full Name: ${firstName + lastName}
From Country: ${country}
Created Password as: ${password}
Logged in using google: ${loggedInUsingGoodle}
Logged in using Fb: ${loggedInUsingFb}

`)

 
