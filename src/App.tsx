import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { requestConfig } from "./authConfig";
import { Profile } from "./Profile";

interface UserData {
  environment: string;
  homeAccountId: string;
  localAccountId: string;
  name?: string | undefined;
  username: string;
}


export function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const [user, setUser] = useState({} as UserData);

  const handleEdit = async () => {
    const response = await instance.loginRedirect({
      authority: import.meta.env.VITE_AZURE_AUTHORITY_EDIT_PROFILE,
      prompt: 'login',


    } as any);
    console.log('response', response);
  }
  useEffect(() => {
    if (accounts.length > 0) {
      console.log('alterou', instance);
      // localStorage.clear()
      //localStorage.removeItem('94ff7183-ebcd-4f62-b5cb-72594936f7a9-b2c_1_reactsingin.9a6e3a98-fd84-4e0c-ac58-4f328dd0d32d-proclinms.b2clogin.com-');
      setUser(accounts[0]);
    }
  }, [accounts.length])
  console.log(instance.getAllAccounts());
  console.log('instance ', instance.getAccountByHomeId("94ff7183-ebcd-4f62-b5cb-72594936f7a9-b2c_1_reactsingin.9a6e3a98-fd84-4e0c-ac58-4f328dd0d32d"));
  if (accounts.length > 0) {
    return (
      <>

        <span>Bem vindo {user.name}</span>
        <button onClick={() => instance.logout()}>Logout</button>

        <button onClick={handleEdit}>Edit Profile</button>
        <Profile />
      </>
    )
  } else if (inProgress === "login") {
    return <span>Login is currently in progress!</span>
  } else {
    return (
      <>
        <span>There are currently no users signed in!</span>
        <button onClick={() => instance.loginRedirect(requestConfig)}>Login</button>

      </>
    );
  }
}