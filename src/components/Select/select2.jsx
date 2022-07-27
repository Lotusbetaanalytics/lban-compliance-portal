import * as React from "react";
import styles from "./styles.module.css"
const Select2 = ({
  onChange,
  value,
  title,
  options,
  required = false,
  filter = false,
  filterOption = "",
  onBlur = null,
  readOnly = false,
}) => {
  return (
    <div className={styles.container2} >
      
      <select
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        required={required}
        readOnly={readOnly}
      >
        <option value="" disabled>
          {title}
        </option>
        {options &&
          options.map((item) =>
            !filter ? (
              <option value={item.value}>{item.value}</option>
            ) : (
              <option value={item[filterOption]}>{item[filterOption]}</option>
            )
          )}
      </select>
    </div>
  );
};

export default Select2;
