import styles from "./Header.module.css";
import ingiteLogo from "../assets/Ignite-logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ingiteLogo} alt="Logotipo do Ignite"/>
      <strong>Ignite Feed</strong>
    </header>
  );
}
