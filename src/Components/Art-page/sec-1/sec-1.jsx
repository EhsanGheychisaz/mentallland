import styles from "./sec1.module.css";
import icon from "../../../assests/image/Arts-page/sec1-icon.png";

const Sec1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Arts and Health</h1>
        <div className={styles.boxp}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </p>
        </div>
        <div className={styles.boximg}><img src={icon} alt={icon} /></div>
      </div>

    </div>
  );
};

export default Sec1;
