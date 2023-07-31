import styles from "./sec-2.module.css";
import back1 from "../../../assests/image/Arts-page/sec2-1.png";
import back2 from "../../../assests/image/Arts-page/sec2-2.png";
import back3 from "../../../assests/image/Arts-page/sec2-3.png";
import Grid from "@mui/material/Grid";

const Sec3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Grid container rowSpacing={0}>
          <Grid item md={4} xs={6}>
            <div className={styles.card}>
              <img src={back1} />
            </div>
          </Grid>
          <Grid item md={4} xs={6}>
            <div className={styles.card}>
              <img src={back2} />
            </div>
          </Grid>
          <Grid item md={4} xs={6}>
            <div className={styles.card}>
              <img src={back3} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sec3;
