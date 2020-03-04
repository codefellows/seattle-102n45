function ryansFaveColor(){
  console.log('Ryan\'s fave color is: Turquoise');
}

function faveColor(color){
  console.log('Ryan\'s Fave color is: ' + color);
}

function personsFaveColor( name, color){
  console.log(name + '\'s fave color is: ' + color);
}

var sayHelloCookie = function(){
  return 'Hello Cookie';
}

var sayHello = function(person){
  var response = person;
  return 'Hello ' + response; //HelloCookie
}

function serveUpCake(cakeType, filling, frosting){
  var message = 'I like ' + cakeType + ' cake with ' + filling + ' filling and ' + frosting + ' frosting';
  return message;
}

function askName(){
  var username = prompt('What is your Name?');
  return document.write('<h3>' + 'Nice to meet you, ' + username + '</h3>');
}

function offerGreeting(){
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  var message;
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = "IT'S BEER O'CLOCK";
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }
  message = '<h3>'+ greeting + '</h3>'
  return document.write(message);
}

function getItem(){
  var preference = prompt('Would you like house or hotel?');
  var item;
  // while true and true // this keeps running / ONE FALSE EJECTS FROM WHILE LOOP
  while(preference !== 'house' && preference !== 'hotel'){
    preference = prompt('Would you like house or hotel? PLEASE ANSWER CORRECTLY');
  }
  if (preference === 'house') {
    item = '<img src="images/house.png">';
  } else if (preference === 'hotel') {
    item = '<img src="images/hotel.png">';
  } 
  return item;
}

function howMany(){
  var count = prompt('Sounds good, how many would you like?');
  // while true and true it keeps asking for a number
  while (count === '' || isNaN(count)){
    var count = prompt('How Many would you like to order?  ENTER A NUMBER!');
  }
  return count;
}

function showOrder(){
  var item = getItem();
  var total = howMany();
  result = '';

  // adds a paragraph with an image in it for each number of times
  for (var i = 0; i < total; i++){
    result = result + '<p>' + item + '</p>';
  }
return document.write(result);

}






function logger(){
  for (var i = 0; i < 5; i++){
    console.log(i);
  }
}

// for (this; many; times){
  //Do the thing;
// }

// while (true){
  //DO the thing;
// }

