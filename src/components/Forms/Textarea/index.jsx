import * as React from 'react';
import styles from "./styles.module.css"

const Textarea = ({ onChange, value, title, required = false}) => {
    return <div className={styles.container}>
        <label>{title}</label>
        <textarea
            onChange={onChange}
            value={value}
            placeholder={title}
            required={required}
        ></textarea>

    </div>;
};

export default Textarea;
