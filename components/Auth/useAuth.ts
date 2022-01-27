import { useState } from "react";

export interface UserData {
  accessToken: string;
  email: string;
  lastName: string;
  firstName: string;
}
export interface UseAuth {
  data: UserData | null;
  setData: (props: UserData | null) => void;
}

export const useAuth = (): UseAuth => {
  const [data, setData] = useState<UserData | null>(null);

  return { data, setData };
};
