const apiURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const lang = import.meta.env.VITE_LANG;

export default function useGetDataAPI() {
  const getCityData = async (cityName: string) => {
    const apiUrl = `${apiURL}${apiKey}&q=${cityName}${lang}`;

    const response = await fetch(apiUrl);

    if (response.status !== 200) return;

    const data = response.json();

    return data;
  };

  return { getCityData };
}
