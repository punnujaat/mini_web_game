var rand=(Math.floor(Math.random()*6)+1);
var imge="images/dice"+rand+".png";
document.querySelectorAll("img")[0].setAttribute("src",imge);
var rand1=(Math.floor(Math.random()*6)+1);
var imge1="images/dice"+rand1+".png";
document.querySelectorAll("img")[1].setAttribute("src",imge1);
if(rand >rand1){
document.querySelector("h1").textContent="Player1 Wins";
}
else if(rand==rand1){
document.querySelector("h1").textContent="Match Tied";	
}
else{
document.querySelector("h1").textContent="Player2 Wins";	
}