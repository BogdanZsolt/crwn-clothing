import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCeVoeNuLfnPgua51Da2Bif_QCmOGfsTNw",
  authDomain: "crwn-db-994bc.firebaseapp.com",
  databaseURL: "https://crwn-db-994bc-default-rtdb.firebaseio.com",
  projectId: "crwn-db-994bc",
  storageBucket: "crwn-db-994bc.appspot.com",
  messagingSenderId: "72405336554",
  appId: "1:72405336554:web:da28aaedeb5dce837a7293",
  measurementId: "G-F360GCXF4V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection('users')

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  console.log({ collection: collectionSnapshot.docs.map(doc => doc.data())});
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;