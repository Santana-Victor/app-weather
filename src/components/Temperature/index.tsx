import styles from "./styles.module.css";

export default function Temperature({ children }: { children: string }) {
  return <p className={styles.temperature}>{children}</p>;
}
