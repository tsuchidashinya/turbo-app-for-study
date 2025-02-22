import { Link } from "react-router";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link to="/map" className={styles.link}>
        Mapアプリ
      </Link>
      <Link to="/slide" className={styles.link}>
        Slideアプリ
      </Link>
    </div>
  );
};

export { Home };
