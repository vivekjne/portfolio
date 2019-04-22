import React from "react"
import styles from "./home.module.css"
import Typed from "react-typed"

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.contentContainer}>
      <img
        src="http://frenify.com/envato/marketify/html/arlo/1/img/hero/img.jpg"
        className={styles.profile}
      />

      <p className={styles.firstName}>
        John <span className={styles.lastName}>Doe</span>
      </p>

      <p className={styles.description}>
        I'm a <span> </span>
        <Typed
          className={styles.description}
          strings={[
            "react native developer",
            "web developer",
            "Software engineer",
          ]}
          typeSpeed={80}
          loop
        />
      </p>
    </div>
  </div>
)
