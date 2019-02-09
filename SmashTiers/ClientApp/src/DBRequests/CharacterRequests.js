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

const getCharacterByLightest = () =>
{
  return new Promise ((resolve, reject) =>
  {
    axios
    .get(`/api/character/lightest`)
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

const getCharacterBySlowest = () =>
{
  return new Promise ((resolve, reject) =>
  {
    axios
    .get(`/api/charaqcter/slowest`)
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

const getCharacterByFastest = () =>
{
  return new Promise ((resolve, reject) =>
  {
    axios
    .get(`/api/charaqcter/fastest`)
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

export default {getAllCharactersRequest, getCharacterById, GetCharactersByHeaviest, getCharacterByFastest, getCharacterBySlowest, getCharacterByLightest}