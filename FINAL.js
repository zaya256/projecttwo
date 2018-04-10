$("#addListInput").keyup(function( event ) {
//console.log("worked");
    let myval = $("#addListInput").val();
    if (event.which === 13) {
        $(".listcontainer").append("<div class='lister'>" + myval + " <input id='" + myval +"' onkeyup='addtheItem(this, this.value, event)' placeholder='add item' type='text'><div class='itembox'></div></div>");
        $("#addListInput").val("");
    }
});

function addtheItem(incid, myvalue, event) {
    if(event.keyCode === 13){
        $(incid).parent().find(".itembox").append("<div class='myitem'>"+ myvalue + "</div>");
        $(incid).val("");
    }
}

addtheItem()

//jquery keaup gej haigaarai

//onkeyup js event gej bas haisan

//function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
//}








function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);