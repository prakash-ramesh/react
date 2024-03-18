import React from "react";

import styles from './3-CssModules.module.css';

function CssModules(props) {
    return <section className="component">
        <h6>C3: Css Modules</h6>
        <p className={styles.paragraph}>Styles restricted to component by using <span className={styles.concept}>Css Modules</span></p>
    </section>
}

export default CssModules;