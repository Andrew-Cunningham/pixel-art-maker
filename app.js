// var div = document.querySelector("div");

// var once = function() {
//   div.backgroungColor=red;
//   div.removeEventListener("click", once);
//   console.log(div.backgroungColor)
// }

// div.addEventListener("click", once);

// var div = document.getElementsByTagName("div");

// var eventHandler = function() {
//     console.log('Woof!');
// }

// div.addEventListener("click", eventHandler);
var redPaintColor = document.getElementById('palette1');
var bluePaintColor = document.getElementById('palette2');
var greenPaintColor = document.getElementById('palette3');
var blackPaintColor = document.getElementById('palette4');
var whitePaintColor = document.getElementById('palette5');
var greyPaintColor = document.getElementById('palette6');
var maroonPaintColor = document.getElementById('palette7');
var orangePaintColor = document.getElementById('palette8');
var limePaintColor = document.getElementById('palette9');
var purplePaintColor = document.getElementById('palette10');
var silverPaintColor = document.getElementById('palette11');
var fuchsiaPaintColor = document.getElementById('palette12');
var forestPaintColor = document.getElementById('palette13');
var aquaPaintColor = document.getElementById('palette14');
var boxedColor = document.getElementById('boxed');
var myDiv = document.querySelectorAll('#canvas');
var newPaintColor = 'white';
// console.log(paintColor)

// for (var i = 0; i < myDiv.length; i++) {
//     myDiv[i].addEventListener("mouseover", eventHandler);
    
// }

var eventHandler = function () {
    this.style.backgroundColor = newPaintColor
    this.style.border=`1px solid ${newPaintColor}`
    boxedColor.style.backgroundColor=newPaintColor
    //console.log(this.style.backgroundColor);
    //console.log(this.style.border,'borderrrrrr');
    //console.log('go mouse!!!!!!!!!!!!!!')
}

for (var i = 0; i < myDiv.length; i++) {
    myDiv[i].addEventListener('click', eventHandler);
}
redPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
bluePaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
greenPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
blackPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
whitePaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
greyPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
maroonPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
orangePaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
limePaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
purplePaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
silverPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
fuchsiaPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
forestPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
aquaPaintColor.addEventListener('click', e => {
    newPaintColor = e.target.className;
    console.log(e.target.className, 'e target');
    console.log(newPaintColor, 'new paint!')
    boxedColor.style.backgroundColor=newPaintColor
});
// for (var i = 0; i < paintColor.length; i++) {
//     paintColor[i].addEventListener('click', chosePaint);
// }