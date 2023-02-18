const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

// open the modals

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// function to close it.
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((modal) => modal.addEventListener(`click`, openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
