import { IResponseDataAPI } from "../interfaces/ResponseAPI";

import useGetDataAPI from "../hooks/useGetDataAPI";

import { useCityNameStore } from "../store/CityNameStore";
import { useDataAPIStore } from "../store/DataApiStore";

export default function useRenderDataAPI() {
  const { getCityData } = useGetDataAPI();
  const setDataAPI = useDataAPIStore((state) => state.setDataAPI);
  const setCityName = useCityNameStore((state) => state.setCityName);

  const renderDataAPI = async (cityName: string) => {
    const data: IResponseDataAPI = await getCityData(cityName);

    setDataAPI({
      name: cityName,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      iconCondiion: data.current.condition.icon,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
    });

    setCityName("");
  };

  return { renderDataAPI };
}
