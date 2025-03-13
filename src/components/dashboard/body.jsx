import { useEffect, useState } from "react";
import Section from "../section";
import Data from "./data_container";

import NewUser from "./new_user";

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
    <Section className="w-full h-full px-5 py-32">
      {
        userName ? <NewUser /> : <NewUser />
      }
    </Section>
  );
}
