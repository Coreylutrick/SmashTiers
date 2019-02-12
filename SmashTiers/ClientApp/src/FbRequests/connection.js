import firebase from 'firebase';
import constants from '../Constants';

const firebaseApp = () => {
  firebase.initializeApp(constants.firebaseConfig);
};

export default firebaseApp;