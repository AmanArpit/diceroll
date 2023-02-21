var randomn1=Math.floor((Math.random()*6)+1);
var randomimg="dice"+randomn1+".png";
document.querySelectorAll("img")[0].setAttribute("src","images/"+randomimg);
var randomn2=Math.floor((Math.random()*6)+1);
var randomimg="dice"+randomn2+".png";
document.querySelectorAll("img")[1].setAttribute("src","images/"+randomimg);
if(randomn1>randomn2){
  document.querySelector("h1").innerHTML="⚡ Player 1 Wins !";

}else if(randomn2>randomn1){
  document.querySelector("h1").innerHTML="⚡ Player 2 Wins !";
}else{
  document.querySelector("h1").innerHTML="Draw";
}
