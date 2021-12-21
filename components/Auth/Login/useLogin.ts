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
      const res = await apiClient.post(
        "/api/login",
        data,
        authorisation("This is the accesToken") //aici o sa am setUser(res.data)
      );
    } catch (e) {
      console.log("error");
    }
    setUser({
      accessToken: "asdfg",
      email: "mari@yahoo.com",
      name: "Mari Barbu",
    });
    push("/");
  };
  return { data, setData, sendData };
};
