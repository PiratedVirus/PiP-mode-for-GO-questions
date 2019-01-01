var div = document.getElementById('div_id'),
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
clone.id = "some_id";
document.body.appendChild(clone);


$(".qa-q-view-content").clone().insertAfter("div.qa-view-count");




$(document).ready(function () {
        var clone = $(".qa-q-view-content").clone().attr('id','newID');        
        console.log(clone);
        $(clone).insertAfter("div.qa-view-count");
});