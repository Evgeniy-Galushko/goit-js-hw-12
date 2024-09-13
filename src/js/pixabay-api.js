import axios from 'axios';
// import { pages } from '../main';
import { perPage } from '../main';

export default async function request(textSearch, pages) {
  const savedQuery = await axios
    .get('https://pixabay.com/api/?', {
      params: {
        key: '45780077-211740ab05b8c84b50ffae6ce',
        q: `${textSearch}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: `${pages}`,
      },
    })
    .catch(error => console.log(error));
  return savedQuery;
}
