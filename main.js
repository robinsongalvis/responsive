const btn = document.querySelector('.icon')
const nav = document.querySelector('nav')

btn.addEventListener('click',()=>{
	console.log(nav)
	nav.classList.toggle('slide-nav')
})

