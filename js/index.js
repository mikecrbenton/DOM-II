// Your code goes here

// 1 & 2) MOUSEOVER & MOUSELEAVE===========================
//HOVER OVER MAIN HEADER


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
//KEYPRESS WILL CHANGE BACKGROUND COLOR


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
//SCROLLING CHANGES THE HEADER TO RED


let mainNav = document.getElementsByClassName('main-navigation');

console.log(mainNav);

function h2Temp(){
   mainNav[0].style.backgroundColor = 'red';
}

window.addEventListener('wheel', h2Temp );



// 5) DRAG-DROP===============================================
//NAVIGATION LINKS


const link_items = document.querySelectorAll('.link-item');
const linkDivContainers = document.querySelectorAll('.linkContainer');

// WHY NULL?  nothing to assign yet, but need to declare
// outside the scope of the loop
let draggedItem = null;

//LOOP FOR LINKS
for (let i = 0; i < link_items.length; i++) {
  
	const individualLink = link_items[i];

	individualLink.addEventListener('dragstart', function () {
    
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

}

//LOOP FOR CONTAINERS
for (let j = 0; j < linkDivContainers.length; j ++) {
   const linkDiv = linkDivContainers[j];
   
   linkDiv.addEventListener('dragover', function (e) {
   //ALLOW TO STICK IN NEW LOCATION
      e.preventDefault();
   });
   
   linkDiv.addEventListener('dragenter', function (e) {
   //NOT SURE IF NEEDED
      e.preventDefault();
   });

   linkDiv.addEventListener('drop', function (e) {
      linkDiv.append(draggedItem);
   });
}



// 6) CLICK=================================================
//FOOTER DISAPPEARS WHEN CLICKED


function hideText(){
   document.querySelector(".footer").style.display = 'none';
}

document.querySelector(".footer").addEventListener('click', hideText);



// 7) COPY==================================================
// COPY "LET'S GO" HEADER


//CREATE AN HTML ELEMENT
let newElement = document.createElement("div");	
//CREATE SOME CONTENT
let newText = document.createTextNode("COPIED");
//ADD THAT CONTENT TO THE ELEMENT AND STYLE
newElement.appendChild(newText);
newElement.style.fontSize = "4rem";
newElement.style.backgroundColor = "yellow";

let textToCopy = document.querySelector(".text-content h2");
textToCopy.addEventListener('copy', copy_h2_Header);

function copy_h2_Header(){
   let parent = document.querySelector('.text-content');
   parent.insertBefore( newElement, textToCopy );
}



// 8) DOUBLE-CLICK=============================================


let picToChange = document.querySelector(".img-content img");

picToChange.addEventListener('dblclick', (e)=>{
   e.stopPropagation();
   picToChange.src = "img/fun.jpg";
   container.style.borderStyle = "none";
})



// 9) FOCUS===================================================

let selectedInput = document.getElementsByClassName("input-text");
console.log(selectedInput);

selectedInput[0].addEventListener('focus', ()=>{
   selectedInput[0].value = "something here";
});



// 10) RESIZE====================================================
//WHEN YOU CTRL+ -  


// ADDED TO THE WINDOW OBJECT
window.addEventListener("resize", keepCount);

let resizedTimes = 0;
function keepCount() {
  resizedTimes += 1;
  document.getElementById("count").innerHTML = resizedTimes;
}



// 11) EVENT PROPAGATION==========================================
//ALSO IN USE ON NUMBER 8) TO PREVENT BLACK BORDER WHEN CLICKED


let container = document.querySelector(".container.home");
let introHeader = document.querySelector('.intro');
let h2Header = document.querySelector('.intro h2')

// Without e.stopPropagation(), all the borders
// will remain, instead of being hidden


//CLICK IN THE MIDDLE OF THE PAGE
container.addEventListener('dblclick', (e) => {
   e.stopPropagation();
   container.style.border = "8px solid black";
})

//CLICK ON THE FIRST PARAGRAPH
introHeader.addEventListener('dblclick', (e) => {
   e.stopPropagation();
   introHeader.style.border = "8px solid blue";
   container.style.borderStyle = "none";
})

//CLICK ON "WELCOME TO THE FUN BUS"
h2Header.addEventListener('dblclick', (e) => {
   e.stopPropagation();
   h2Header.style.border = "8px solid yellow";
   introHeader.style.borderStyle = "none";
})



// 12) E.PREVENTDEFAULT========================================

// IN USE IN DRAG & DROP