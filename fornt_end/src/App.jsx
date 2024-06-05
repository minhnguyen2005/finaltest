import React, { useState, useEffect } from 'react';
import './App.css';

const MovieUI = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Room', duration: '117 min', year: '2015' },
    { id: 2, title: 'Whiplash', duration: '167 min', year: '2015' },
    { id: 3, title: 'Mad Max', duration: '120 min', year: '2015' },
    { id: 4, title: 'The Revenant', duration: '156 min', year: '2015' },
    // thêm các phim khác vào đây
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // hiển thị nút next nếu có nhiều hơn 4 phim
    if (movies.length > 4) {
      document.querySelector('.next').style.display = 'block';
    } else {
      document.querySelector('.next').style.display = 'none';
    }
  }, [movies]);

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % movies.length);
  };

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + movies.length) % movies.length);
  };

  return (
    <div className="container">
      <h1>Most Popular Movies</h1>
      <div className="movie-list">
        {movies.slice(currentSlide, currentSlide + 4).map((movie) => (
          <div key={movie.id} className="movie">
            <img src={`/${movie.title}.jpg`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.duration} {movie.year}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MovieUI;