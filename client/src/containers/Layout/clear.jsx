import React from 'react';
import style from "./index.module.scss";

const Clear = ({children}) => {
  return (
    <div className={style.clearLayout}>
      {children}
    </div>
  )
}

export default Clear
