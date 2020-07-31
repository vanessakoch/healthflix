import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(obj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  create,
};
