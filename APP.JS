let gameSeq=[];
let userSeq=[];

let started= false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
     console.logg("game is started");
     started==true;
   }
   levelUp();
});
function btnFlash(btn){
   
}
function levelUp(){
  level++;
  h2.innerText=`Level  $(level)`;
   

}