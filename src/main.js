import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import request from './js/pixabay-api';
import gallerys from './js/render-functions';
const gallery = document.querySelector('.gallery');

const forms = document.querySelector('.search');
const loader = document.querySelector('.loader');
const loaders = document.querySelector('.loaders');
const simpleBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
const buttonLoad = document.querySelector('.button-load');

export let pages = 0;
export let perPage = 15;
let textQuery = '';

async function searchText(event) {
  try {
    gallery.innerHTML = '';
    pages = 1;
    event.preventDefault();
    const input = event.target;
    const text = input.elements.text.value.trim();
    const textSearch = text.toLowerCase();
    textQuery = textSearch;
    if (textSearch === '') {
      iziToast.warning({
        backgroundColor: '#F4A460',
        position: 'center',
        message: "Sorry, you haven't entered anything!",
      });
      button.disabled = true;
    }

    loader.classList.toggle('js-non-display');

    const firstRequest = await request(textSearch, pages);
    const imgs = firstRequest.data.hits;
    gallerys(imgs);
    buttonLoad.classList.add('js-button-load');
    if (imgs.length === 0 || imgs.length < perPage) {
      buttonLoad.classList.toggle('js-button-load');
    }
    loader.classList.toggle('js-non-display');

    simpleBox.refresh();
  } catch (error) {
    console.log(error);
  }
}

forms.addEventListener('submit', searchText);

async function reloadingCards(event) {
  try {
    pages += 1;
    loaders.classList.toggle('js-non-display-pagination');
    buttonLoad.classList.toggle('js-button-load');
    const posts = await request(textQuery, pages);
    gallerys(posts.data.hits);
    loaders.classList.toggle('js-non-display-pagination');
    gallery.scrollBy({ left: 400, top: 0, behavior: 'smooth' });

    const numberOfPictures = posts.data.total;
    const numberOfPages = Math.ceil(numberOfPictures / perPage);
    console.log(numberOfPages);

    if (numberOfPages <= pages) {
      iziToast.warning({
        backgroundColor: '#FF4500',
        position: 'center',
        message: "We're sorry, but you've reached the end of search results.",
      });
      buttonLoad.classList.remove('js-button-load');
    }
    // buttonLoad.classList.toggle('js-button-load');

    simpleBox.refresh();

    const galleryCard = document.querySelector('.gallery-card');
    const domRect = galleryCard.getBoundingClientRect();
    window.scrollBy({ top: `${domRect.height * 2}`, behavior: 'smooth' });
  } catch (error) {
    console.log(error);
  }
}

buttonLoad.addEventListener('click', reloadingCards);
