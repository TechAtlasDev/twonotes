/* global importScripts, firebase */
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "INIT_FIREBASE") {
    if (!self.firebaseConfig) {
      self.firebaseConfig = event.data.payload;
      firebase.initializeApp(self.firebaseConfig);
      const messaging = firebase.messaging();

      messaging.onBackgroundMessage((payload) => {
        self.registration.showNotification(payload.notification.title, {
          body: payload.notification.body,
          icon: "/logo192.png",
        });
      });
    }
  }
});