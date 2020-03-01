var preference = prompt('Do you prefer pickles or beets?');
var message;
if (preference === 'pickles') {
    message = 'Cool!  I make bread and butter pickles!';
} else if (preference === 'beets') {
    message = 'I can my own beets!';
} else {
    message = 'Well, isn\'t that nice!';
};
document.write('<h3>' + message + '</h3>');