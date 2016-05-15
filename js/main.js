function askQuestions() {

var firstName = prompt ('What is your first name?');
var lastName = prompt ('What is your last name?');
var fullName = firstName + ' ' + lastName;
console.log(fullName);

var age = prompt('How old are you?');
age = parseInt(age);


if (age >= 18) {
	console.log('User is an adult');
} else if (age >= 13) {
	console.log('User is a teenager');
} else {	
	console.log('User is a child');
}

$('h2').text(firstName + ' is ' + age + 'years old!');

	if (firstName === 'General' && lastName !== 'Assembly') {
		console.log('Greetings General!');
	}

var favecolour = prompt('What is your favourite colour?').toLowerCase();

if (favecolour === 'red' ||
	favecolour === 'blue'||
	favecolour === 'green'||
	favecolour === 'yellow') {

	$('h1').css('color', favecolour);
}

}
//when the page loads
$(function() {
		$('img').on('click', askQuestions);



	//when the user clicks a heading
	$('h3').on('click', function() {

		//slide toggle the content after the heading

		$(this).next().slideToggle(5000);

	});



});