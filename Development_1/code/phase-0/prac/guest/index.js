document.addEventListener("DOMContentLoaded", function(){
    //console.log("i am loaded");
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
    });
    const input = document.getElementById("guest-list")
    const button = document.getElementById("btn");
    button.addEventListener("click", function(){
        const list=document.getElementById("list");

        if (list.children.length>=10){
            alert("The guest limit reached");
            return;
        }

        alert("Guest added successfully");

    
    const guestList =document.createElement("li");
    guestList.textContent = input.value;
    list.appendChild(guestList);
    input.value="";

    const removeBtn=document.createElement("button");
    removeBtn.textContent = "Remove Guest";
    guestList.appendChild(removeBtn);
    removeBtn.addEventListener("click", function(){
        guestList.remove();
    });
     const rsvpBtn = document.createElement("button");
     rsvpBtn.textContent = "Attending";
     rsvpBtn.addEventListener("click", function(){
        if(rsvpBtn.textContent ==="Attending"){
            rsvpBtn.textContent = "Not Attending"
        }else{
            rsvpBtn.textContent = "Attending"
        }
        
     });
     guestList.appendChild(rsvpBtn);

    });
    
})