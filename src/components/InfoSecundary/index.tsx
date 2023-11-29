import styles from "./styles.module.css";

import InfoWrapper from "../../components/InfoWrapper";

import { useDataAPIStore } from "../../store/DataApiStore";

export default function InfoSecundary() {
  const dataAPI = useDataAPIStore((state) => state.dataAPI);

  return (
    <div className={styles.info_secundary}>
      <InfoWrapper>
        <span>Humidade</span>
        {dataAPI.humidity === 0 ? (
          <span>--</span>
        ) : (
          <span>{dataAPI.humidity}%</span>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <span>Velocidade do Vento</span>
        {dataAPI.windSpeed === 0 ? (
          <span>--</span>
        ) : (
          <span>{dataAPI.windSpeed} km/h</span>
        )}
      </InfoWrapper>
    </div>
  );
}
