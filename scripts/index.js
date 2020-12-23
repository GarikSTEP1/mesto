let openButton = document.querySelector('.profile__button-edit')
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__button')

let profileName = document.querySelector('.profile__name')
let profileDirection = document.querySelector('.profile__direction')
let form = document.querySelector('.form')
let formFieldOne = form.querySelector('.form__field_name')
let formFieldTwo = form.querySelector('.form__field_direction')
let formSubmitButton = form.querySelector('.form__submit-button')

openButton.addEventListener('click', () => {
	popup.classList.add('popup_opened');
	formFieldOne.value = profileName.textContent;
	formFieldTwo.value = profileDirection.textContent;
})

closeButton.addEventListener('click', () => {
	popup.classList.remove('popup_opened')
})

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
	profileName.textContent = formFieldOne.value;
	profileDirection.textContent = formFieldTwo.value;
	function closePopup(){
		popup.classList.remove('popup_opened')
	};
	closePopup();
}
form.addEventListener('submit', handleFormSubmit)

