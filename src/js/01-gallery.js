import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const listEl = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const createlistEl = document.createElement('li');

  createlistEl.classList.add('gallery__item');

  createlistEl.innerHTML = ` <a class='gallery__link' href='${item.original}'>
 <img class ='gallery__image'src='${item.preview}'
 data-source='${item.original}' 
        alt='${item.description}'/>
        </a>`;

  listEl.append(createlistEl);
});
// Creați o instanță a SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a');
listEl.addEventListener('click', openImageInLightbox);

function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();
  lightbox.open({
    content: `<img width='1400' height='900' src='${clickedOn.dataset.source}'/>`,
  });
}
