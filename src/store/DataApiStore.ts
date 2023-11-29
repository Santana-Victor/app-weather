import { create } from "zustand";

import { IDataAPI } from "../interfaces/ResponseAPI";

const iconInit = import.meta.env.VITE_ICON_INIT;

const dataInit: IDataAPI = {
  name: "Use a lupa acima para ver o clima em uma cidade",
  temperature: null,
  condition: "",
  iconCondiion: iconInit,
  humidity: 0,
  windSpeed: 0,
};

type StoreProps = {
  dataAPI: IDataAPI;
  setDataAPI: (newDataAPI: IDataAPI) => void;
};

export const useDataAPIStore = create<StoreProps>((set) => ({
  dataAPI: dataInit,
  setDataAPI: (newDataAPI) => set(() => ({ dataAPI: newDataAPI })),
}));
