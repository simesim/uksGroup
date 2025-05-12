// Баннер сверху
const slides = document.querySelectorAll('.slide'); 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
setInterval(nextSlide, 7000);

showSlide(currentSlide); 

//Проекты
const sections = {
  'dveri': {
    title: 'СТУДЕНЧЕСКИЙ КАМПУС УРФУ, ЕКАТЕРИНБУРГ',
    description: 'Комплекс работ по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУПП». В составе противопожарных конструкций комплекса используются двери и перегородки из профильной системы Alutech и стекла Pyrolut.',
    images: [
      'photo1.webp',
      'photo2.webp',
      'photo3.webp',
      'photo4.webp'
    ]
  },
  'peregorodki': {
    title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА (ДВВС) ЕКАТЕРИНБУРГ',
    description: 'Работы по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП». В составе используются перегородки и двери из стального профиля Schuco и стекла Pyrolut с пределами огнестойкости EIW45 и EIW30 соответственно.',
    images: [
      'photo1.webp',
      'photo2.webp',
      'photo3.webp',
      'photo4.webp'
    ]
  },
  'okna': {
    title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА, КРЫМ',
    description: 'ООО «УКС ГРУП» выполнило работы по проектированию, производству и монтажу огнестойких витражей и дверей. Выполнены технически сложные работы по монтажу витража высотой более 9 метров со внутренними и наружными углами поворотов. В составе конструкций используются противопожарный профиль Alutech серии F50 и W62 с пределами огнестойкости EIW15 и EIW60.',
    images: [
      'photo1.webp',
      'photo2.webp',
      'photo3.webp',
      'photo4.webp'
    ]
  },
  'vitrazhi': {
    title: 'КЛУБНЫЙ ДОМ "РИВЬЕРА". ЕКАТЕРИНБУРГ',
    description: 'Комплекс работ по остеклению Клубного дома "Ривьера", с использованием фасадных систем премиального уровня SCHUCO и AGC выполнил завод ООО «УКС груп».',
    images: [
      'photo1.webp',
      'photo2.webp',
      'photo3.webp',
      'photo4.webp'
    ]
  }
};

let currentSection = 'dveri';
let currentImageIndex = 0;

function changeSection(section, clickedBtn) {
  currentSection = section;
  currentImageIndex = 0;
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (clickedBtn) clickedBtn.classList.add('active');
  document.getElementById('textTitle').textContent = sections[section].title;
  document.getElementById('textDescription').textContent = sections[section].description;
  updateImage();
}

function updateImage() {
  document.getElementById('photoContainer').style.background = `url('${sections[currentSection].images[currentImageIndex]}') lightgray 50% / cover no-repeat`;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % sections[currentSection].images.length;
  updateImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + sections[currentSection].images.length) % sections[currentSection].images.length;
  updateImage();
}

window.onload = function () {
  updateImage();
  const firstButton = document.querySelector('.button');
  if (firstButton) {
    firstButton.classList.add('active');
  }
};

//о нас

const images = [
  'photo1.webp',
  'photo2.webp',
  'photo3.webp',
  'photo4.webp'
];

let currentIndex = 0;
const photoBlock = document.getElementById('photoBlock');
const prevBtn1 = document.getElementById('prevBtn');
const nextBtn1 = document.getElementById('nextBtn');

function updatePhoto() {
  photoBlock.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updatePhoto();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updatePhoto();
}

nextBtn1.addEventListener('click', showNext);
prevBtn1.addEventListener('click', showPrev);

setInterval(showNext, 7000);

updatePhoto();

// Функция для автозапуска видео с отключенным звуком
function playRutubeVideo() {
  const iframe = document.getElementById('rutube-video');
  const iframeSrc = iframe.src;


  if (!iframeSrc.includes('autoplay=1')) {
    iframe.src = iframeSrc.replace('autoplay=0', 'autoplay=1');
  }
}

// зона видимости
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      playRutubeVideo();
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(document.getElementById('video-container'));


const certsliderTrack = document.querySelector('.certslider-track');
const certsliderPrev = document.querySelector('.certslider-prev');
const certsliderNext = document.querySelector('.certslider-next');

let certsliderIndex = 0;

certsliderPrev.addEventListener('click', () => {
  if (certsliderIndex > 0) {
    certsliderIndex--;
    updateCertslider();
  }
});

certsliderNext.addEventListener('click', () => {
  const slides = document.querySelectorAll('.certslider-slide');
  if (certsliderIndex < slides.length - 1) {
    certsliderIndex++;
    updateCertslider();
  }
});

function updateCertslider() {
  const slideWidth = document.querySelector('.certslider-slide').offsetWidth + 32; // 2 * 1rem margin
  certsliderTrack.style.transform = `translateX(-${certsliderIndex * slideWidth}px)`;
}
