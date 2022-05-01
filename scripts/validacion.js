const form=document.getElementById("contactForm");

const expNom=/[a-zA-Z ]/g;
const nombre=document.getElementById("txtNom");
const flgNom=expNom.test(nombre.value);
const expCel=/^[0-8](?!.*00)\d{8}$/g;
const cel=document.getElementById("txtCel");
const flgCel=expCel.test(cel.value);
const expCorreo=/^[A-Za-z0-9+_.-]+@(.+)$/g;
const correo=document.getElementById("txtEmail");
const flgCorreo=expCorreo.test(correo.value);
console.log(flgNom);
form.addEventListener("submit",(e)=>{
  debugger;
  e.preventDefault();
    if(flgNom===false){
     console.log(flgNom);
      nombre.classList.add("contact__form-input--invalid");
    }else if(flgNom===true && nombre.value.length>0){
      console.log(flgNom);
      nombre.classList.remove("contact__form-input--invalid");
      nombre.classList.add("contact__form-input--valid");
    }
})
