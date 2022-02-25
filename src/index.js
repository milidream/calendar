let mois = document.querySelector("#mois");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let jours = document.querySelector("#days");
let annee = document.querySelector("#annee");
let day = document.querySelectorAll(".day");

let add = document.querySelector("#add");
const now = new Date();
// let m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

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
    // if(now.getDate()==i && now.getMonth()!=i && now.getFullYear()==words[3]){
    //   newBtn.style.backgroundColor = "#50c79d"
    // }
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

function aadd(){
  let task = document.querySelector("#task").value;
  let tasks = document.querySelector("#tasks");
  var t = document.createTextNode("-"+task);
  let p = document.createElement("P");
  p.appendChild(t);
  tasks.appendChild(p);
  p.setAttribute("class", "ev")
}
add.addEventListener("click", aadd);

task.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
  aadd();
  }});