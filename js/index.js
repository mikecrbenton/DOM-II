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

let h2_Header = document.querySelector('.text-content h2');

console.log(h2_Header);

function h2Temp(){
   h2_Header.style.color = 'red';
}

h2_Header.addEventListener('wheel', h2Temp );



// 5) DRAG-DROP===============================================
// WORKING - NEED TO FIX
// https://www.youtube.com/watch?v=C22hQKE_32c

let links = document.querySelectorAll('.nav-link'); // node-list
let emptySpace = document.getElementsByClassName('empty'); // do you need the inner tag??

//ADD LISTENER TO LINKS
// for( let i = 0 ; i<links.length ; i++ ){
//    links[i].addEventListener('dragstart', dragStart);
//    links[i].addEventListener('dragend', dragEnd);
// }

emptySpace[0].addEventListener('dragover', dragOver );
emptySpace[0].addEventListener('dragenter', dragEnter );
//emptySpace[0].addEventListener('dragleave', dragLeave );
emptySpace[0].addEventListener('drop', dragDrop );

//DRAG FUNCTIONS
// function dragStart(){
//    console.log('start');
// }
// function dragEnd(){
//    console.log('end');
// }
function dragOver(e){
   e.preventDefault();
}
function dragEnter(e){
   e.preventDefault();
}
// function dragLeave(){
   
// }
function dragDrop(){
   emptySpace[0].append(links[0]); //REIGHT NOW IT ONLY APPENDS THE 1ST ONE - NOT DYNAMIC
}

document.getElementsByClassName



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

textToCopy.addEventListener('copy', copyAppendText);

function copyAppendText(){
   let parent = document.querySelector('.text-content');
   parent.insertBefore( newElement, textToCopy );
}

// PUT SOMEWHERE IN THE DOM
// let domElement = document.querySelector(‘htmlTag .class’);
// let insertBeforeThis = document.querySelectory(‘htmlTag htmlTag’);

// domElement.insertBefore( newElement, insertBeforeThis );



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