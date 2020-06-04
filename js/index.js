// Your code goes here

/* Not real impressed with this assignment.  I feel like a previous assignment
   was just rehashed.  Instructions are also poor - some of those events can't 
   even be run without making alterations to the html */


// 1 & 2) MOUSEOVER & MOUSELEAVE===========================
//WORKING
let mainHeader = document.getElementsByClassName('logo-heading');

console.log(mainHeader);

function boldTheHeader(){
   mainHeader[0].style.fontWeight = 'bold';
}
function regTheHeader(){
   mainHeader[0].style.fontWeight = 'normal';
}

mainHeader[0].addEventListener('mouseover', boldTheHeader );
mainHeader[0].addEventListener('mouseleave', regTheHeader );


// 3) KEYDOWN========================================
//WORKING

// ADDED TO THE WINDOW OBJECT
window.addEventListener("keydown", changeColor);

// let resizedTimes = 0;
// function keepCount() {
//   resizedTimes += 1;
//   document.getElementById("count").innerHTML = resizedTimes;

function changeColor(){

    let colorArray = ['blue','red','green','orange','purple','yellow','gray','pink'];

    let elementToChangeColor = document.getElementsByTagName("body");
    elementToChangeColor[0].style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
}


// 4) WHEEL============================================
// WORKING--
// CHANGE TO THIS:  https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event

let h2_Header = document.getElementsByClassName('main-navigation');

console.log(h2_Header);

function h2Temp(){

   h2_Header[0].style.backgroundColor = 'red';
}

h2_Header[0].addEventListener('wheel', h2Temp );



// 5) DRAG-DROP===============================================

const link_items = document.querySelectorAll('.link-item');
const linkDivContainers = document.querySelectorAll('.linkContainer');

// WHY NULL?  nothing to assign yet, but need to declare
// outside the scope of the loop
let draggedItem = null;

// OUTER FOR() LOOP
for (let i = 0; i < link_items.length; i++) {
  
	const individualLink = link_items[i];

	individualLink.addEventListener('dragstart', function () {
    
    //WHY DOES THIS WORK DYNAMICALLY?
		draggedItem = individualLink;
    
    //DISAPPEAR WHEN YOU GRAB IT
		setTimeout(function () {
			individualLink.style.display = 'none';
		}, 0);
	});

	individualLink.addEventListener('dragend', function () {
    
    //SET TO REAPPEAR IN NEW LOCATION
		setTimeout(function () {
			draggedItem.style.display = 'inline-block';
			//DON'T UNDERSTAND WHY THIS
         //draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < linkDivContainers.length; j ++) {
		const linkDiv = linkDivContainers[j];
      
		linkDiv.addEventListener('dragover', function (e) {
      //ALLOW TO STICK IN NEW LOCATION
			e.preventDefault();
		});
		
		linkDiv.addEventListener('dragenter', function (e) {
      //NOT SURE WHY NEEDED
			e.preventDefault();
		});

		linkDiv.addEventListener('dragleave', function (e) {
      //NEED THIS AT ALL?
		});

		linkDiv.addEventListener('drop', function (e) {
			this.append(draggedItem);
		});
	}
}


// 6) CLICK=================================================
//WORKING - NEED TO MAKE APPEAR AGAIN
function hideText(){
   document.querySelector(".intro p").style.display = 'none';
}

document.querySelector(".intro p").addEventListener('click', hideText);



// 7) COPY==================================================
//WORKING

//CREATE AN HTML ELEMENT
let newElement = document.createElement("div");	
//CREATE SOME CONTENT
let newText = document.createTextNode("COPIED");
//ADD THAT CONTENT TO THE ELEMENT
newElement.appendChild(newText);


let textToCopy = document.querySelector(".text-content h2");
textToCopy.addEventListener('copy', copy_h2_Header);

function copy_h2_Header(){
   let parent = document.querySelector('.text-content');
   parent.insertBefore( newElement, textToCopy );
}



// 8) DOUBLE-CLICK=============================================
//WORKING

let picToChange = document.querySelector(".img-content img");
//console.log(picToChange);

picToChange.addEventListener('dblclick', ()=>{
   picToChange.src = "img/fun.jpg";
})

// 9) FOCUS===================================================
//WORKING
let selectedInput = document.getElementsByClassName("input-text");
console.log(selectedInput);

selectedInput[0].addEventListener('focus', ()=>{
   selectedInput[0].value = "something here";
});

// 10) RESIZE====================================================
//WORKING

// ADDED TO THE WINDOW OBJECT
window.addEventListener("resize", keepCount);

let resizedTimes = 0;
function keepCount() {
  resizedTimes += 1;
  document.getElementById("count").innerHTML = resizedTimes;
}