console.log("hello");



document.getElementById("submit").addEventListener("click", function(event){
    var password = document.getElementById("password").value;
    var success = document.getElementById("success");
    var danger = document.getElementById("danger");
    var box = document.getElementById("box");
    var label = document.getElementById("label");
    event.preventDefault()
console.log(password);

if(password == "1729284220"){
    console.log("matched");
    success.style.display="block";
    box.style.display="none";
}
if(password == "1729220284"){
    console.log("miss-matched");
    danger.style.display="block";
    label.innerHTML="* Note : you have 1 chance left *"
}
else{
    console.log("miss-matched");
    danger.style.display="block";
    label.innerHTML="* Note : you have 2 chances left *"
   
}



})

