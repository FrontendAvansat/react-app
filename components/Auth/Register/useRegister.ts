import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../../../pages/_app";
import { apiClient, authorisation } from "../../apiClient";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const useRegister = () => {
  const [data, setData] = useState<RegisterData>();
  const { push } = useRouter();
  const sendData = async () => {
    try {
      const res = await apiClient.post(
        "api/auth-service/account/register",
        data
      );
    } catch (e) {
      console.log("error");
    }
    push("/auth/login");
  };
  return { data, setData, sendData };
};
