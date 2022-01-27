import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../../../pages/_app";
import { apiClient, authorisation } from "../../apiClient";

export interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [data, setData] = useState<LoginData>();
  const { setData: setUser } = useContext(AuthContext);
  const { push } = useRouter();
  const sendData = async () => {
    try {
      const res = await apiClient.post("api/auth-service/account/login", data);
      setUser(res.data);
    } catch (e) {
      console.log("error");
    }
    push("/");
  };
  return { data, setData, sendData };
};
