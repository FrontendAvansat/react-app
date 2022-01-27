import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { PoemCardProps } from "./PoemCard";
import { apiClient, authorisation } from "../apiClient";
import { AuthContext } from "../../pages/_app";

export const usePoemCards = () => {
  const [data, setData] = useState<Array<PoemCardProps>>([]);
  const getData = async () => {
    try {
      const res = await apiClient.get("api/poems");
      if (res) {
        setData(res.data);
      }
    } catch (e) {
      console.log;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};
