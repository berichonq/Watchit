import axios from "axios";
import { BASE_URL } from "../config.js";

export class MovieAPI {
  static async fetchPopular() {
    const response = await axios.get(`${BASE_URL}movie/popular?api_key=${import.meta.env.VITE_API_KEY_PARAM}`);
    return response.data.results;

    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(movieId) {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/recommendations?api_key=${import.meta.env.VITE_API_KEY_PARAM}`
    );
    return response.data.results;

    // return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY_PARAM}&query=${title}`);

    return response.data.results
  }
}
