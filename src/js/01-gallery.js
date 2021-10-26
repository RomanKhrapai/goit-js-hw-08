// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Change code below this line
const galleryBox = document.querySelector('div.gallery');

const createGalleryHTML = () => {
    return galleryItems.map(galleryItemsToHTML).join('');
}

const galleryItemsToHTML = (item) =>
    {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </li>`;
    };
   
    galleryBox.insertAdjacentHTML('beforeend',createGalleryHTML());

let gallery = new SimpleLightbox('.gallery a',{captionDelay:250,captionsData:'alt'});