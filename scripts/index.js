let openButton = document.querySelector('.profile__button-edit')
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__button')

let profileName = document.querySelector('.profile__name')
let profileDirection = document.querySelector('.profile__direction')
let form = document.querySelector('.form')
let formFieldName = form.querySelector('.form__field_type_name')
let formFieldDirection = form.querySelector('.form__field_type_direction')
let formSubmitButton = form.querySelector('.form__submit-button')

function handleFormOpen() {
	formFieldName.value = profileName.textContent;
	formFieldDirection.value = profileDirection.textContent;
	popup.classList.add('popup_opened');
}

openButton.addEventListener('click', handleFormOpen)

function handleFormClose() {
	popup.classList.remove('popup_opened')
}

closeButton.addEventListener('click', handleFormClose)

popup.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		popup.classList.remove('popup_opened')
	}
})

/*function togglePopup() {
	popup.classList.toggle('popup_opened')
}

openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

popup.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		togglePopup()
	}
})*/

function handleFormSubmit(event) {
	event.preventDefault();
	profileName.textContent = formFieldName.value;
	profileDirection.textContent = formFieldDirection.value;
	handleFormClose();
}
form.addEventListener('submit', handleFormSubmit)