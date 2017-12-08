var list = document.getElementById('thelist');

//button stuff
var addelement = function(e){
     var li = document.createElement('li');
     li.innerHTML = 'newitem';
     list.appendChild(li);
}

var button = document.getElementById('b');
button.addEventListener('click', addelement);

//remove listelements
var removeelement = function(e){
     this.remove();
}

var listelements = document.getElementsByTagName('li');
for (li of listelements){
  li.addEventListener('click', removeelement);
}
