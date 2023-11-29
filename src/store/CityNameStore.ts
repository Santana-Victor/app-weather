import { create } from "zustand";

type StoreProps = {
  cityName: string;
  setCityName: (newCityName: string) => void;
};

export const useCityNameStore = create<StoreProps>((set) => ({
  cityName: "",
  setCityName: (newCityName) => set(() => ({ cityName: newCityName })),
}));
