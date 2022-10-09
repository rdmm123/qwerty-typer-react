const TEXT_API_ENDPOINT = "https://qwerty-backend.duckdns.org/api/random-text/";

export default function getText({ lang = "es" } = { lang: "es" }) {
  return fetch(`${TEXT_API_ENDPOINT}?lang=${lang}`).then((res) => res.json());
}
