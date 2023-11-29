import styles from "./styles.module.css";

export default function CityName({ children }: { children: string }) {
  return <h1 className={styles.city_name}>{children}</h1>;
}
