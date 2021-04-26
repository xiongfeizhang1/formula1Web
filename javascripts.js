//counter used to cycle through images
var i =0;

//array of images
var images = [];
images[0] = 'img/thumbnail1.jpg';
images[1] = 'img/thumbnail2.jpg';
images[2] = 'img/thumbnail3.jpg';
images[3] = 'img/thumbnail4.jpg';

//function for loading the initial image
function loadInitial(){
	document.slide.src=images[0];
}

//function for incrementing counter and loading image
function nextImg(){	

	if(i < images.length -1){
		i++;
	} else{
		i=0;
	}
	document.slide.src=images[i];
}

//function for decrementing the counter and loading the image
function prevImg(){
	if(i > 0){
		i--;
	}
	else{
		i=images.length-1;
	}
	document.slide.src=images[i];
}

//load the initial image when gallery window opens
 if (window.location.href.match('gallery.html')){
 	window.onload = loadInitial;
 }

//variable that counts correct answers
var correct = 0;
//reset correct answers to 0 whenever they load the quiz page
 if (window.location.href.match('game.html')){
 	correct = 0;
 }

//function that check whether quiz answer input is correct 
function grade1(){
	var answer = document.getElementById("question1").value;
	if(answer == "91" || answer == "ninety one"){
		correct++;
	}
}
function grade2(){
	var q2b = document.getElementById("q2b");
	if(q2b.checked == true){
		correct++;
	}
}
function grade3(){
	var q3b = document.getElementById("q3b");
	if(q3b.checked == true){
		correct++;
	}
}
//grade function that runs all the others and outputs response
function grade(){
	grade1();
	grade2();
	grade3();

	//for when user gets all correct
	if(correct == 3){
		alert("Congratulations! You got all 3 correct");
	}
	//for when user misses one or more questions
	else{
		alert("You got " + correct + " out of 3 correct!");
	}
	//reset score to 0
	correct=0;
}

//if users are on the home page run the static function to load the static image
 if (window.location.href.match('index.html')){
 	window.onload = preloadGif;
 }
 function preloadGif(){
 	//sets the initial image to static one
 	document.gif.src='img/vettelStatic.png';
 	//loads up the Gif image so it wont take time to load once the mouse hovers over it
 	var img = new Image();
 	img.src='img/vettelMoving.gif';
 }
 //function to load the animated gif
function ani(){
	document.gif.src='img/vettelMoving.gif';
}
//function to load the static png
function static(){
	document.gif.src='img/vettelStatic.png';
}
//jquery command to scroll to the top of the page
function scrollUp(){
	$("html").animate({ scrollTop: 0 }, "slow");
}

/*list of upcoming races*/
myEvents = [
	{ name: "Austrian GP", date: "July/5/2020", type: "event" },
	{ name: "Steiermark GP", date: "July/12/2020", type: "event" },
	{ name: "Hungarian GP", date: "July/19/2020", type: "event" },
	{ name: "British GP", date: "August/2/2020", type: "event" },
	{ name: "70th Anniversary GP", date: "August/9/2020", type: "event" },
	{ name: "Spanish GP", date: "August/16/2020", type: "event" },
	{ name: "Belgian GP", date: "August/30/2020", type: "event" },
	{ name: "Italian GP", date: "September/6/2020", type: "event" },
	{ name: "Russian GP", date: "September/27/2020", type: "event" },
	{ name: "United States GP", date: "October/25/2020", type: "event" },
	{ name: "Mexico GP", date: "November/1/2020", type: "event" },
	{ name: "Brazilian GP", date: "November/15/2020", type: "event" },
	{ name: "Abu Dhabi GP", date: "November/29/2020", type: "event" },
	{ name: "Bahrain GP", date: "March/28/2021", type: "event" },
	{ name: "Emilia Romagna GP", date: "April/18/2021", type: "event" },
	{ name: "Portuguese GP", date: "May/2/2021", type: "event" },
	{ name: "Spanish GP", date: "May/9/2021", type: "event" },
	{ name: "Monaco GP", date: "May/23/2021", type: "event" },
	{ name: "Azerbaijan GP", date: "June/6/2021", type: "event" },
	{ name: "Canadian GP", date: "June/13/2021", type: "event" },
	{ name: "French GP", date: "June/27/2021", type: "event" },
	{ name: "Austrian GP", date: "July/4/2021", type: "event" },
	{ name: "British GP", date: "July/18/2021", type: "event" },
	{ name: "Hungarian GP", date: "August/1/2021", type: "event" },
	{ name: "Belgian GP", date: "August/29/2021", type: "event" },
	{ name: "Dutch GP", date: "September/5/2021", type: "event" },
	{ name: "Italian GP", date: "September/12/2021", type: "event" },
	{ name: "Russian GP", date: "September/26/2021", type: "event" },
	{ name: "Singapore GP", date: "October/3/2021", type: "event" },
	{ name: "Japanese GP", date: "October/10/2021", type: "event" },
	{ name: "United States GP", date: "October/24/2021", type: "event" },
	{ name: "Mexican GP", date: "October/31/2021", type: "event" },
]


//jquery functions that shows hidden text when button is pressed
$(document).ready(function(){
	$("#showContact").click(function(){
		$("#contact").show(1000);
	});
	$("#showEngine").click(function(){
		$("#engine").show(1000);
	});
	$("#showTires").click(function(){
		$("#tires").show(1000);
	});
	$("#showAero").click(function(){
		$("#aero").show(1000);
	});



});
/*if user is on the calendar page*/
 if (window.location.href.match('calendar.html')){
	$(document).ready(function(){
		//calls calendar plugin
		$('#evoCalendar').evoCalendar({
		  calendarEvents: myEvents
		});
	});
}


