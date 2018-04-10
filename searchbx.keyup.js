$(".searchbox").keyup(function(e){
    searchThing($(this).val(),e);

});

function searchThing(thestring, event) {

    if(event.which === 13){
        //javascript event keycodes gej search hiivel jisheenuud garch irne
        //keycode.info
        console.log("You pushed enter key");
    }

    //searchboxt bichsen yumiig consoled gargaj irne

    var mymeats = $(".meatwords").html();
    console.log(mymeats);

    if(mymeats.toLowerCase().includes(thestring)){
        console.log("found: " + thestring);
    }
    else{
        console.log("Not found: " + thestring);
    }
}

