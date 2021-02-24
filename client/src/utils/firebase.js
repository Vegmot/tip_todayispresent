import firebase from 'firebase';
import { config } from './fbConfig';

firebase.initializeApp(config);

const store = firebase.firestore();

export { store };
