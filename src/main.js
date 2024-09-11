import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import request from './js/pixabay-api';
import gallerys from './js/render-functions';
import { paginationRender } from './js/render-functions';

const forms = document.querySelector('.search');
const loader = document.querySelector('.loader');
const simpleBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
const buttonLoad = document.querySelector('.button-load');

export let pages = 1;
export let perPage = 15;

function searchText(event) {
  event.preventDefault();
  const input = event.target;
  const text = input.elements.text.value.trim();
  const textSearch = text.toLowerCase();
  if (textSearch === '') {
    return;
  }

  loader.classList.toggle('js-non-display');

  request(textSearch).then(response => {
    const imgs = response.data.hits;
    const numberOfCards = response.data.total;

    gallerys(imgs);
    loader.classList.toggle('js-non-display');
    buttonLoad.classList.add('js-button-load');

    simpleBox.refresh();
  });

  // forms.reset();
}

forms.addEventListener('submit', searchText);

async function reloadingCards(event) {
  try {
    const posts = await request();
    console.log(posts.data.hits);
    paginationRender(posts);
    pages += 1;
  } catch (error) {
    console.log(error);
  }
}

buttonLoad.addEventListener('click', reloadingCards);
