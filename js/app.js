function increase(e){
    var inc = e.parentNode.childNodes[3].innerHTML;
    inc++;
    e.parentNode.childNodes[3].innerHTML = inc ++
    
 }
 function decrease(e){
    var dec = e.parentNode.childNodes[3].innerHTML;
    if(dec === "0"){
        dec === "0" 
    }
    else
    {
    dec--;
    e.parentNode.childNodes[3].innerHTML = dec ++
    }
}
 var itemArray = [];
function addItem(e){
    var item = e.parentNode.childNodes[3].innerHTML;
    var price = e.parentNode.parentNode.childNodes[5].innerText;
    var pName = e.parentNode.parentNode.childNodes[3].innerText;
    if(item === "0"){
        itemArray = [];
    }
    else{
    itemArray.push(item*price);
    e.parentNode.childNodes[3].innerHTML = "0";

    var cartContent =document.getElementById('cart-content');
    var para = document.createElement('p');
    var text = document.createTextNode(pName);
    var span = document.createElement('span');
    var sTxt = document.createTextNode(item*price);
    span.appendChild(sTxt);
    span.setAttribute("class", "check")
    para.appendChild(text);
    para.appendChild(span);
    cartContent.appendChild(para);
}
}

function checOut(){
    var sum = 0;
    var total = document.getElementById('total');
    for (let i = 0; i < itemArray.length; i++) {
        sum = sum + itemArray[i]
            total.innerHTML = sum;
            console.log(typeof itemArray[i]+itemArray[i])
    }
}






