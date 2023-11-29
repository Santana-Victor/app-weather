import { FormEvent } from "react";

import useRenderDataAPI from "../hooks/useRenderDataAPI";

import { useCityNameStore } from "../store/CityNameStore";

export default function useHandleSubmitSearch() {
  const { renderDataAPI } = useRenderDataAPI();
  const cityName = useCityNameStore((state) => state.cityName);

  const handleSubmitSearch = (event: FormEvent) => {
    event.preventDefault();

    if (!cityName) return;

    renderDataAPI(cityName);
  };

  return { handleSubmitSearch };
}
