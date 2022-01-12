import axios from 'axios';

export class PlanetsService {
  static getPlanets(nextPageURL?: string, searchParam?: string) {
    if (nextPageURL) return axios.get(nextPageURL);
    if (searchParam) return axios.get(`planets?search=${searchParam}`);
    return axios.get('planets');
  }

  static getSinglePlanet(id: number) {
    return axios.get(`planets/${id}`);
  }
}
