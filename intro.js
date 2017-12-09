var list = document.getElementById('thelist');

//button stuff
var button = document.getElementById('b');

var addelement = function(e){
     var li = document.createElement('li');
     li.innerHTML = 'newitem';
     li.addEventListener('click', removeElement);
     li.addEventListener('mouseover', changeheading);
     li.addEventListener('mouseout', changeheadingback);
     list.appendChild(li);
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
var removeElement = function(e){
     this.remove();
}

//Add all event listeners to pre-existing LI elements
var listelements = document.getElementsByTagName('li');
for (var i = 0; i < listelements.length; i++) {
  listelements[i].addEventListener('click', removeElement);
  listelements[i].addEventListener('mouseover', changeheading);
  listelements[i].addEventListener('mouseout', changeheadingback);
}
