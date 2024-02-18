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
  const grandTotal = totalTicketPrice;
  getID("grand_total").innerText = grandTotal;
  totalId.innerText = totalTicketPrice;
}

function noDuplication(key) {
  if (arr.includes(key.innerText) || arr.length > 3) {
    const message = `no Duplicate Allowed`;
    throw message;
  } else {
    key.classList.add("bg-green", "text-white");
  }
  arr.push(key.innerText);
}

function enabledSubmit() {
  const number = getID("input_number");
  number.addEventListener("keyup", function (e) {
    if (!(e.target.value === "") && arr.length > 0) {
      getID("submit").removeAttribute("disabled");
    }
  });
}

const couponInput = getID("coupon_input");
const couponBtn = getID("coupon_btn");
function coupon() {
  if (arr.length === 4) {
    couponInput.removeAttribute("disabled");
    couponBtn.removeAttribute("disabled");
  }
}

function couponCondition() {
  couponBtn.addEventListener("click", function () {
    if (couponInput.value === "NEW15") {
      createDiscount(15);
      getID('input_div').classList.add('hidden')
    }
  });
}

function createDiscount(per){
  let grandTotal = totalTicketPrice;
  const discount=Math.round(totalTicketPrice*per/100);
  
  grandTotal-=discount;
  getID("grand_total").innerText = grandTotal;
}

