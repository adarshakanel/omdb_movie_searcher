import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

// Shows the moview details that were obtained from omdb
export const MovieDetailsComponent = ({
  movieDetails = {},
  movieName = "",
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // function that allows the label for the button to appear
  function ButtonClicked() {
    // make the label appear
    setIsButtonClicked((currentValue) => !currentValue);
    // make the label disapper after 3 seconds
    setTimeout(() => {
      setIsButtonClicked((currentValue) => !currentValue);
    }, 3000);
  }

  return (
    <div className="d-flex align-items-center justify-content-start flex-column">
      <h2 className="py-4">Search Results for: {movieName}</h2>
      <Card
        style={{ width: "80%" }}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <div className="d-flex flex-row text-center align-items-center justify-content-center">
          <Card.Img
            variant="top"
            src={`${movieDetails.Poster}`}
            style={{ width: "40%", minHeight: "60vh" }}
            className="m-3"
            alt={`${movieDetails.Title} poster image`}
          />
          <Card.Body>
            <Card.Title>
              <h2>{movieDetails.Title}</h2>
            </Card.Title>
            <Card.Text>
              Year of Release: <b>{movieDetails.Year}</b>
            </Card.Text>
            {isButtonClicked ? (
              <label className="text-success ">Clicked!</label>
            ) : null}
            <br></br>
            <Button variant="primary" onClick={() => ButtonClicked()}>
              More Details!
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};
