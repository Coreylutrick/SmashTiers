import axios from 'axios';

const getTierListById = (id) =>
{
  return new Promise ((resolve, reject) =>
  {
    axios
    .get(`/api/tierList/${id}`)
    .then(res =>
      {
        resolve(res.data)
      })
      .catch(err =>
      {
        reject(err)
      });
  });
};

export default {getTierListById}