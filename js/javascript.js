/* =============== Jumbotron layout for mobile settings ========================== */

			/* ================================= for mobile layout ===============================*/

function myFun1() {
  var element = document.getElementById("myIntro");
  var tmp = document.getElementById("myIntro").className;
  if(tmp == "col-6"){
  	element.classList.remove("col-6");
  }
  element.classList.add("col-12");
}

			/* ================================= for laptop layout ===============================*/

 function myFun2() {
  var element = document.getElementById("myIntro");
  var tmp = document.getElementById("myIntro").className;
  if(tmp == "col-12"){
  	element.classList.remove("col-12");
  }
  element.classList.add("col-6");
}

/* ================================================================================ */




/* =============== About section layout for mobile settings ========================== */

						/* ================================= for mobile layout ===============================*/


function righty1() {
  var element = document.getElementById("right");
  var tmp = document.getElementById("right").className;
  if(tmp == "col-6"){
  	element.classList.remove("col-6");
  }
  element.classList.add("col-12");
}

			/* ================================= for laptop layout ===============================*/

 function righty2() {
  var element = document.getElementById("right");
  var tmp = document.getElementById("right").className;
  if(tmp == "col-12"){
  	element.classList.remove("col-12");
  }
  element.classList.add("col-6");
}

/* ================================================================================ */



/* ======== adding or removing classes for mobile devices of tabs ============= */ 
function myFunction(x) {
 	if (x.matches) { // If media query matches
		myFun1();
		righty1();
	} else {
		myFun2();
		righty2();
	}
}

var x = window.matchMedia("(max-width: 991px)");		// measuring media width
myFunction(x); 		// call function first
x.addListener(myFunction);		// call function on state change also


/* ============================================================================== */


/* ====================================== Showing contact message box ======================================== */

// Get the contact
var contact = document.getElementById("myModal");

// Get the button that opens the conatct form
var contactBtn = document.getElementById("contact");
var contactBtn2 = document.getElementById("contact2");
// Get the <span> element that closes the foem
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
contactBtn.onclick = function() {
  document.getElementById("nav").style.zIndex = "-1";   //sending navbar backward
  contact.style.display = "block";    //select name of heading (message, Discuss project etc)
  document.body.style.position = "fixed";
}

contactBtn2.onclick = function() {
  document.getElementById("nav").style.zIndex = "-1";   //sending navbar backward
  contact.style.display = "block";    //select name of heading (message, Discuss project etc)
  document.body.style.position = "fixed";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById("nav").style.zIndex = "1" ;   //bringing navbar forward on closing contact box
  contact.style.display = "none";
  document.body.style.position = '';
}
document.getElementById("reset").onclick= function () {
    document.getElementById("form").reset();  //reseting form input fields removes all the entered data from input fields
}


/* =============================================== Contact box ends ======================================= */



// Get the project
var projectBtn = document.getElementById("project");
var projectBtn2 = document.getElementById("project2");
// Get the project form
var project = document.getElementById("myProject");

// Get the <span> element that closes the foem
var spanP = document.getElementsByClassName("closed")[0];

projectBtn.onclick = function() {
  document.getElementById("nav").style.zIndex = "-1";   //sending navbar backward
  project.style.display = "block";    //select name of heading (message, Discuss project etc)
  document.body.style.position = "fixed";
}
projectBtn2.onclick = function() {
  document.getElementById("nav").style.zIndex = "-1";   //sending navbar backward
  project.style.display = "block";    //select name of heading (message, Discuss project etc)
  document.body.style.position = "fixed";
}
spanP.onclick = function() {
  document.getElementById("nav").style.zIndex = "1" ;   //bringing navbar forward on closing contact box
  project.style.display = "none";
  document.body.style.position = '';
}

document.getElementById("reseter").onclick= function () {
    document.getElementById("form2").reset();  //reseting form input fields removes all the entered data from input fields
}
