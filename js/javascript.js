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