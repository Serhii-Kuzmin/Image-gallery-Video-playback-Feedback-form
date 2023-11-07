import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const arrImg = galleryItems.map((item) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </li>`
})
gallery.insertAdjacentHTML('beforeend', arrImg.join(""));


const lightbox = new SimpleLightbox('.gallery a', {});

gallery.addEventListener('click', event => {
  event.preventDefault();
});

console.log(galleryItems);

