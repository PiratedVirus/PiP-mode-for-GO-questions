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
{/* <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>  */}

// $(document).ready(function () {

        void function () {
                var e = document.createElement('div');
                e.setAttribute('id','dragDiv');
                
                var t = document.getElementsByClassName('qa-q-view-content')[0];
                e.className = t.className, e.innerHTML = t.innerHTML,
                e.style.cssText += ';position:fixed;top:2px;right:2px;z-index:9999;border:2px solid black;resize:both;width:30%;height:auto;border-radius:5px;cursor: move;', document.body.append(e)
                
                var c_html_before = 'Show Calc';
                var c_html_after = '<iframe src="https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html#nogo" width="471px" height="339px" style = "-webkit-transform:scale(0.85);-moz-transform-scale(0.85);" ></iframe>';

                var btn = document.createElement('div');
                btn.setAttribute('id', 'hidden');

                btn.innerHTML = c_html_after, btn.style.cssText += ';display:none;position:fixed;bottom:22px;right:0px;z-index:9999;cursor: move;', document.body.append(btn);
               

                
                var getReadBtn = document.getElementsByName('read-button')
                var calc = document.createElement('button');
                
                calc.setAttribute('id','gate-calc');
                calc.setAttribute('onClick', 'var x = document.getElementById("gate-calc"); if (x.innerText == "Show Calc") { x.innerText = "Hide Calc"; var cc = document.getElementById("hidden"); cc.style.cssText += "; display: block;"} else { x.innerText = "Show Calc"; var cc = document.getElementById("hidden"); cc.style.cssText += "; display: none;" }');

                calc.innerHTML = c_html_before, calc.style.cssText += ';position:fixed;top:17px;left:2px;z-index:9999;border:2px solid black;resize:both;border-radius:5px;cursor: pointer;', document.body.append(calc)

        }();

        // Make the DIV element draggable:
        dragElement(document.getElementById("dragDiv"));
        dragElement(document.getElementById("hidden"));

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

// });
