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

const getStageById = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
    .get(`/api/stage/${id}`)
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

export default {getAllStagesRequest, getStageById}