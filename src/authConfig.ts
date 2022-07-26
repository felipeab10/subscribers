import * as Msal from '@azure/msal-browser';




export const authConfig = {
  auth:{
    clientId: import.meta.env.VITE_AZURE_APPID,
    authority:import.meta.env.VITE_AZURE_AUTHORITY_SINGIN,
    knownAuthorities:[import.meta.env.VITE_AZURE_B2C_AUTHORITY_DOMAIN],
    redirectUri:import.meta.env.VITE_AZURE_REDIRECT_URI,
    validateAuthority: false,
    postLogoutRedirectUri: '/'},
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
        },
    // scopes:[ 
    //     "user.read"
    // ],
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case Msal.LogLevel.Error:
                        console.error(message);
                        return;
                    case Msal.LogLevel.Info:
                        console.info(message);
                        return;
                    case Msal.LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case Msal.LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
            //  piiLoggingEnabled: false,
        },

        // windowHashTimeout: 60000,
        // iframeHashTimeout: 6000,
        // loadFrameTimeout: 0,
    }
  }
