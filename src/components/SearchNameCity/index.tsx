import styles from "./styles.module.css";

import { useCityNameStore } from "../../store/CityNameStore";

type SearchNameCityProps = {
  type: string;
  placeHolder: string;
};

export default function SearchNameCity({
  type,
  placeHolder,
}: SearchNameCityProps) {
  const [cityName, setCityName] = useCityNameStore((state) => [
    state.cityName,
    state.setCityName,
  ]);

  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={styles.input}
      onChange={(event) => setCityName(event.target.value)}
      value={cityName}
    />
  );
}
