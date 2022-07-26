import * as React from 'react';
import styles from "./styles.module.css"

const FileInput = ({ onChange, value, type, title, required = false}) => {
    return <div className={styles.container}>
        <label>{title}</label>
        <input
            type={type}
            onChange={onChange}
            value={value}
            required={required}
        />
    </div>;
};

export default FileInput;
