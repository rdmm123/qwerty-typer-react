const TEXT_API_ENDPOINT = "https://qwerty.up.railway.app/api/generate/";

export default function getText({ lang = "spanish" } = { lang: "spanish" }) {
  return fetch(`${TEXT_API_ENDPOINT}?lang=${lang}`).then((res) => res.json());
}
