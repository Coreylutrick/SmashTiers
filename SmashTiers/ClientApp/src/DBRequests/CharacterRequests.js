import axios from 'axios';

const getAllCharactersRequest = () =>
{
  return new Promise ((resolve, reject) =>
  {
    axios
    .get(`/api/character`)
    .then(res =>
    {
      resolve(res.data)
    })
    .catch(err =>
    {
      reject(err)
    });
  });
}

const GetCharactersByHeaviest = () =>
{
  return new Promise ((resolve, reject) =>
  {
    axios
    .get(`/api/character/heaviest`)
    .then(res =>
      {
        resolve(res.data)
      })
      .catch(err =>
      {
        reject(err)
      });
  });
}

const getCharacterById = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
    .get(`/api/character/${id}`)
    .then(res =>
      {
        resolve(res.data);
      })
      .catch(err =>
      {
        reject(err)
      });
  });
};

export default {getAllCharactersRequest, getCharacterById, GetCharactersByHeaviest}