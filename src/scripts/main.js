'use strict';
const link = document.querySelectorAll('.list-item__link');

link.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const bigImg = document.querySelector('#largeImg');
  const images = document.querySelectorAll('.gallery__img.gallery__thumb');

  images.forEach((image) => {
    image.addEventListener('click', () => {
      const srcImg = image.getAttribute('src');
      const indexThumb = srcImg.indexOf('-thumb');
      const newSrc = 'images' + srcImg.slice(0, indexThumb) + '.png';
      bigImg.setAttribute('src', newSrc);
    });
  });
});
