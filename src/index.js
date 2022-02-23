let mois = document.querySelector("#mois");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let jours = document.querySelector("#days");

const allMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const now = new Date();
let name = allMonth[now.getMonth()];

let getDaysInMonth = function(month,year) {
  return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));

function generateDays(){
  for(let i=1; i<getDaysInMonth(6, 2022)+1; i++){
    let newBtn = document.createElement("button");
    newBtn.setAttribute("class", "day")
    let numero = document.createTextNode(i);
    newBtn.appendChild(numero)
    jours.appendChild(newBtn);
  }
}
generateDays();

function changeMonth(){

}