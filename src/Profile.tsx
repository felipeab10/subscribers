import { useMsal, useAccount } from "@azure/msal-react";

import { useEffect, useState } from "react";

export function Profile() {
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {})
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        if (account) {
            console.log(instance.getAllAccounts())
            instance.acquireTokenSilent({
                scopes: ["https://proclinms.onmicrosoft.com/app/User.Read"],
                account: account
            }).then((response) => {
                if (response) {
                    console.log('teta ', response)
                    //callMsGraph(response.accessToken).then((result) => setApiData(result));
                }
            });
        }
    }, [account, instance]);

    if (accounts.length > 0) {
        return (
            <>
                <span>teta</span>
                {apiData && (<span>Data retreived from API: {JSON.stringify(apiData)}</span>)}
            </>
        );
    } else if (inProgress === "login") {
        return <span>Login is currently in progress!</span>
    } else {
        return <span>There are currently no users signed in!</span>
    }
}