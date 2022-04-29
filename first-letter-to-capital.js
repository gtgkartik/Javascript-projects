var name = prompt("What is your name: ");
firstLetterOfName = name.slice(0,1);
capitalizeFirstLetterOfName = firstLetterOfName.toUpperCase();
lengthOfName = name.length;
remainingLettersOfName = name.slice(1,lengthOfName+1);
alert("Hello, " + capitalizeFirstLetterOfName + remainingLettersOfName);
