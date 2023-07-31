import styles from "./section1.styles.module.css";
 
const Section1 = () => {
    return ( 
        <div style={{position:"relative"}}>
          <div className={styles.container}>
                <div className={styles.box}>
                  <div>
                  <h1>Get Help, Get Better</h1><h1 className={styles.white_title}>You Deserve to be Happy</h1>
                  </div>
                  <div className={styles.boxp}><p>Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet mi leo aliquet in vestibulum consectetur. Lectus magna eleifend</p></div>
                </div>
          </div>
          </div>
     );
}
 
export default Section1;