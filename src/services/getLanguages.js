const LANGUAGES_ENDPOINT = "https://qwerty-backend.duckdns.org/api/languages/";

export default function getLanguages() {
  return fetch(LANGUAGES_ENDPOINT).then((res) => res.json());
}
