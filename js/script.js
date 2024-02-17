// from btn to ticket section move
document.getElementById("go_to_ticket_section").addEventListener("click", function () {
  const phPoribohod = document.getElementById("ph_section");
  phPoribohod.scrollIntoView({ behavior: "smooth" });
});

// press the key and event control
const keys = document.querySelectorAll(".key");
for (let key of keys) {
  key.addEventListener("click", function (e) {
    key.classList.add("bg-green", "text-white");
    noDuplication(key);
    seatLeft();
    createTicketUint();
    appendChildInCard(key);
    totalPrice();
    enabledSubmit()
  });
}

getID('submit').addEventListener('click', function(){
  form();
})