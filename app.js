var ulGet = document.getElementById('itemslist')
function items(){
    var li =document.createElement('li')
    var inpget=document.getElementById('inp')
    var text =document.createTextNode(inpget.value)
    li.appendChild(text)
    ulGet.appendChild(li)
    inpget.value=''
    var edit=document.createElement('button')
    var editbtn=document.createTextNode(' Edit')
    edit.appendChild(editbtn)
    edit.setAttribute('onclick','liedit(this)')
    li.appendChild(edit)
    var del = document.createElement('button')
    var delbtn=document.createTextNode('Delete')
    del.appendChild(delbtn)
    del.setAttribute('onclick','delbtn(this)')
    li.appendChild(del)        
}
function delall(){
    ulGet.innerHTML=''
}
function liedit(abc){
 var a=prompt('Enter Updated Value',abc.parentNode.firstChild.nodeValue)
 abc.parentNode.firstChild.nodeValue=a
}
function delbtn(xyz){
   xyz.parentNode.remove()
}
