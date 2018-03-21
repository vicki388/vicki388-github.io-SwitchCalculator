// this gives us the order of the buttons, which we can use to step through the buttons in various directions
// since we know the layout, + 1 moves to the next item, -1 previous, +4 is one row down, -4 is one row up
buttonOrder = ["#button7","#button8","#button9","#buttonDivide","#button4","#button5","#button6","#buttonMultiply","#button1","#button2","#button3","#buttonAdd","#button0","#buttonClear","#buttonEquals","#buttonSubtract"];

//Globabl Variable to keep track of timing events
var isSelect = "default";
// add the selected class to an item. you can pass this any jquery selector, such as #id or .class
// calling this will de-select anything currently selected
function selectItem(name) {
	$("button").removeClass("cursor");
	$(name).addClass("cursor")
}

// gets the currently selected item, and returns its #id
// returns null if no item is selected
// note that if multiple items are selected, this will only return the first
// but you could rewrite this to return a list of items if you wanted to track multiple selections
function getSelectedItem() {
	selected = $(".cursor"); // this returns an array
	if (selected.length == 0) {
		return null;
	}
	else {
		return "#" + selected.first().attr('id')
	} 
}

// the next four functions move the selected UI control
// this uses the array buttonOrder to know the order of the buttons. so you could change buttonOrder
// to change the order that controls are highlighted/
// if no button is currently selected, such as when the page loads, this will select the first
// item in buttonOrder (which is the 7 button)
// selectNext: go to the right, wrapping around to the next row
// selectPrevious: go to the left, wrapping around to the previous row
// selectUp: select the item above
// selectDown: select the item below

function selectNext() {
	selected = getSelectedItem()
	if (selected == null) {
		selectItem(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index + 1) % buttonOrder.length;
		selectItem(buttonOrder[index])
	}
}

function selectPrevious() {
	selected = getSelectedItem()
	if (selected == null) {
		selectItem(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index - 1);
		if (index < 0) index = buttonOrder.length + index
		selectItem(buttonOrder[index])
	}	
}

function selectUp() {
	selected = getSelectedItem()
	if (selected == null) {
		selectItem(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index - 4);
		if (index < 0) index = buttonOrder.length + index
		selectItem(buttonOrder[index])
	}
}

function selectDown() {
	selected = getSelectedItem()
	if (selected == null) {
		selectItem(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index + 4) % buttonOrder.length;
		selectItem(buttonOrder[index])
	}
}

// actuate the currently selected item
// if no item is selected, this does nothing
// if multiple items are selected, this selects the first
function clickSelectedItem() {
	whichButton = getSelectedItem();
	if (whichButton != null) {
		$(whichButton).click();
	}
}

// this function responds to user key presses
// you'll rewrite this to control your interface using some number of keys
var stringval = "";
var first = 0;
var second = 0;
var count = 0;
var op = "";
$(document).keypress(function(event) {
	if (count == 2)
	{
		count = 0;
	}
	if (event.key == "a") {
		if(isSelect == "one"){
			//alert("You pressed the one key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"1");
		}
		if(isSelect == "two"){
			//alert("You pressed the two key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"2");
		}
		else if(isSelect == "three"){
			//alert("You pressed the three key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"3");
		}
		else if(isSelect == "four"){
			//alert("You pressed the four key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"4");
		}
		else if(isSelect == "five"){
			//alert("You pressed the five key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"5");
		}
		else if(isSelect == "six"){
			//alert("You pressed the six key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"6");
		}
		else if(isSelect == "seven"){
			//alert("You pressed the seven key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"7");
		}
		else if(isSelect == "eight"){
			//alert("You pressed the eight key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"8");
		}
		else if(isSelect == "nine"){
			//alert("You pressed the nine key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"9");
		}
		else if(isSelect == "divide"){
			if(count == 0)
			{
				op = "/";
				first = $("#number_input").val();
				$("#number_input").val("");
				count ++;

			}

			//alert("You pressed the divide key")
		}
		else if(isSelect == "multiply"){
			if(count == 0)
			{
				op = "*";
				first = $("#number_input").val();
				$("#number_input").val("");
				count ++;

			}
			//alert("You pressed the multiply key")
		}
		else if(isSelect == "add"){
			if(count == 0)
			{
				op = "+";
				first = $("#number_input").val();
				$("#number_input").val("");
				count ++;

			}
			//alert("You pressed the add key")
		}
		else if(isSelect == "subtract"){
			if(count == 0)
			{
				op = "-"
				first = $("#number_input").val();
				$("#number_input").val("");
				count ++;

			}
			//alert("You pressed the subtract key")
		}
		else if(isSelect == "equals"){
			//alert("You pressed the equals key")
			if(count == 1){

				second = $("#number_input").val();
				evaluateExpression(first, op, second);
				count ++;
			}
		}
		else if(isSelect == "clear"){
			//alert("You pressed the clear")
			$("#number_input").val("");
		}
		else if(isSelect == "zero"){
			//alert("You pressed the zero key")
			stringval = $("#number_input").val();
			$("#number_input").val(stringval+"0");
		}
	} else if (event.key == "b") {
		alert("You pressed the 'b' key!")
	}
});

setTimeout(function () {
	isSelect = "one";
    $("#button1").css("background-color", "green");
 }, 1000);
setTimeout(function () {
	isSelect = "default";
    $("#button1").css("background-color", "white");
 }, 2000);
 setTimeout(function () {
 	isSelect = "two";
    $("#button2").css("background-color", "green");
 }, 3000);	
 setTimeout(function () {
 	isSelect = "default";
 	$("#button2").css("background-color", "white");
 }, 4000);
 setTimeout(function () {
 	isSelect = "three";
 	$("#button3").css("background-color", "green");
 }, 5000);
 setTimeout(function () {
 	isSelect = "default";
    $("#button3").css("background-color", "white");
 }, 6000);
 setTimeout(function () {
 	isSelect = "four";
    $("#button4").css("background-color", "green");
 }, 7000);
 setTimeout(function () {
 	isSelect = "default";
 	$("#button4").css("background-color", "white");
 }, 8000);
 setTimeout(function () {
 	isSelect = "five";
    $("#button5").css("background-color", "green");
 }, 9000);
 setTimeout(function () {
 	isSelect = "default";
    $("#button5").css("background-color", "white");
 }, 10000);
 setTimeout(function () {
 	isSelect = "six";
 	$("#button6").css("background-color", "green");
 }, 11000);
 setTimeout(function () {
 	isSelect = "default";
    $("#button6").css("background-color", "white");
 }, 12000); 
setTimeout(function () {
	isSelect = "seven";
    $("#button7").css("background-color", "green");
}, 13000);
setTimeout(function () {
	isSelect = "default";
    $("#button7").css("background-color", "white");
}, 14000);
setTimeout(function () {
	isSelect = "eight";
    $("#button8").css("background-color", "green");
}, 15000);
setTimeout(function () {
	isSelect = "default";
    $("#button8").css("background-color", "white");
}, 16000);
setTimeout(function () {
	isSelect = "nine";
    $("#button9").css("background-color", "green");
}, 17000);
setTimeout(function () {
	isSelect = "default";
    $("#button9").css("background-color", "white");
}, 18000);
setTimeout(function () {
	isSelect = "divide";
    $("#buttonDivide").css("background-color", "green");
}, 19000);
setTimeout(function () {
	isSelect = "default";
    $("#buttonDivide").css("background-color", "navy");
}, 20000);
setTimeout(function () {
	isSelect = "multiply";
    $("#buttonMultiply").css("background-color", "green");
}, 21000);
setTimeout(function () {
	isSelect = "default";
    $("#buttonMultiply").css("background-color", "navy");
}, 22000);
setTimeout(function () {
	isSelect = "add";
    $("#buttonAdd").css("background-color", "green");
}, 23000);
setTimeout(function () {
	isSelect = "default";
    $("#buttonAdd").css("background-color", "navy");
}, 24000);
setTimeout(function () {
	isSelect = "subtract";
    $("#buttonSubtract").css("background-color", "green");
}, 25000);
setTimeout(function () {
	isSelect = "default";
    $("#buttonSubtract").css("background-color", "navy");
}, 26000);
setTimeout(function () {
	isSelect = "equals";
    $("#buttonEquals").css("background-color", "green");
}, 27000);
setTimeout(function () {
	isSelect = "default";
    $("#buttonEquals").css("background-color", "red");
}, 28000);
setTimeout(function () {
	isSelect = "clear";
    $("#buttonClear").css("background-color", "green");
}, 29000);
setTimeout(function () {
	isSelect = "default";
    $("#buttonClear").css("background-color", "red");
}, 30000);
setTimeout(function () {
	isSelect = "zero";
    $("#button0").css("background-color", "green");
}, 31000);
setTimeout(function () {
	isSelect = "default";
    $("#button0").css("background-color", "white");
}, 32000);

setInterval(function() {
    setTimeout(function () {
    	isSelect = "one";
    	$("#button1").css("background-color", "green");
 	}, 1000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button1").css("background-color", "white");
 	}, 2000);
 	 setTimeout(function () {
 	 	isSelect = "two";
    	$("#button2").css("background-color", "green");
 	}, 3000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button2").css("background-color", "white");
 	}, 4000);
 	setTimeout(function () {
 		isSelect = "three";
    	$("#button3").css("background-color", "green");
 	}, 5000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button3").css("background-color", "white");
 	}, 6000);
 	 setTimeout(function () {
 	 	isSelect = "four";
    	$("#button4").css("background-color", "green");
 	}, 7000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button4").css("background-color", "white");
 	}, 8000);
 	setTimeout(function () {
 		isSelect = "five";
    	$("#button5").css("background-color", "green");
 	}, 9000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button5").css("background-color", "white");
 	}, 10000);
 	 setTimeout(function () {
 	 	isSelect = "six";
    	$("#button6").css("background-color", "green");
 	}, 11000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button6").css("background-color", "white");
 	}, 12000); 
 	setTimeout(function () {
 		isSelect = "seven";
    	$("#button7").css("background-color", "green");
 	}, 13000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button7").css("background-color", "white");
 	}, 14000);
 	 setTimeout(function () {
 	 	isSelect = "eight";
    	$("#button8").css("background-color", "green");
 	}, 15000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button8").css("background-color", "white");
 	}, 16000);
 	setTimeout(function () {
 		isSelect = "nine";
    	$("#button9").css("background-color", "green");
 	}, 17000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button9").css("background-color", "white");
 	}, 18000);
 	setTimeout(function () {
 	 	 	isSelect = "divide";
    	$("#buttonDivide").css("background-color", "green");
 	}, 19000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#buttonDivide").css("background-color", "navy");
 	}, 20000);	
 	 setTimeout(function () {
 	 	isSelect = "multiply";
    	$("#buttonMultiply").css("background-color", "green");
 	}, 21000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#buttonMultiply").css("background-color", "navy");
 	}, 22000);
 	setTimeout(function () {
 		 isSelect = "add";
    	$("#buttonAdd").css("background-color", "green");
 	}, 23000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#buttonAdd").css("background-color", "navy");
 	}, 24000);		
 	setTimeout(function () {
 		isSelect = "subtract";
    	$("#buttonSubtract").css("background-color", "green");
 	}, 25000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#buttonSubtract").css("background-color", "navy");
 	}, 26000);
 	 	 setTimeout(function () {
 	 	 isSelect = "equals";
    	$("#buttonEquals").css("background-color", "green");
 	}, 27000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#buttonEquals").css("background-color", "red");
 	}, 28000);		
 		 setTimeout(function () {
 		isSelect = "clear";
    	$("#buttonClear").css("background-color", "green");
 	}, 29000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#buttonClear").css("background-color", "red");
 	}, 30000);
 	 setTimeout(function () {
 	 	isSelect = "zero";
    	$("#button0").css("background-color", "green");
 	}, 31000);
 	 setTimeout(function () {
 	 	isSelect = "default";
    	$("#button0").css("background-color", "white");
 	}, 32000);
}, 33000); // 2 second interval

/* calculator stuff below here */
// for operations, we'll save + - / *
firstValue = null;
operation = null;
addingNumber = false;

digits = "0123456789"
operators = "+-*/"

// handle calculator functions. all buttons with class calcButton will be handled here
$(".calcButton").click(function(event) {
	buttonLabel = $(this).text();
	
	// if it's a number, add it to our display
	if (digits.indexOf(buttonLabel) != -1) {
		// if we weren't just adding a number, clear our screen
		if (!addingNumber) {
			$("#number_input").val("")
		}
		$("#number_input").val($("#number_input").val() + buttonLabel);
		addingNumber = true;
	// if it's an operator, push the current value onto the stack
	} else if (operators.indexOf(buttonLabel) != -1) {
		// have we added a number? if so, check our stack
		if (addingNumber) {
			// is this the first number on the stack?
			// if so, save it
			if (firstValue == null) {
				firstValue = $("#number_input").val();
				addingNumber = false;
			// do we have a number on the stack already? if so, this is the same as equals
			} else if (firstValue != null) {
				secondValue = $("#number_input").val();
				evaluateExpression(firstValue,operation,secondValue)
				// in this case, keep the operation
				firstValue = $("#number_input").val();
				addingNumber = false;
			}
		}
		// either way, save this as the most recent operation
		operation = buttonLabel;
	} else if (buttonLabel == "C") {
		$("#number_input").val("");
		firstValue = null;
		operation = null;
		addingNumber = false;
	} else if (buttonLabel == "=") {
		if (firstValue != null && operation != null && addingNumber) {
			secondValue = $("#number_input").val();
			evaluateExpression(firstValue,operation,secondValue);
			// clear our state
			firstValue = null;
			operation = null;
			addingNumber = true
		}
	}
})

// do the math for our calculator
function evaluateExpression(first,op,second) {
	output = 0;
	if (op == "+") {
		output = parseInt(first) + parseInt(second);
	} else if (op == "-") {
		output = parseInt(first) - parseInt(second);
	} else if (op == "*") {
		output = parseInt(first) * parseInt(second);
	} else if (op == "/") {
		output = parseInt(first) / parseInt(second);
	}
	
	// now, handle it
	$("#number_input").val(output.toString());
	// deal with state elsewhere
}