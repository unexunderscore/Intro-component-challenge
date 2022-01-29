//Checking js file is connected to html.
let hello = "Hello There";
console.log(hello);

//Selecting the error icons
let icons = document.querySelectorAll(".icon");

//Selecting the email text (want to coloring red later)
let emailText =  document.getElementById("emailText");

//Selecting Error Text under input (smalls)
let small = document.querySelectorAll("small");

// To toggle display on smalls, give class d-flex

//Selecting all inputs
let inputs = document.querySelectorAll("input");

function isEmpty(){
    for(let i=0; i<=3; i++){
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(inputs[i].value.length == 0 || !inputs[2].value.match(mailformat)){
            small[i].classList.add("d-flex");
            icons[i].style.display = "flex"; 
            if(!inputs[2].value.match(mailformat)){
                emailText.style.color = "hsl(0, 100%, 74%)";
            }
        }
        else{
            small[i].classList.remove("d-flex");
            icons[i].style.display = "none"; 
        }
    }
        
}
