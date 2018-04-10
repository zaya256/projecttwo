/*var gotName = false;
while(gotName == false){
    var userName = prompt("Welcome to To Do App! What is your name?");

    if (confirm("You entered your name as " + userName +".Is this correct?")){
        alert("Great! Enjoy the App, " + username + "!");
        gotName == true;
    }

}
*/


function myFunction() {
    var checkBox = document.getElementById("task");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
let activeList; 


function addItem(element) {
    activeList = $(element).parent().parent()
    //enenii shuud child n todolist bn//
}


function saveToDoItem(thevalue) {
    $(activeList).find("todolist").append("<div>" + thevalue + "</div>");

}

