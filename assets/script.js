const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

    
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const bannerimg = document.querySelector(".banner-img")
    const lienimg = './assets/images/slideshow/'
    const text = document.querySelector(".text")
    const dots = document.querySelectorAll('.dot');
  let index=0
  
  function updateSlide() {
    const img = slides[index];
    bannerimg.src = './assets/images/slideshow/' + img.image;
    text.innerHTML = img.tagLine;

   
    dots.forEach(dot => {
        dot.classList.remove('dot_selected');
    });
   
    dots[index].classList.add('dot_selected');
}

arrowLeft.addEventListener('click', function(event) {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
});

arrowRight.addEventListener('click', function(event) {
    index = (index + 1) % slides.length;
    updateSlide();
});


dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        index = dotIndex;
        updateSlide();
    });
});

updateSlide();
   

