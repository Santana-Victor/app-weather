import styles from "./styles.module.css";

export default function InfoWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.info_wrapper}>{children}</div>;
}
