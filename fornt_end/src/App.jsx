import React, { useState } from 'react';

const movies = [
  { id: 1, title: 'Phim 1', year: 2015 },
  { id: 2, title: 'Phim 2', year: 2015 },
  { id: 3, title: 'Phim 3', year: 2015 },
  { id: 4, title: 'Phim 4', year: 2015 },
  { id: 5, title: 'Phim 5', year: 2015 },
  { id: 6, title: 'Phim 6', year: 2015 },
  // ...
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 4);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 4);
  };

  const displayedMovies = movies.slice(currentIndex, currentIndex + 4);

  return (
    <div>
      <h1>Trang chủ</h1>
      <ul>
        {displayedMovies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </li>
        ))}
      </ul>
      {currentIndex > 0 && (
        <button onClick={handlePrev}> Prev </button>
      )}
      {currentIndex + 4 < movies.length && (
        <button onClick={handleNext}> Next </button>
      )}
    </div>
  );
};

export default HomePage;