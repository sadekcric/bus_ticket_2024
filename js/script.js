// from btn to ticket section move
enabledSubmit();
document.getElementById("go_to_ticket_section").addEventListener("click", function () {
  const phPoribohod = document.getElementById("ph_section");
  phPoribohod.scrollIntoView({ behavior: "smooth" });
});

// press the key and event control
const keys = document.querySelectorAll(".key");
for (let key of keys) {
  key.addEventListener("click", function (e) {
    noDuplication(key);
    seatLeft();
    createTicketUint();
    appendChildInCard(key);
    totalPrice();
    coupon();
    couponCondition();
    
  });
}

getID("submit").addEventListener("click", function (e) {
  e.preventDefault();

  const name = getID("input_name");
  const number = getID("input_number");

  if (!(name.value === "") && !(number.value === "")) {
    const success = getID("success");
    success.classList.remove("hidden");
    console.log(success);

    const sections = document.querySelectorAll("section");
    for (let section of sections) {
      section.classList.add("hidden");
    }
  }
});

getID("show").addEventListener("click", function () {
  const sections = document.querySelectorAll("section");
  for (let section of sections) {
    section.classList.remove("hidden");
  }
  const success = getID("success");
  success.classList.add("hidden");
});
