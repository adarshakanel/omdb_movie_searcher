import React from "react";
import { ExampleMoviesComponent } from "../Components/ExampleMoviesComponent";
import { PageContainer } from "../Components/PageContainer";
import {
  fallMovieDescription,
  spongeBobMovieDescription,
  unchartedMovieDescription,
} from "../Constants/ExampleMovieInformation";
// Show the home page of the moview finder
export const HomePage = () => {
  const exampleMovieList = [
    unchartedMovieDescription,
    spongeBobMovieDescription,
    fallMovieDescription,
  ];
  return (
    <PageContainer>
      <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
        {/* Title */}
        <h2 className="border-bottom pb-2">Welcome to OMDB Movie Finder</h2>
        <p className="font-weight-light">
          The place to learn about old and new movies
        </p>
        <h4>Some Examples:</h4>
        {/* Show example of moview results */}
        <div className="d-flex flex-row justify-content-between col-12 pt-4">
          {exampleMovieList.map((exampleMovie, index) => (
            <div className="col-4 shadow-lg bg-white rounded py-4" key={index}>
              <ExampleMoviesComponent
                imageAddress={exampleMovie.imageAddress}
                movieName={exampleMovie.movieName}
                movieReleaseDate={exampleMovie.movieReleaseDate}
              />
            </div>
          ))}
        </div>
        <small className="pt-4 text-muted">
          Built using <b>OMDB API</b>
        </small>
      </div>
    </PageContainer>
  );
};
