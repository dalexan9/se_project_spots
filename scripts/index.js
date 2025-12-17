const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileExitBtn = editProfileModal.querySelector(".modal__exit-btn");

const newPostButton = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostExitBtn = newPostModal.querySelector(".modal__exit-btn");

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileExitBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostExitBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
