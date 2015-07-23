function foo(){
	var num = document.getElementById("num").value;
	if(isNaN(num)){
		console.log("Not a Number");
	}
	else{
		console.log(num);
	}
}

/******* Convert milli seconds to date with date object *******/
function convertMilliSecsToDate(){
	var today = new Date();
	var milli = today.getTime();
	var myDate = new Date(milli);
	console.log(myDate.toString());
}

/******* Objects with functions *******/
var player1 = { name: "Sathish DK", score: 20000, rank: 2 };
var player2 = { name: "Lakshmi S", score: 30000, rank: 1 };

function playerDetails(){
	console.log(this.name + " has a score of " + this.score + " with a rank of " + this.rank);
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

/******* Add elements to DOM *******/
var addListItem = document.getElementById("addListItem");

addListItem.onclick = function(){
	var newItem = document.getElementById("listText");

	var list = document.getElementById("listed");

	var newListItem = document.createElement('li');
	var newListText = document.createTextNode(newItem.value);

	newListItem.appendChild(newListText);
	list.appendChild(newListItem);

	document.getElementById("listText").value = "Enter only text...";
};

/******** Javascript Placeholder ************/
var focusListText = document.getElementById("listText");

focusListText.onfocus = function(){
	if(focusListText.value == "Enter only text..."){
		focusListText.value = "";
	}
};
focusListText.onblur = function(){
	if(focusListText.value == ""){
		focusListText.value = "Enter only text...";
	}
};

/******** Javascript SlideShow *********/
var slide = document.getElementById("slideshow");

var imageGallery = ["images/gallery-image2.jpg", "images/gallery-image3.jpg", "images/gallery-image1.jpg"];
var imageIndex = 0;

function slideShow(){
	slide.setAttribute("src", imageGallery[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageGallery.length){
		imageIndex = 0;
	}
}

var intervalHandler = setInterval(slideShow, 2000);

slide.onmouseover = function(){
	clearInterval(intervalHandler);
};
slide.onmouseout = function(){
	intervalHandler = setInterval(slideShow, 2000);
};