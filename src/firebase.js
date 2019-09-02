  // Your web app's Firebase configuration
  import { initializeApp } from 'firebase'

  const app = initializeApp({
    apiKey: "AIzaSyA_DmqapJK06pg0_qPhOUwwl0TCYae707c",
    authDomain: "name-that-dog.firebaseapp.com",
    databaseURL: "https://name-that-dog.firebaseio.com",
    projectId: "name-that-dog",
    storageBucket: "name-that-dog.appspot.com",
    messagingSenderId: "837279851731",
    appId: "1:837279851731:web:b1126f3bcdec2445"
  }
)

export const db = app.firestore();

export const dogsRef = db.collection('dogs')

