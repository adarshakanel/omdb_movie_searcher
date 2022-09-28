import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../Components/PageContainer";

// Displays when user has been redirected to an incorrect url
export const ErrorPage = () => {
  const navigate = useNavigate();

  function navigateToHomePage() {
    navigate("/");
  }

  // Display a 404 error and allow the user to go back to homepage
  return (
    <PageContainer>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>Error 404</h1>
        <h2> Page not found!</h2>
        <br />
        <Button variant="primary" onClick={() => navigateToHomePage()}>
          Back to Homepage!
        </Button>
      </div>
    </PageContainer>
  );
};
