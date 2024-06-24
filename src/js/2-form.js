const formData={
email:"",
message:"",
};
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const email=form.elements.email;
const textarea=form.elements.message;
email.value = localStorage.getItem(localStorageKey) ?? "";
textarea.value=localStorage.getItem(localStorageKey)?? "";


form.addEventListener("input",(evt)=>{

        formData.email=email.value;
        formData.message=textarea.value;
        localStorage.setItem(localStorageKey,JSON.stringify(formData));
    
   
} );
form.addEventListener("submit", funcSubm);
function funcSubm(event){
event.preventDefault();
if(formData.email===""&&formData.message===""){
    alert("Fill please all fields");
}
formData.email=form.elements.email.value;
formData.message=form.elements.message.value;
console.log(formData);
localStorage.removeItem(localStorageKey);
form.reset();
}