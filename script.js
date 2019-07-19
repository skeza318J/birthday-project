function findakhanname() {
var input = document.getElementById("Birthdate").value;


var d = new Date( input );

yyyy = d.getFullYear();
mm = d.getMonth();
mm = mm+1;
dd = d.getDate();
var gender=document.querySelector('input[name="gender"]:checked').value;
console.log(yyyy);
var cc=(yyyy-1)/100+1;
alert(cc);

 var d=( ( (cc/4) -2*cc-1) + ((5*yyyy/4) ) + ((26*(mm+1)/10)) + dd ) % 7; 
var day=Math.round(d);
if(day==0 && gender=='female'){ 
    document.getElementById("AkhanName").innerHTML ='Akosua';
 } else if(day==1 && gender=='female'){
     document.getElementById("AkhanName").innerHTML='Adwoa';
 } else if(day==2 && gender=='female'){
    document.getElementById("AkhanName").innerHTML ='Abenaa'; 
 } else if(day==3 && gender=='female'){
     document.getElementById("AkhanName").innerHTML ='Akua';
 } else if(day==4 && gender=='female'){
     document.getElementById("AkhanName").innerHTML ='Yaa'; 
 } else if(day==5 && gender=='female'){
     document.getElementById("AkhanName").innerHTML ='Afua';
 } else if(day==6 && gender=='female'){
     document.getElementById("AkhanName").innerHTML ='Ama';
 } else if(day==0 && gender=='male'){
     document.getElementById("AkhanName").innerHTML ='Kwasi';
 } else if(day==1 && gender=='male'){
     document.getElementById("AkhanName").innerHTML ='Kwadwo';
 } else if(day==2 && gender=='male'){
     document.getElementById("AkhanName").innerHTML ='Kwabena';
 } else if(day==3 && gender=='male'){
     document.getElementById("AkhanName").innerHTML ='Kwaku';
 } else if(day==4 && gender=='male'){
     document.getElementById("AkhanName").innerHTML ='Yaw';
 } else if(day==5 && gender=='male'){
     document.getElementById("AkhanName").innerHTML ='Kofi';
 } else if(day==6 && gender=='male'){
     document.getElementById("AkhanName").innerHTML ='Kwame';
 }
}






















