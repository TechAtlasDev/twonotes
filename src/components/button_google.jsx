import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { auth } from "../services/firebase";

const GoogleButton = () => {
  const navigate = useNavigate(); // Hook de navegación

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Guarda el token en localStorage o cookies
      const token = await result.user.getIdToken();
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(result.user));

      console.log("Usuario autenticado:", result.user);
      
      // Redirigir al dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error en autenticación:", error);
    }
  };

  return (
    <button onClick={signInWithGoogle} className="btn btn-outline">
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleButton;
