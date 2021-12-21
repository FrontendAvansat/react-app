import { ThemeProvider } from "@chakra-ui/core";
import { createContext } from "react";
import { useAuth, UseAuth } from "../components/Auth/useAuth";
import "../styles/globals.css";
import jrTheme from "../theme";

export const AuthContext = createContext<UseAuth>(null);

function MyApp({ Component, pageProps }) {
  const authHookValue = useAuth();
  return (
    <AuthContext.Provider value={authHookValue}>
      <ThemeProvider
        // @ts-ignore
        theme={jrTheme}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
