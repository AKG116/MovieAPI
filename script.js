// Get the buttons
const moviesButton = document.getElementById("Movies");
const seriesButton = document.getElementById("series");


// Get the search input and buttons
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");

// Add event listeners to the buttons
moviesButton.addEventListener("click", () => {
    fetchMovies();
});

seriesButton.addEventListener("click", () => {
    fetchSeries();
});



// Add event listeners to the search button and clear button
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    searchMovies(searchTerm);
});

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    window.location.href = "index.html";
});

// Function to fetch and display movies
function fetchMovies() {
    fetch("https://www.omdbapi.com/?apikey=ea8bd4d3&type=movie&s=spider%20man")
        .then((response) => response.json())
        .then((data) => {
            displayMovies(data.Search);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function to fetch and display series
function fetchSeries() {
    fetch("https://www.omdbapi.com/?apikey=ea8bd4d3&type=series&s=friends")
        .then((response) => response.json())
        .then((data) => {
            displayMovies(data.Search);
        })
        .catch((error) => {
            console.log(error);
        });
}



// Function to search and display movies based on the search term
function searchMovies(searchTerm) {
    fetch(`https://www.omdbapi.com/?apikey=ea8bd4d3&type=movie&s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            displayMovies(data.Search);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function to display movies
function displayMovies(movies) {
    const movieRow = document.getElementById("movie-row");
    movieRow.innerHTML = ""; // Clear previous results

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const movieImage = document.createElement("img");
        movieImage.classList.add("movie-image");
        movieImage.src = movie.Poster;

        const movieTitle = document.createElement("h2");
        movieTitle.classList.add("movie-title");
        movieTitle.textContent = movie.Title;

        const movieDescription = document.createElement("p");
        movieDescription.classList.add("movie-description");
        movieDescription.textContent = movie.Year;

        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieDescription);

        movieRow.appendChild(movieCard);
    });
}