const ulDOM=document.querySelector('#list');
function newElement(){

    const txt_newtask=document.querySelector('#task').value;
    const newliDOM = document.createElement('li');
    newliDOM.innerHTML=txt_newtask;
    
    txt_newtask.length>0 ? (ulDOM.append(newliDOM) 
    ,$(".success").toast("show")
    ,$('<i style="float:right; background-color:transparent !important;" class="bi bi-x-circle"></i>').appendTo('#list li:last-child').click(function(){
        $(this).parent().remove();
        return false;
    })) 
    : $(".error").toast("show");
    
}



var liDOM = document.querySelector('ul#list');
liDOM.addEventListener('click',function (e){
    var li = e.target;
    li.classList.contains('finished') ? li.classList.remove('finished') : li.classList.add('finished');
});


//remove the li element which is clicked icon's parent element
$('<i style="float:right; background-color:transparent !important;" class="bi bi-x-circle"></i>').appendTo('#list li').click(function(){
    $(this).parent().remove();
    return false;
});



