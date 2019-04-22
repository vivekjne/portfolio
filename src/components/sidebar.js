import React from "react"
import styles from "./sidebar.module.css"
import { Link } from "gatsby"
export default () => (
  <div className={styles.container}>
    <ul>
      {["home", "about", "services", "portfolio", "blog", "contact"].map(
        (link, i) => (
          <li className={styles.linkContainer}>
            <Link key={i} className={styles.link} to={`/${link}/`}>
              {link}
            </Link>
            <div className={styles.linkLine} />
          </li>
        )
      )}
    </ul>
  </div>
)
