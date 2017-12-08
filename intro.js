var list = document.getElementById('thelist');

//button stuff
var button = document.getElementById('b');
button.addEventListener('click', addelement);
var addelement = function(e){
     var li = document.createElement('li');
     li.innerHTML = 'newitem';
     list.appendChild(li);
}

//remove listelements
var removeelement = function(e){
     this.remove();
}
