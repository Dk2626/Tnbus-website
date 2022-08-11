// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAMgy9cc5xciNxG9BMyQG4b718iI1-bQ9Y',
//   authDomain: 'travelon-22f65.firebaseapp.com',
//   projectId: 'travelon-22f65',
//   storageBucket: 'travelon-22f65.appspot.com',
//   messagingSenderId: '367671707283',
//   appId: '1:367671707283:web:19614f911281939bacef66',
// };

// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const database = firebase.database();

// export { database };

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCCZ2bo_iPbtvarsADQe84qX2s9cWPMq3U',
  authDomain: 'touronapp-248e4.firebaseapp.com',
  databaseURL: 'https://touronapp-248e4.firebaseio.com',
  // databaseURL: "https://touronapp-248e4-3793a.firebaseio.com/",
  projectId: 'touronapp-248e4',
  storageBucket: 'touronapp-248e4.appspot.com',
  messagingSenderId: '813320271971',
  appId: '1:813320271971:web:5a10483e3c11bc953aa056',
  measurementId: 'G-KCPSW6WFC9',
};

let fire;

if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig, 'touron-webapp');
} else {
  fire = firebase.app();
}

export let firedb = fire.database();
export let fireStorage = fire.storage();
export let auth = fire.auth();
