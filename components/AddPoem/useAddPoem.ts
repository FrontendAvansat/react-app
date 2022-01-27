import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../../pages/_app";
import { apiClient, authorisation } from "../apiClient";

export interface PoemData {
  title: string;
  text: string;
  authorName: string;
}

export const useAddPoem = () => {
  const [data, setData] = useState<PoemData>();
  const { data: userData } = useContext(AuthContext);
  const { push } = useRouter();
  const sendData = async () => {
    try {
      const res = await apiClient.post(
        "api/poems",
        data,
        authorisation(userData?.accessToken)
      );
    } catch (e) {
      console.log({});
    }
    push("/");
  };
  return { data, setData, sendData };
};
