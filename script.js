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
        e.setAttribute('id','dragDiv');
        var t = document.getElementsByClassName('qa-q-view-content')[0];
        e.className = t.className, e.innerHTML = t.innerHTML,
                e.style.cssText += ';position:fixed;top:2px;right:2px;z-index:9999;border:2px solid black;resize:both;width:30%;height:auto;border-radius:5px;cursor: move;', document.body.append(e)
}();

// Make the DIV element draggable:
dragElement(document.getElementById("dragDiv"));

function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
                // if present, the header is where you move the DIV from:
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
                // otherwise, move the DIV from anywhere inside the DIV: 
                elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
        }
}