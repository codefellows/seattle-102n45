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

function askPreference(){
  var preference = prompt('Do you prefer pickles or beets?');
  var message;
  if (preference === 'pickles') {
    message = 'Cool!  I make bread and butter pickles!';
  } else if (preference === 'beets') {
    message = 'I can my own beets!';
  } else {
    message = 'Well, isn\'t that nice!';
  };
  return document.write('<h3>' + message + '</h3>');
}