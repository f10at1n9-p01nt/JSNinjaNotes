// 3.1 A Simple callback example

var text = "Domo arigato!";
console.log("Before defining functions");

function useless(ninjaCallback) {
  console.log("In useless function");
  return ninjaCallback();
}

function getText() {
  console.log("In getText function");
  return text;
}

console.log("Before making all the calls");

assert(useless(getText) === text,
       "The useless function works! " + text);

console.log("After the calls have been made");

// Used to make assert work
function assert (test, message) {
	if (test) {
		console.log(message);
	};
};

// Taking the above example and defining a callback directly as an argument

assert(useless(function () { return text;}) === text, "The useless function works! " + text);