import styles from "./sec-4.module.css";
import Person1 from "../../../assests/image/sec-4 (1).png";
import Person2 from "../../../assests/image/sec-4 (2).png";
import Person3 from "../../../assests/image/sec-4 (3).png";
import Person4 from "../../../assests/image/sec-4 (4).png";
import Grid from "@mui/material/Grid";

const Sec4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3 className={styles.orange}>What can we do for you</h3>
        <h3 className={styles.black}>in Psychology Department</h3>
        <Grid container rowSpacing={5}>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person1} />
              <p>Adults Psychology</p>
            </div>
          </Grid>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person2} />
              <p>Children/TeenagersPsychology</p>
            </div>
          </Grid>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person3} />
              <p>Public Seminars</p>
            </div>
          </Grid>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person4} />
              <p>Specialized Seminars</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sec4;
