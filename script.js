var modal = document.getElementById("myModal");
var btn = document.querySelector("#home button");
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

btn.addEventListener("click", function (event) {
  event.preventDefault();
  openModal();
});

document
  .getElementById("subscriptionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    closeModal();
  });
