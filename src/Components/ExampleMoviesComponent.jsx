import React from "react";

// Shows the example movies in the home page
export const ExampleMoviesComponent = ({
  imageAddress = "",
  movieName = "",
  movieReleaseDate = "",
}) => {
  return (
    <>
      <img
        src={`${imageAddress}`}
        alt={`${movieName} poster image`}
        style={{ height: "40vh", width: "70%" }}
      />
      <div className="pt-2">
        {movieName.split("\n").map((name, index) => (
          <h4 key={index}>{name}</h4>
        ))}
      </div>
      <h6>Release Date: {movieReleaseDate}</h6>
    </>
  );
};
