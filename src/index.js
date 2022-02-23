let mois = document.querySelector("#mois");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let jours = document.querySelector("#days");
let annee = document.querySelector("#annee");

const now = new Date();

now.setMonth(now.getMonth());
  let ratay = now.toString();
  let words = ratay.split(' ');
  mois.innerHTML = words[1];

now.getMonth();
function getDaysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
};

function generateDays(){
  for(let i=1; i<getDaysInMonth(now.getMonth()+1, now.getFullYear())+1; i++){
    let newBtn = document.createElement("button");
    newBtn.setAttribute("class", "day");
    let numero = document.createTextNode(i);
    newBtn.appendChild(numero);
    jours.appendChild(newBtn);
  };
};

generateDays();

function suivant(){
  now.setMonth(now.getMonth()+1);
  let ratay = now.toString();
  let words = ratay.split(' ');
  mois.innerHTML = words[1];
  annee.innerHTML = now.getFullYear();
  console.log(now);
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
next.addEventListener("click", suivant);

function precedent(){
  now.setMonth(now.getMonth()-1);
  let ratay = now.toString();
  let words = ratay.split(' ');
  mois.innerHTML = words[1];
  annee.innerHTML = now.getFullYear();
  console.log(now);
  while(jours.hasChildNodes()){  
    jours.removeChild(jours.firstChild);
  };
  for(let i=1; i<getDaysInMonth(now.getMonth()-1, now.getFullYear())+1; i++){
    let newBtn = document.createElement("button");
    newBtn.setAttribute("class", "day");
    let numero = document.createTextNode(i);
    newBtn.appendChild(numero);
    jours.appendChild(newBtn);
  };
};
previous.addEventListener("click", precedent);