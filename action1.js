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