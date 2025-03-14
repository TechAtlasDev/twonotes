import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardView from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Tareas from "./pages/dashboard/Tareas";
import { useEffect, useState } from "react";
import { messaging } from "./services/firebase";
import { getToken, onMessage } from "firebase/messaging";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/tareas",
    element: (
      <ProtectedRoute>
        <Tareas />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
          console.log("✅ Service Worker registrado:", registration);

          // Enviar credenciales de Firebase al SW de forma segura
          if (registration.active) {
            registration.active.postMessage({
              type: "INIT_FIREBASE",
              payload: {
                apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
                authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
                projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
                storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
                appId: import.meta.env.VITE_FIREBASE_APP_ID,
                measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
              },
            });
          }
        } catch (error) {
          console.error("❌ Error registrando el Service Worker:", error);
        }
      }
    };

    const requestPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        try {
          const token = await getToken(messaging, {
            vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
          });
          console.log("✅ FCM Token:", token);
          // Aquí puedes enviar el token a tu backend para guardarlo
        } catch (error) {
          console.error("❌ Error obteniendo token:", error);
        }
      }
    };

    registerServiceWorker();
    requestPermission();

    // Escuchar mensajes en primer plano
    onMessage(messaging, (payload) => {
      console.log("📩 Mensaje recibido:", payload);
      setNotification(payload.notification);
    });
  }, []);

  return (
    <main className="w-screen h-screen relative">
      <RouterProvider router={router} />
      {notification && (
        <div className="fixed top-5 right-5 bg-gray-800 text-white p-4 rounded-md shadow-lg">
          <h2>{notification.title}</h2>
          <p>{notification.body}</p>
        </div>
      )}
      <footer className="absolute bottom-0 w-full text-center text-gray-500 text-sm py-3">
        Creado por <a href="https://github.com/techatlasdev/">TechAtlasDev</a>
      </footer>
    </main>
  );
}

export default App;
