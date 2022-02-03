function removeJoin(element) {
    element.remove();
}

function like(id) {
    var element = document.querySelector(id)
    element.innerText++;
}

function search() {
    var element = document.querySelector('#search');
    alert('You have serached for' + element.value);
}