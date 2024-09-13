import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import request from './js/pixabay-api';
import gallerys from './js/render-functions';
import { render } from './js/render-functions';

const forms = document.querySelector('.search');
const loader = document.querySelector('.loader');
const loaders = document.querySelector('.loaders');
const simpleBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
const buttonLoad = document.querySelector('.button-load');

export let pages = 1;
export let perPage = 15;
let textQuery = '';
// const render = request(pages);

function searchText(event) {
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

  request(textSearch, pages).then(response => {
    const imgs = response.data.hits;
    gallerys(imgs);
    buttonLoad.classList.add('js-button-load');
    if (imgs.length === 0) {
      buttonLoad.classList.toggle('js-button-load');
    }
    loader.classList.toggle('js-non-display');

    simpleBox.refresh();
    // const galleryCard = document.querySelector('.gallery-card');
    // const domRect = galleryCard.getBoundingClientRect();
    // window.scrollBy(0, `${domRect.height * 2}`);
    // console.log(domRect);
  });

  // forms.reset();
}

forms.addEventListener('submit', searchText);

async function reloadingCards(event) {
  try {
    pages += 1;
    loaders.classList.toggle('js-non-display-pagination');
    buttonLoad.classList.toggle('js-button-load');
    const posts = await request(textQuery, pages);
    render(posts.data.hits);
    loaders.classList.toggle('js-non-display-pagination');

    const numberOfPictures = posts.data.total;
    const numberOfPages = Math.ceil(numberOfPictures / perPage);
    simpleBox.refresh();
    if (numberOfPages <= pages) {
      buttonLoad.classList.remove('js-button-load');
      iziToast.warning({
        backgroundColor: '#FF4500',
        position: 'center',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
    buttonLoad.classList.toggle('js-button-load');

    const galleryCard = document.querySelector('.gallery-card');
    const domRect = galleryCard.getBoundingClientRect();
    window.scrollBy(0, `${domRect.height * 2}`);
  } catch (error) {
    console.log(error);
  }
}

buttonLoad.addEventListener('click', reloadingCards);
