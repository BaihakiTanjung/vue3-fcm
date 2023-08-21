importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyA-8-uflQtrwIsXpilyc1VN_1af-LtjpLY",
  authDomain: "testing-firebase-7fb22.firebaseapp.com",
  projectId: "testing-firebase-7fb22",
  storageBucket: "testing-firebase-7fb22.appspot.com",
  messagingSenderId: "670638450803",
  appId: "1:670638450803:web:eea0f1a9ad084f565a2206",
  measurementId: "G-G78H29Q88Y",
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
