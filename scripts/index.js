const profileName = document.querySelector('.profile__name')
const profileDirection = document.querySelector('.profile__direction')

const popupEditProfile = document.getElementById('popup-edit-profile')
const popupAddCard = document.getElementById('popup-add-card')
const popupImage = document.getElementById('popup-image')

const closeBtnEditProfile = popupEditProfile.querySelector('.popup__button')
const closeBtnAddCard = popupAddCard.querySelector('.popup__button')
const closeBtnImage = popupImage.querySelector('.popup__button')

const popupFormFieldName = popupEditProfile.querySelector('.form__field_type_name')
const popupFormFieldDirection = popupEditProfile.querySelector('.form__field_type_direction')

const popupFormFieldPlace = popupAddCard.querySelector('.form__field_type_place')
const popupFormFieldLink = popupAddCard.querySelector('.form__field_type_link')

const formEditProfile = popupEditProfile.querySelector('.form')
const formAddCard = popupAddCard.querySelector('.form')

const btnEditProfile = document.querySelector('.profile__button-edit')
const btnAddCard = document.querySelector('.profile__button')

function openPopup(popupEl) {
	popupEl.classList.add('popup_opened')
}

function closePopup(popupEl) {
	popupEl.classList.remove('popup_opened')
}

closeBtnEditProfile.addEventListener('click', () => closePopup(popupEditProfile))
closeBtnAddCard.addEventListener('click', () => closePopup(popupAddCard))
closeBtnImage.addEventListener('click', () => closePopup(popupImage))

/*От ревьюера: отлично, что сделано закрытие попапа по оверлею, но это задание только следующей проектной работы, лучше не забегать вперед*/
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

formEditProfile.addEventListener('submit', (event) => {
	event.preventDefault()
	profileName.textContent = popupFormFieldName.value
	profileDirection.textContent = popupFormFieldDirection.value
	closePopup(popupEditProfile)
})

formAddCard.addEventListener('submit', (event) => {
	event.preventDefault()
	addCard({
		name: popupFormFieldPlace.value,
		link: popupFormFieldLink.value
	})
	closePopup(popupAddCard)
	popupFormFieldPlace.value = ''
	popupFormFieldLink.value = ''
})

btnEditProfile.addEventListener('click', () => {
	const popupFormFieldName = popupEditProfile.querySelector('.form__field_type_name')
	const popupFormFieldDirection = popupEditProfile.querySelector('.form__field_type_direction')

	popupFormFieldName.value = profileName.textContent
	popupFormFieldDirection.value = profileDirection.textContent

	openPopup(popupEditProfile)
})

btnAddCard.addEventListener('click', () => openPopup(popupAddCard))



const cardTemplate = document.querySelector('#card').content
const elementsSection = document.querySelector('.elements')

function createCard(cardData) {
	const src = cardData.link
	const text = cardData.name

	const cardElement = cardTemplate.cloneNode(true)
	const imageEl = cardElement.querySelector('.element__image')

	imageEl.src = src
	imageEl.alt = text

	cardElement.querySelector('.element__title').textContent = text
	cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__like_active')
	})
	cardElement.querySelector('.element__trash').addEventListener('click', (event) => event.target.closest('.element').remove())
	imageEl.addEventListener('click', () => {
		const img = popupImage.querySelector('.popup__image-place')
		const p = popupImage.querySelector('.popup__text')
		img.src = src
		p.textContent = text
		openPopup(popupImage)
	})
	return cardElement
}

function addCard(cardData) {
	const cardElement = createCard(cardData)
	elementsSection.prepend(cardElement)
}

initialCards.reverse().forEach(function (item) {
	addCard(item)
})