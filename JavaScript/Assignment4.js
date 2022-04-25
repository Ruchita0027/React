function Signup() 
{
   var print1 = document.getElementById("user");
   var print2 = document.getElementById("pass");
   var print3 = document.getElementById("email");
   var print4 = document.getElementById("dob");
   var print5 = document.getElementById("address");


   var username = document.getElementById("printusername");
   var password = document.getElementById("printpassword");
   var email = document.getElementById("printuseremail");
   var dob = document.getElementById("printuserdob");
   var address = document.getElementById("printuseraddress");

   username.innerHTML = print1.value;
   password.innerHTML = print2.value;
   email.innerHTML = print3.value;
   dob.innerHTML = print4.value;
   address.innerHTML = print5.value;

   console.log(print1.value);
   
}