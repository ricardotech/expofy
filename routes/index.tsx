import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import UserRoutes from "./user.routes";
import Loading from "../pages/Loading";

export default function Routes() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loading />;

  return <UserRoutes />;
}
