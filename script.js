// var div = document.getElementById('div_id'),
//     clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
// clone.id = "some_id";
// document.body.appendChild(clone);


// $(".qa-q-view-content").clone().insertAfter("div.qa-view-count");




// $(document).ready(function () {
//         var clone = $(".qa-q-view-content").clone().attr('id','newID');        
//         console.log(clone);
//         $(clone).insertAfter("div.qa-view-count");
// });

void function () {
        var e = document.createElement('div');
        var t = document.getElementsByClassName('qa-q-view-content')[0];
        e.className = t.className, e.innerHTML = t.innerHTML,
                e.style.cssText += ';position:fixed;top:2px;right:2px;z-index:9999;border:2px solid black;resize:both;width:30%;height:auto', document.body.append(e)
}();