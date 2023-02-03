import React from 'react'
import "./windowsPrintor.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from '../redux/themeAction';

const WindowsPrintor = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.theme);
    console.log(data, "data");
  return (
    <div
      className="mainContainer"
      onClick={() => {
        dispatch(updateValue("msDocs"));
      }}
    >
      <div class="mainContainer__img-container"></div>
      <p className="mainContainer__title">Windows Printer</p>
    </div>
  );
}

export default WindowsPrintor