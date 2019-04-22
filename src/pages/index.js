import React from "react"
import styles from "./index.module.css"

import Sidebar from "../components/sidebar"
import Main from "../components/Main"
import Home from "../components/Home"
export default () => (
  <div className={styles.mainContainer}>
    <Sidebar />
    <Main>
      <Home />
    </Main>
  </div>
)
