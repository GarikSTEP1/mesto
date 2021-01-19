const profileName = document.querySelector('.profile__name')
const profileDirection = document.querySelector('.profile__direction')

const popupEditProfile = document.getElementById('popup-edit-profile')
const popupAddCard = document.getElementById('popup-add-card')
const popupImage = document.getElementById('popup-image')

const closeBtnEditProfile = popupEditProfile.querySelector('.popup__button')
const closeBtnAddCard = popupAddCard.querySelector('.popup__button')
const closeBtnImage = popupImage.querySelector('.popup__button')

closeBtnEditProfile.addEventListener('click', () => closePopup(popupEditProfile))
closeBtnAddCard.addEventListener('click', () => closePopup(popupAddCard))
closeBtnImage.addEventListener('click', () => closePopup(popupImage))

popupEditProfile.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		closePopup(popupEditProfile)
	}
})
popupAddCard.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		closePopup(popupAddCard)
	}
})
popupImage.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		closePopup(popupImage)
	}
})

const formEditProfile = popupEditProfile.querySelector('.form')
const formAddCard = popupAddCard.querySelector('.form')

formEditProfile.addEventListener('submit', (event) => {
	event.preventDefault();

	const popupFormFieldName = popupEditProfile.querySelector('.form__field_type_name')
	const popupFormFieldDirection = popupEditProfile.querySelector('.form__field_type_direction')

	profileName.textContent = popupFormFieldName.value;
	profileDirection.textContent = popupFormFieldDirection.value;

	closePopup(popupEditProfile);

})
formAddCard.addEventListener('submit', (event) => {
	event.preventDefault();

	const popupFormFieldPlace = popupAddCard.querySelector('.form__field_type_place')
	const popupFormFieldLink = popupAddCard.querySelector('.form__field_type_link')

	addCard(popupFormFieldPlace.value, popupFormFieldLink.value)

	closePopup(popupAddCard);
})

const btnEditProfile = document.querySelector('.profile__button-edit')
const btnAddCard = document.querySelector('.profile__button')

btnEditProfile.addEventListener('click', () => {
	const popupFormFieldName = popupEditProfile.querySelector('.form__field_type_name')
	const popupFormFieldDirection = popupEditProfile.querySelector('.form__field_type_direction')

	popupFormFieldName.value = profileName.textContent;
	popupFormFieldDirection.value = profileDirection.textContent;

	openPopup(popupEditProfile)
})
btnAddCard.addEventListener('click', () => openPopup(popupAddCard))

function openPopup(popupEl) {
	popupEl.classList.add('popup_opened')
}

function closePopup(popupEl) {
	popupEl.classList.remove('popup_opened')
}

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

const cardTemplate = document.querySelector('#card').content;
const elementsSection = document.querySelector('.elements');

initialCards.reverse().forEach(function (item) {
	addCard(item.name, item.link)
});

function addCard(text, src) {
	const cardElement = cardTemplate.cloneNode(true);
	cardElement.querySelector('.element__image').src = src;
	cardElement.querySelector('.element__title').textContent = text;
	cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__like_active');
	})
	cardElement.querySelector('.element__trash').addEventListener('click', (event) => event.target.closest('.element').remove());
	cardElement.querySelector('.element__image').addEventListener('click', () => {
		 const img = popupImage.getElementsByTagName('img')[0]
		 const p = popupImage.getElementsByTagName('p')[0]
		 img.setAttribute('src', src)
		 p.setAttribute('textContent', text)
		 p.textContent = text
		 openPopup(popupImage)
	});
	
	elementsSection.prepend(cardElement);
}