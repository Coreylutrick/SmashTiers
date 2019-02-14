import firebase from 'firebase';
import axios from 'axios';

axios.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (err) {
  return Promise.reject(err)
});

const registerUser = (user) => {
  return firebase.auth().createUserWithEmailAndPassword(user.Email, user.Password);
};

const addUser = (user) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
    .post(`api/user/addUser`, user)
    .then((res) =>
    {
      resolve(res.data);
    })
    .catch((err) =>
    {
      reject(err);
    })
  })
}

const loginUser = (user) => {
  return firebase.auth().signInWithEmailAndPassword(user.Email, user.Password).then(cred => {
    cred.user.getIdToken()
    .then(token => sessionStorage.setItem('token', token))
  });
};

const logoutUser = () => {
  return firebase.auth().signOut();
};

const getUid = () =>
{
  return firebase.auth().currentUser.uid;
};

export default {registerUser, loginUser, addUser, logoutUser, getUid}