

function test () {
	
	
var letter = ['a', 'b', 'c', 'd', 'ы', 'ㅅ', 'ㅊ', 'ㅎ', 'ㄹ','k','p','Д','Ё','E','F','G','p','t','u','o','i','k','ق','g','z','x','w','y','m',' ت','ج','ب '];

        var maLettre = letter[Math.floor(Math.random()*letter.length)];

        return maLettre;
	

      }


var nbr=0;
function Droplets() {
    
	const droplets = document.createElement("div");
    droplets.classList.add("droplets");
     
    droplets.style.left = Math.random() * 100 + "vw";
    droplets.style.animationDuration = Math.random() * 10 + 8 + "s";

    droplets.innerText = test();

    document.body.appendChild(droplets);
    
    setTimeout(() => {
        droplets.remove();
    }, 5000);
}


function inter(){
	
	my=setInterval(Droplets, 50);
}






let cloud = document.getElementById("cloud");
let main2 = document.getElementById("main2");
cloud.addEventListener("click", () => {
  if(getComputedStyle(main2).visibility != "hidden"){
    main2.style.visibility = "hidden";
  } else {
    main2.style.visibility = "visible";
  }
})

let rr = document.getElementById("rr");
let tt = document.getElementById("tt");
rr.addEventListener("click", () => {
  if(getComputedStyle(tt).visibility != "hidden"){
    tt.style.visibility = "hidden";
  } else {
    tt.style.visibility = "visible";
  }
})

let main3 = document.getElementById("main3");
let dd = document.getElementById("dd");
main3.addEventListener("click", () => {
  if(getComputedStyle(dd).visibility != "hidden"){
    dd.style.visibility = "hidden";
  } else {
    dd.style.visibility = "visible";
  }
})

