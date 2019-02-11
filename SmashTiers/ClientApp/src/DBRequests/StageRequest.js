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
      });
  });
};

const getStagesLeastPlatforms = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`/api/stage/leastPlatforms`)
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

const getStagesMostPlatforms = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`/api/stage/mostPlatforms`)
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

const getTournamentLegalStage = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`/api/stage/tournamentLegal`)
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

const getTournamentNotLegalStage = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`/api/stage/tournamentNotLegal`)
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

export default {getAllStagesRequest, getStageById, getStagesLeastPlatforms, getTournamentLegalStage, getTournamentNotLegalStage, getStagesMostPlatforms}