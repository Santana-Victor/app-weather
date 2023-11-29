import styles from "./styles.module.css";

export default function Condition({ children }: { children: string }) {
  return <p className={styles.condition}>{children}</p>;
}
