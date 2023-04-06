let theme = document.querySelector('.theme')
let body = document.querySelector('body')
let first = document.querySelectorAll('.dash nav ul li')
let span = document.querySelector('.dash nav ul span')

theme.addEventListener('click', function () {
	theme.classList.toggle('clicked')
    body.classList.toggle('dark-theme')
})

first.forEach((element, k) => {
	element.addEventListener('click', function () {
		span.style.transform = `translateY(${k*3.8}em)`
		
		let parent = element.parentNode
		let btn = parent.querySelector('.active')
		btn.classList.remove('active')

		element.classList.add('active')
	})
})