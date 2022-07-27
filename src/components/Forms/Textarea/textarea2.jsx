import * as React from 'react';
import styles from "./styles.module.css"

const Textarea2 = ({ onChange, value, title, required = false}) => {
    return <div className={styles.container2}>
        
        <textarea
            onChange={onChange}
            value={value}
            placeholder={title}
            required={required}
        ></textarea>

    </div>;
};

export default Textarea2;