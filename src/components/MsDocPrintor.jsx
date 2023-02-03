import React from 'react'
import "./msDocsPrintor.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../redux/themeAction";

const MsDocPrintor = () => {
   const dispatch = useDispatch();
   const data = useSelector((state) => state);
   console.log(data, "data");
  return (
    <div
      className="mainContainer"
      onClick={() => {
        dispatch(updateValue("Windows"));
      }}
    >
      <div class="mainContainer__img-container"></div>
      <p className="mainContainer__title">MS Dos Printer</p>
    </div>
  );
}

export default MsDocPrintor