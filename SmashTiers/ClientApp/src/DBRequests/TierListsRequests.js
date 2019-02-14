import axios from 'axios';

const getTierListById = (id) =>
{
  return new Promise((resolve, reject) =>
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

const postNewTierList = (tierList) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
    .post(`/api/tierList`, tierList)
    .then((res) =>
    {
      resolve(res);
    })
    .catch((err) =>
    {
      reject(err)
    });
  });
};

const postNewTier = (tier) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
    .post(`/api/tierList/tier`, tier)
    .then((res) =>
    {
      resolve(res);
    })
    .catch((err) =>
    {
      reject(err)
    });
  });
};

const getAllTierLists = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios
    .get(`/api/tierList`)
    .then(res =>
      {
        resolve(res.data)
      })
      .catch((err) =>
      {
        reject(err)
      });
  });
};

export default {getTierListById, getAllTierLists, postNewTierList, postNewTier}