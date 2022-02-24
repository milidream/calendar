let mois = document.querySelector("#mois");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let jours = document.querySelector("#days");
let annee = document.querySelector("#annee");
let day = document.querySelectorAll(".day");
const now = new Date();

function getDaysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
};

function generateDays(){
  let ratay = now.toString();
  let words = ratay.split(' ');
  mois.innerHTML = words[1];
  annee.innerHTML = now.getFullYear();
  while(jours.hasChildNodes()){  
    jours.removeChild(jours.firstChild);
  };
  for(let i=1; i<getDaysInMonth(now.getMonth()+1, now.getFullYear())+1; i++){
    let newBtn = document.createElement("button");
    newBtn.setAttribute("class", "day");
    let numero = document.createTextNode(i);
    newBtn.appendChild(numero);
    jours.appendChild(newBtn);
  };
};

function today(){
  now.setMonth(now.getMonth());
  generateDays()
};today();

function suivant(){
  now.setMonth(now.getMonth()+1);
  generateDays();
};
next.addEventListener("click", suivant);

function precedent(){
  now.setMonth(now.getMonth()-1);
  generateDays();
};
previous.addEventListener("click", precedent);