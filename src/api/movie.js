import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fakedata";
import { BASE_URL, API_KEY_PARAM } from "../config.js";

export class MovieAPI {
  static async fetchPopular() {
    const response = await axios.get(`${BASE_URL}movie/popular${API_KEY_PARAM}`);
    return response.data.results;

    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(movieId) {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;

    // return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/movie${API_KEY_PARAM}&query=${title}`);

    return response.data.results
  }
}
