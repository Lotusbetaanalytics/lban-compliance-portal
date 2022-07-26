import * as React from 'react';
import styles from "./styles.module.css"

const Input = ({ onChange, value, type, title, readOnly = false, required = false, onBlur = null}) => {
    return <div className={styles.container}>
        <label>{title}</label>
        <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={title}
            readOnly={readOnly}
            required={required}
            onBlur={onBlur}
        />
    </div>;
};

export default Input;
