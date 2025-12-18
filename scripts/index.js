const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileExitBtn = editProfileModal.querySelector(".modal__exit-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editPofileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editPofileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostButton = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostExitBtn = newPostModal.querySelector(".modal__exit-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCardImageInput = newPostModal.querySelector("#card-image-input");
const newPostCardCaptionInput = newPostModal.querySelector(
  "#card-caption-input"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editPofileNameInput.value = profileNameEl.textContent;
  editPofileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileExitBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
  console.log("submit");
});

newPostExitBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfilesubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editPofileNameInput.value;
  profileDescriptionEl.textContent = editPofileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleNewPostsubmit(evt) {
  evt.preventDefault();

  newPostModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfilesubmit);
newPostForm.addEventListener("submit", handleNewPostsubmit);
