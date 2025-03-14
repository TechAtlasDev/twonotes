import { useEffect, useState } from "react";
import Section from "../section";
import NewUser from "./new_user";
import CommonUserView from "./common_user";

export default function Body() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.displayName || "Tu espacio");
    }
  }, []);

  return (
    <Section className="w-full h-full p-10 flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        Bienvenido {userName}
      </h1>
      <CommonUserView />
    </Section>
  );
}
