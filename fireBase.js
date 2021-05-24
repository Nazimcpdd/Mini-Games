var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyBl14RwVV95u9qmMVcf6oWmKqroGYNxcPo",
  authDomain: "test-3884f.firebaseapp.com",
  projectId: "test-3884f",
  storageBucket: "test-3884f.appspot.com",
  messagingSenderId: "931224562139",
  appId: "1:931224562139:web:b2780558cbb21aeefe9ffe",
  measurementId: "G-LB1HF57JTV"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


