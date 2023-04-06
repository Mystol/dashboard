let theme = document.querySelector('.theme')
let body = document.querySelector('body')
let first = document.querySelectorAll('.dash nav ul li')

theme.addEventListener('click', function () {
	theme.classList.toggle('clicked')
    body.classList.toggle('dark-theme')
})

first.forEach(element => {
	element.addEventListener('click', function () {
		// element.classList.toggle('active')
		element.classList.remove('active')
		element.classList.add('active')
	})
})