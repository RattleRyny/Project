var newEmail = document.getElementById('emailForm');
var addEmailButton = document.getElementById('addEmail');

addEmailButton.addEventListener("click", function(e){
    e.preventDefault();
    addEmail(newEmail.value);
    newEmail.value="";
    console.log("")
})