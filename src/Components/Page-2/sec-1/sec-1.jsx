import styles from "./sec1.module.css";
import Sec2 from "../sec-2/comonent-b/sec-2"
const Sec1 = () => {
    return (
      <div style={{position:"relative"}}>
          <div className={styles.container}>
                <div className={styles.box}>
                  <h1>Heal Your<br></br> Mind & Soul</h1>
                  <div className={styles.boxp}><p>Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet mi leo aliquet in vestibulum consectetur. Lectus magna eleifend</p></div>
                </div>
          </div>
          <Sec2 />
      </div>
    );
  };
  
  export default Sec1;
  