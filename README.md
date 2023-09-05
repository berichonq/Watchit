# movie-advisor
First react project
Watchit
Application Screenshot

Table of Contents
Description
Features
Demo
Installation
Usage
API Access
Contributing
License
Description
Watchit is a frontend web application built with ReactJS that allows you to explore movies, view their details, and discover recommendations based on your selected film. It leverages The Movie Database (TMDB) API to access an extensive collection of movie information, making it a valuable tool for movie enthusiasts looking for their next cinematic adventure.

Features
User-friendly search for movies using the TMDB API.
Detailed movie information, including title, description, and star ratings.
Recommendations for similar movies based on your chosen film.
A visually appealing user interface featuring movie cover images.
Hosted for free on Vercel for easy access.
Demo
You can access a live demo of Watchit at Demo Link.

Installation
To run Watchit locally, follow these steps:

Clone this repository to your local machine using Git:

bash
Copy code
git clone https://github.com/yourusername/watchit.git
Navigate to the project directory:

bash
Copy code
cd watchit
Install the required dependencies using npm:

Copy code
npm install
Create a .env file in the project root and set the TMDB API key:

makefile
Copy code
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
Start the development server:

sql
Copy code
npm start
Access the application at http://localhost:3000/.

Usage
Use the search bar at the top of the screen to search for a movie by title or keyword. Press Enter or click the search button to perform the search.

Click on a movie card from the search results to view detailed information about the selected movie. This includes the movie title, description, star ratings, and a list of recommended movies.

Explore recommended movies at the bottom of the screen by scrolling horizontally. Click on any recommended movie card to view its details.

Enjoy discovering new movies and finding recommendations for your next watch!

API Access
Watchit uses The Movie Database (TMDB) API to fetch movie data and recommendations. Ensure that you have a valid TMDB API key and set it in the .env file to enable API access.

Contributing
Contributions to Watchit are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with clear messages.
Push your changes to your fork.
Submit a pull request to the main repository.
License
This project is licensed under the MIT License - see the LICENSE file for details.
