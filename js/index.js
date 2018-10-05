var saying = 'hello world!';
console.log(saying);

// HEAD:
var headElements = document.getElementsByTagName('head');
var head = headElements[0];

var titleElement = document.getElementsByTagName('title');
var title = titleElement[0];

function defineTitle(){
  title.innerHTML = 'Error, T-Rex arms too short to reach this wedsite'
}
defineTitle();

function defineHeadAtributes(){
  var responsive = document.createElement("meta");
  responsive.name= 'viewport';
  responsive.content = 'width=device-width, initial-scale=1';
  head.appendChild(responsive)
  var description = document.createElement("meta");
  description.name= 'description';
  description.content = 'simple, ValillaJS website, minimal html, no css';
  head.appendChild(description)
  var styleElement = document.createElement('style');
  styleElement.rel = "stylesheet"
  styleElement.innerHTML = "h2{font-weight:normal}"
  head.appendChild(styleElement)
}
defineHeadAtributes();

console.log(head);

// BODY:
var body = document.querySelector('body');
body.style.backgroundColor = 'rgb(247,247,247)';
body.style.fontFamily = "'Hind', sans-serif";
body.style.lineHeight = "1.5";
body.style.fontWeight = "lighter"

console.log(body);

var main = document.querySelector('main');
main.style.position = 'fixed';
main.style.top= '19%';
main.style.left = '28%';

console.log(main);

function addMainContnent(){

  var tRex = document.createElement("IMG");
  tRex.src = "./img/tRex.png";
  tRex.id = "t-rex";
  tRex.style.display = 'block';
  main.appendChild(tRex);

  var h2 = document.createElement("H2");
  h2.innerHTML= "T-Rex's arms too short, can't reach internet";
  main.appendChild(h2);

  var p = document.createElement("P");
  p.innerHTML= "Try:";
  main.appendChild(p);

  var ul = document.createElement("UL");
  ul.id = 'main-menu';
  main.appendChild(ul);

  var pSmall = document.createElement("P");
  pSmall.innerHTML = '<small>ERR_INTERNET_DISCONNECTED_CANT_QUITE_REACH</small>'
  main.appendChild(pSmall);

}
addMainContnent();

// select ul:
var ul = document.querySelector('ul');
console.log(ul);

function addListItems(){

  var li1 = document.createElement("LI");
  li1.innerHTML = 'Checking the network cables, modem, and router';
  ul.appendChild(li1);

  var li2 = document.createElement("LI");
  li2.innerHTML = 'Reconnecting to Wi-Fi';
  ul.appendChild(li2);

  var li3 = document.createElement("LI");
  li3.id = 'list-link';
  li3.innerHTML = '<a href="#">Running Your Network Diagnostics</a>';
  ul.appendChild(li3);

}
addListItems()

//clickey thing

document.querySelector('a').onclick = function(){
  alert("sorry it's just too far, pass me a grippy stick or two, I'll be a very grateful t-rex")
}
