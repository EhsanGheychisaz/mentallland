import styles from "./sec-3.module.css";
import Person1 from "../../../assests/image/Arts-page/sec3-L.png";
import Person2 from "../../../assests/image/Arts-page/sec3.png";

import Grid from "@mui/material/Grid";

const Sec4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>MENTALLAND ART DEPARMENTS</h2>

        <Grid container rowSpacing={0}>
          <Grid item md={6} xs={12}>
            <div className={styles.card}>
              <img src={Person2} />
              <div className={styles.footerb}><p>ADULTS</p></div>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className={styles.card}>
              <img src={Person1} />
              <div className={styles.footerr}><p>Children & Teenagers</p></div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sec4;
