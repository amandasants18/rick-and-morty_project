import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";

export const api = axios.create({
  baseUrl,
});

export const getCharacterById = (id) => {
  return api.get("https://rickandmortyapi.com/api/character/" + id);
};
