import styles from "./styles.module.css";

import SearchNameCity from "../SearchNameCity";
import SearchButton from "../SearchButton";

import useHandleSubmitSearch from "../../hooks/useHandleSubmitSearch";

export default function SearchForm() {
  const { handleSubmitSearch } = useHandleSubmitSearch();

  return (
    <form className={styles.form} onSubmit={handleSubmitSearch}>
      <SearchNameCity type={"text"} placeHolder={"Digite uma cidade"} />
      <SearchButton />
    </form>
  );
}
