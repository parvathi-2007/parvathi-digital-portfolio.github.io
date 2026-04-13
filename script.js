function showMessage(){
	alert("Welcome to my portfolio!!")
}

function validateForm(){
	let name =document.getElementById("name").value.trim();
	let email =document.getElementById("email").value.trim();
 	let message =document.getElementById("message").value.trim();
	let error =document.getElementById("error");

if(name===""||email===""||message===""){
	error.textContent= "All fields are required";
	return false;
}
if(!email.includes("@")||!email.includes(".")||!email.includes("gmail.com")){
	error.textContent= "Enter a Valid Email";
	return false;
}
error.tetxtContent= " ";
alert ("Form submitted Successfully!!");
return true;
}
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  hiddenElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
