import axios from 'axios';
import { perPage } from '../main';

export default async function request(textSearch, pages) {
  try {
    const savedQuery = await axios.get('https://pixabay.com/api/?', {
      params: {
        key: '45780077-211740ab05b8c84b50ffae6ce',
        q: `${textSearch}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: `${pages}`,
      },
    });
    return savedQuery;
  } catch (error) {
    console.log(error);
  }
}
