import React from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/3.txt";

import styles from './3-CssModules.module.css';

function CssModules(props) {
    return <Wrapper title="CSS Modules" fileName={txt}>
        <h6>C3: Css Modules</h6>
        <p className={styles.paragraph}>Styles restricted to component by using <span className={styles.concept}>Css Modules</span></p>
    </Wrapper>
}

export default CssModules;