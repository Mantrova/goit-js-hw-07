import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

function createMarkupGallery (arr) {
    return arr
    .map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
    })
    .join("");
}; 

const marcupGalleryItems = createMarkupGallery(galleryItems);
galleryEl.innerHTML = marcupGalleryItems;

galleryEl.addEventListener(`click`, onGalleryItemClick); 

function onGalleryItemClick(e) {
const galleryImg = e.target.classList.contains(`gallery__image`);
e.preventDefault();

if(!galleryImg) {
    return
    }
    const bigGalleryImg = e.target.dataset.source; 
   
    const modal = basicLightbox.create(`
    <img width="1400" height="900" src="${bigGalleryImg}">
    `);
    modal.show();
    
    document.addEventListener("keydown", onModalClose);
    function onModalClose(e) {
        if ("Escape" === e.code) {
          modal.close();
          document.removeEventListener("keydown", onModalClose);
        }
    }
};

