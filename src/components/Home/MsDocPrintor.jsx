import React from "react";
import "./msDocsPrintor.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../../redux/themeAction";
import { useNavigate } from "react-router-dom";

const MsDocPrintor = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theme);
  localStorage.setItem("theme", data.theme);
  const navigate = useNavigate();
  
  return (
    <div
      className="mainContainer"
      onClick={() => {
        dispatch(updateValue("msDocs"));
        navigate("/1");
      }}
    >
      <div class="mainContainer__img-container"></div>
      <p className="mainContainer__title">MS Dos Printer</p>
    </div>
  );
};

export default MsDocPrintor;
