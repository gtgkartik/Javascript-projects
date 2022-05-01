function lifeInWeeks(age){
  
  var lifeTime = 90 ; 
  var yearsLeft = 90-age ;
  var monthsLeft = yearsLeft*12 ;
  var weeksLeft = yearsLeft*52;
  var daysLeft = yearsLeft*365;
  console.log("You have " + daysLeft + " days " + weeksLeft + " weeks " + monthsLeft + " months left");
  
}

lifeInWeeks(56);
