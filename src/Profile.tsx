import { useMsal } from "@azure/msal-react";
import { useState } from "react";

export function Profile() {
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState(null);
    const loginRequest = {
        scopes: [""]
    };
    console.log('teste', accessToken)
    console.log('accounts', accounts)
    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            console.log('1 ', response.accessToken)
            setAccessToken(response.accessToken);
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                console.log('2', response.accessToken)
                setAccessToken(response.accessToken);
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {accessToken ?
                <p>Access Token Acquired!</p>
                :
                <button onClick={RequestAccessToken}>Request Access Token</button>
            }
        </>
    )
}