function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }






document.querySelector("form").addEventListener("submit",Loginfun)
    
var Login=JSON.parse(localStorage.getItem("userData"))
function Loginfun(){

    var mail= document.querySelector("#mail").value;
    var pass=document.querySelector("#password").value;

for(var i=0;i<Login.length;i++){
    console.log(Login[i]);
    if((Login[i].email==mail)&&(Login[i].password==pass)){
        // console.log("Login Successful")
        alert("Login Successful");
        window.location.href="men.html";
        window.location.href="women.html";
        break;
    }
    else{
        alert("login Fail")
        break;
        // console.log("Login Fail");

    }
}
}
