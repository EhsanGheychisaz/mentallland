import styles from "./sec-3.module.css";
import Person1 from "../../../assests/image/sec3-(1).png";
import Grid from "@mui/material/Grid";

const Sec3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Grid container rowSpacing={5}>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person1} />
              <p className={styles.count}>+10</p>
              <p className={styles.title}>Years of Experience</p>
            </div>
          </Grid>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person1} />
              <p className={styles.count}>+1000</p>
              <p className={styles.title}>Patients Recieved Help<br></br> This Year</p>
            </div>
          </Grid>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person1} />
              <p className={styles.count}>+100</p>
              <p className={styles.title}>Professional Psychologists</p>
            </div>
          </Grid>
          <Grid item md={3} xs={6}>
            <div className={styles.card}>
              <img src={Person1} />
              <p className={styles.count}>+389</p>
              <p className={styles.title}>Clients improved<br></br> their condition</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sec3;
