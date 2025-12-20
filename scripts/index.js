const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileExitBtn = editProfileModal.querySelector(".modal__exit-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
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
  openModal(editProfileModal);
  editPofileNameInput.value = profileNameEl.textContent;
  editPofileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileExitBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostExitBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editPofileNameInput.value;
  profileDescriptionEl.textContent = editPofileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("form submitted with values:", {
    imageLink: newPostCardImageInput.value,
    caption: newPostCardCaptionInput.value,
  });

  closeModal(newPostModal);
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);
