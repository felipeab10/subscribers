import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";

export function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  console.log(accounts);
  if (accounts.length > 0) {
    return (
      <>
        <span>Bem vindo {accounts[0].name}</span>
        <button onClick={() => instance.logout()}>Logout</button>

        <button onClick={() => instance.loginPopup({
          authority: import.meta.env.VITE_AZURE_AUTHORITY_EDIT_PROFILE,
          account: accounts[0]
        } as any)}>Edit Profile</button>
      </>
    )
  } else if (inProgress === "login") {
    return <span>Login is currently in progress!</span>
  } else {
    return (
      <>
        <span>There are currently no users signed in!</span>
        <button onClick={() => instance.loginPopup()}>Login</button>
      </>
    );
  }
}