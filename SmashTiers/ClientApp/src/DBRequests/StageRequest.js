import axios from 'axios';

const getAllStagesRequest = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios
    .get(`/api/stage`)
    .then(res =>
      {
        resolve(res.data);
      })
      .catch(err =>
      {
        reject(err);
      })
  })
}

export default {getAllStagesRequest}