import { galleryItems } from "./gallery-items.js";
// Change code below this line

// посилання на контейнер
const galleryContainer = document.querySelector(".gallery");

// роммітка для формування
function createPictureMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
        `;
    })
    .join("");
}

const cardsMarkup = createPictureMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
  // заборона стандартних дій
  event.preventDefault();

  // перевірка на картинку, якщо так то виходим
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // якщо ні виконуємо бібліотеку SimpleLightbox 
const gallery = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionsDelay: 250,
    overlayOpacity: 0.8,
 });  
}


