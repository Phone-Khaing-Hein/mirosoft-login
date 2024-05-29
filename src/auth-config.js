import { LogLevel, PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: '90a831f1-65f8-4864-b71e-bf61cb13f545',
        // clientId: '38f9a15d-7305-43bc-a379-a376ddeb6142',
        authority: "https://login.microsoftonline.com/organizations",
        redirectUri: "/",
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback(logLevel, message, containsPii) {
                if (containsPii) {
                    return;
                }
                switch (logLevel) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.warn(message);
                        return;
                    case LogLevel.Verbose:
                        console.info(message);
                        return;
                    case LogLevel.Warning:
                        console.log(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
}

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
    scopes: ["User.Read"],
}
