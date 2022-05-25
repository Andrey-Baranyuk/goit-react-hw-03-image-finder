
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25701696-30308bd9fb1b902a571f50ce9';

function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`
  ).then(res => res.json());
}

export default fetchQuery;
