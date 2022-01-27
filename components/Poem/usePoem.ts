import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { PoemCardProps } from "../Common/PoemCard";
import { apiClient, authorisation } from "../apiClient";
import { AuthContext } from "../../pages/_app";

export const usePoem = () => {
  const [data, setData] = useState<Partial<PoemCardProps>>({});
  const { data: userData } = useContext(AuthContext);
  const { query } = useRouter();
  const id = query.poemId as string;
  const getData = async () => {
    try {
      const res = await apiClient.get(
        `api/poems/${id}`,
        authorisation(userData?.accessToken)
      );
      if (res) {
        setData(res.data);
      }
    } catch (e) {
      console.log;
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [query]);

  return { data };
};
