function markComplete(myelement){
    let mydad = $(myelement).parent().parent();
    $(mydad).toggleClass("complete");
    $(mydad).find(".iconspot").toggleClass("fa-check");
}
function removeRow(theelement){
    let grandpa = $(theelement).parent().parent();
    $(grandpa).animate({
        opacity: 0,
        left: "+=50"
    }, 800, function() {
        // Animation complete.
        $(grandpa).remove();
    });
}