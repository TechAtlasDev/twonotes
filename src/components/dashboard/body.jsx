import { useEffect, useState } from "react";
import Section from "../section";
import Data from "./data_container";

export default function Body() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.displayName || "Tu espacio");
    }
    console.log(storedUser)
  }, []);

  return (
    <Section className="w-full h-full px-5 py-10">
      <h1 className="text-2xl lg:text-3xl font-bold lg:mx-10">
        Bienvenido {userName ? `${userName}` : "Tu espacio"}
      </h1>
      <div className="my-10 lg:mx-20 flex flex-col gap-5">
        <Data title="Tus tareas" description="Aquí podrás ver todas tus tareas pendientes" />
      </div>
    </Section>
  );
}
