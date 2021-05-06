import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Button
        variant="danger"
        size="lg"
        className="logout-button"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    )
  );
}

export default LogoutButton;
