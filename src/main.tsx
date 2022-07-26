import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

import './index.css'
import { authConfig } from './authConfig';

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_APPID
  }
};
const pca = new PublicClientApplication(authConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </React.StrictMode>
)
