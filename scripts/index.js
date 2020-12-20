/*let openButton = document.querySelector('.profile__button-edit')
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popap__close-button')

openButton.addEventListener('click', () => {
	popup.classList.add('popup_opened')
})

closeButton.addEventListener('click', () => {
	popup.classList.remove('popup_opened')
})

popup.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		popup.classList.remove('popup_opened')
	}
})*/

let openButton = document.querySelector('.profile__button-edit')
let popup = document.querySelector('.popup')
let closeButton = popup.querySelector('.popap__button')


let profileName = document.querySelector('.profile__name')
let profileDirection = document.querySelector('.profile__direction')
let form = document.querySelector('.form')
let formFieldOne = form.querySelector('.form__field-one')
let formFieldTwo = form.querySelector('.form__field-two')
let formSubmitButton = form.querySelector('.form__submit-button')


function togglePopup() {
	popup.classList.toggle('popup_opened')
}

openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

popup.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		togglePopup()
	}
})


form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
	event.preventDefault();
	profileName.textContent = formFieldOne.value;
	profileDirection.textContent = formFieldTwo.value;
	/*formFieldOne.value = '';
	formFieldTwo.value = '';*/
}

formSubmitButton.addEventListener('click', () => {
	popup.classList.remove('popup_opened');
})