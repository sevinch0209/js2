var user = prompt("Enter your age");
alert("Open the console to see the result")
if(user >= 18 && user <= 50 ){
    console.log("You have to work");
  } else if(user <= 18){
    console.log("You are young. You should read!");
  } else if(user >= 50 && user <= 59){
    console.log("You will soon retire");
  } else if (user >= 59 && user <=150){
    console.log("You look like a pensioner, if you're still alive :)");
  } else {
    console.log("There is an error");
  }