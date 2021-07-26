window.onload=js;
function js()
{
        var blank=document.getElementById('blank');
        var row=document.createElement('tr');
        var col1=document.createElement('td');
        var col2=document.createElement('td');
        var arrows= document.createElement('i');
        var arrowLeft= document.createElement('i');
        var arrowRight= document.createElement('i');
        var del= document.createElement('i');
        arrows.className+="fa fa-arrows";
        arrowLeft.className+="fa fa-arrow-left";
        arrowRight.className+="fa fa-arrow-right";
        del.className+="fa fa-trash-o";
        arrowRight.style.marginLeft="12px";
        arrowLeft.style.marginLeft="12px";
        del.style.marginLeft="12px";
        del.style.cursor="pointer";
        arrows.style.cursor="pointer";
        arrowLeft.style.cursor="pointer";
        arrowRight.style.cursor="pointer";
        col1.appendChild(arrows);
        col1.appendChild(arrowLeft);
        col1.appendChild(arrowRight);
        col1.appendChild(del);
        var d= document.createElement('div');
        d.style.marginLeft="5px";
        var box=document.createElement("i");
        box.className+="fa fa-square fa-1x";
        box.id="t";
        var input=document.createElement('input');
        d.appendChild(box);
        d.appendChild(input);
        d.style.color="skyblue";
        col2.appendChild(d);
        row.appendChild(col1);
        row.appendChild(col2);
        blank.appendChild(row);
        let i="30px";
        arrowRight.onclick=function(){
            var temp=d;
            d.style.marginLeft=i;
            input.style.color="gray";
        }
        arrowLeft.onclick=function ()
        {
            console.log("Left Click")
            input.style.color="red";
            d.style.marginLeft="5px";
        }
        
        var button=document.getElementById('b');
        button.onclick=function(){
        var row=document.createElement('tr');
        var col1=document.createElement('td');
        var col2=document.createElement('td');
        var arrows= document.createElement('i');
        var arrowLeft= document.createElement('i');
        var arrowRight= document.createElement('i');
        var del= document.createElement('i');
        arrows.className+="fa fa-arrows";
        arrowLeft.className+="fa fa-arrow-left";
        arrowRight.className+="fa fa-arrow-right";
        del.className+="fa fa-trash-o";
        arrowRight.style.marginLeft="12px";
        arrowLeft.style.marginLeft="12px";
        del.style.marginLeft="12px";
        del.style.cursor="pointer";
        arrows.style.cursor="pointer";
        arrowLeft.style.cursor="pointer";
        arrowRight.style.cursor="pointer";
        col1.appendChild(arrows);
        col1.appendChild(arrowLeft);
        col1.appendChild(arrowRight);
        col1.appendChild(del);
        var d= document.createElement('div');
        d.style.marginLeft="5px";
        var box=document.createElement("i");
        box.className+="fa fa-square fa-1x";
        box.id="t";
        var input=document.createElement('input');
        d.appendChild(box);
        d.appendChild(input);
        d.style.color="skyblue";
        col2.appendChild(d);
        row.appendChild(col1);
        row.appendChild(col2);
        blank.appendChild(row);
        del.onclick=function()
        {
            var e=row;
            var child = e.lastElementChild; 
            while (child) {
                e.removeChild(child);
                child = e.lastElementChild;
            }
        }
        let i="30px";
        arrowRight.onclick=function(){
            var temp=d;
            d.style.marginLeft=i;
            input.style.color="gray";
        }
        arrowLeft.onclick=function ()
        {
            console.log("Left Click")
            input.style.color="red";
            d.style.marginLeft="5px";
        }
    }
} 