import styles from "./styles.module.css";

import CityName from "../../components/CityName";
import Temperature from "../../components/Temperature";
import Condition from "../../components/Condition";

import { useDataAPIStore } from "../../store/DataApiStore";

export default function InfoPrimary() {
  const dataAPI = useDataAPIStore((state) => state.dataAPI);

  return (
    <div className={styles.info_primary}>
      {dataAPI.name && <CityName>{dataAPI.name}</CityName>}
      {dataAPI.temperature && (
        <Temperature>{`${dataAPI.temperature} ºC`}</Temperature>
      )}
      {dataAPI.iconCondiion && (
        <img src={dataAPI.iconCondiion} alt={"icone condição do clima"} />
      )}
      {dataAPI.condition !== "" && <Condition>{dataAPI.condition}</Condition>}
    </div>
  );
}
