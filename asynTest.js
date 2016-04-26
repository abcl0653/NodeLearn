function Person() {
	this.think = function (callback) {
		setTimeout(function() {console.log('Thinking!');callback();},5000);
	};

	this.answer = function () {
		console.log('Answer is called');
	};
}

var person = new Person();

person.think(function() {
	console.log('Thinking 5 seconds, end');
});

person.answer();