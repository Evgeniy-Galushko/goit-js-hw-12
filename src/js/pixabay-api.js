import axios from 'axios';
import { pages } from '../main';
import { perPage } from '../main';
export default async function request(textSearch) {
  const savedQuery = await axios
    .get('https://pixabay.com/api/?', {
      params: {
        key: '45780077-211740ab05b8c84b50ffae6ce',
        q: `${textSearch}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: pages,
      },
    })
    .catch(error => console.log(error));
  return savedQuery;
}
//+++++++++++++-----------------------------------------------------------------------
// const fetchPostsBtn = document.querySelector('.btn');
// const postList = document.querySelector('.posts');

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let limit = 40;
// // In our case total number of pages is calculated on frontend
// const totalPages = Math.ceil(100 / limit);

// fetchPostsBtn.addEventListener('click', async () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return iziToast.error({
//       position: 'topRight',
//       message: "We're sorry, there are no more posts to load",
//     });
//   }

//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = 'Fetch more posts';
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page,
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join('');
//   postList.insertAdjacentHTML('beforeend', markup);
// }
