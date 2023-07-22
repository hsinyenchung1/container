import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MerchantList from "merchantList/MerchantList";
import PartnerCenter from "partnerCenter/PartnerCenter";
import LoginButton from "./Components/LoginButton/LoginButton";
import LogoutButton from "./Components/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const MainLayout = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // TODO: send the user object to MFEs.
  // TODO: add single spa frame work to handle the routing.


  return (
    <div>
      <LoginButton />
      {isAuthenticated && (
        <>
          <LogoutButton />
          <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
          <Router>
            <MerchantList />
            <PartnerCenter />
          </Router>
        </>
      )}
    </div>
  );
};

export default MainLayout;
