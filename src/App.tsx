import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./MainLayout";
import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(<MainLayout />, document.getElementById("app"));
ReactDOM.render(
  <Auth0Provider
    domain="dev-9po3cwar.us.auth0.com"
    clientId="QaBAOBaQJZ49CW5xOtTLOGBso09BIlj8"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <MainLayout />
  </Auth0Provider>,
  document.getElementById("app")
);
