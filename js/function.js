let totalSet = 40;
let ticket = 0;
let totalTicketPrice = 0;
const arr = [];

function getID(id) {
  return document.getElementById(id);
}

function seatLeft() {
  const seatsLeft = getID("seats-left");
  totalSet--;
  seatsLeft.innerText = totalSet;
}

function createTicketUint() {
  const unit = getID("ticket-unit");
  ticket++;
  unit.innerText = ticket;
}

function appendChildInCard(key) {
  const cardSection = getID("card_section");
  const createDiv = document.createElement("div");
  createDiv.innerHTML = `
  <p class="text-lg">${key.innerText}</p>
  <p class="text-lg">Economy</p>
  <p class="text-lg">550</p>
  `;
  createDiv.classList.add("my-5", "flex", "justify-between");
  cardSection.appendChild(createDiv);
}

function totalPrice() {
  const totalId = getID("total_price");
  const perTicket = 550;
  totalTicketPrice += perTicket;

  totalId.innerText = totalTicketPrice;
}

function noDuplication(key) {
  if (arr.includes(key.innerText) || arr.length > 3) {
    key.classList.remove("bg-green", "text-white");
    const message = `no Duplicate Allowed`;
    throw message;
  }
  arr.push(key.innerText);
  console.log(arr);
}

// function form() {
//   const name = getID("input_name");
//   if(!(name.value==='')){
//     // getID('submit').removeAttribute('disabled')
//     console.log(`achi re vai achi`);
//   }else{
//     console.log(`ami faka`);
//   }
// }

function enabledSubmit() {
  if (arr.length > 0) {
    getID("submit").removeAttribute("disabled");
  }
}
