var list = document.getElementById('thelist');

//button stuff
var button = document.getElementById('b');

var addelement = function(e){
     var li = document.createElement('li');
     li.innerHTML = 'newitem';
     list.appendChild(li);
     li.addEventListener('click', removeelement);
     li.addEventListener('mouseover', changeheading);
     li.addEventListener('mouseout', changeheadingback);
}

button.addEventListener('click', addelement);

//heading changing
var heading = document.getElementById('h');
var origheading = heading.innerHTML;

var changeheading = function(e){
  heading.innerHTML = this.innerHTML;
}

var changeheadingback = function(e){
  heading.innerHTML = origheading;
}

//remove listelements
var listelements = document.getElementsByTagName('li');

var removeelement = function(e){
     this.remove();
}

for (li of listelements){
  li.addEventListener('click', removeelement);
  li.addEventListener('mouseover', changeheading);
  li.addEventListener('mouseout', changeheadingback);
}
