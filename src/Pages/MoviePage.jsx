import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailsComponent } from "../Components/MovieDetailsComponent";
import { MovieErrorComponent } from "../Components/MovieErrorComponent";
import { PageContainer } from "../Components/PageContainer";

// Shows the content of the movie after fetching the information from ombd
export const MoviePage = () => {
  const { movieName } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [responseError, setResponseError] = useState(undefined);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_OMDB_URL}?apiKey=${process.env.REACT_APP_OMDB_KEY}&t=${movieName}`
    )
      .then((response) => checkResponseStatus(response))
      .then((res) => checkResponseContent(res))
      .catch((err) => setResponseError(err));
  }, [movieName]);

  // check if response status is ok
  function checkResponseStatus(response) {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Could not contact server!");
  }

  // check if the response itself contains error or the movie detail
  function checkResponseContent(res) {
    if (res.Error === undefined) {
      setMovieDetails(res);
      return;
    }
    throw new Error(res.Error);
  }

  return (
    <PageContainer>
      {responseError ? (
        // if error was send by imdb, display a modal that shows the user that there is an error
        <MovieErrorComponent responseError={responseError} />
      ) : (
        // if the response is moview details then show those details
        <MovieDetailsComponent
          movieDetails={movieDetails}
          movieName={movieName}
        />
      )}
    </PageContainer>
  );
};
