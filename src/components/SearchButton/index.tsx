import styles from "./styles.module.css";

import Icon from "../../assets/images/lupa.png";

export default function SearchButton() {
  return (
    <button className={styles.button}>
      <img className={styles.icon_search} src={Icon} alt={"lupa da busca"} />
    </button>
  );
}
