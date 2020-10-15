import galleryItems from './gallery-items.js'

const galleryEl = document.querySelector('.js-gallery')
const modalEl = document.querySelector('.js-lightbox')
const overlayEl = document.querySelector('.lightbox__overlay')
const contentEl = document.querySelector('.lightbox__content')
const modalImgEl = document.querySelector('.lightbox__image')
const modalBtnEl = document.querySelector('.lightbox__button')

const createGalleryList = function(imgList){
   return imgList.map(({preview, original, description}) => {
    return `<li class="gallery__item">
        <a
        class="gallery__link"
        href="${original}"
        >
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
    }).join('')
}

const galleryList = createGalleryList(galleryItems);
console.log(galleryList)

galleryEl.insertAdjacentHTML('beforeend', galleryList);

galleryEl.addEventListener('click', (event) => {
    if(event.target.nodeName !== 'IMG'){
        return
    }
    modalEl.classList.toggle('is-open')
    modalImgEl.src = event.target.src
    modalImgEl.alt = event.target.al
    console.log(event.target)
})








