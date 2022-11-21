import { galleryItems } from "./gallery-items.js";
// Change code below this line

// посилання на контейнер
const galleryContainer = document.querySelector(".gallery");

// роммітка для формування
function createPictureMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
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
        </div> 
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

  // якщо ні виконуємо бібліотеку Lightbox
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  // закриття
  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

