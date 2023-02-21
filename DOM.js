
function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.EmailId.value;
    const phonenumber=event.target.phonenumber.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber);
    
  
    const obj={
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    show(obj)
    
}

// localStorage.clear()
function show(obj){
  let ul= document.getElementById("listOfitems")
  let li=document.createElement("li");
  li.textContent=obj.name+'   '+obj.email+'   '+obj.phonenumber
  ul.appendChild(li)
}

