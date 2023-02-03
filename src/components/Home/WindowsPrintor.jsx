import React from "react";
import "./windowsPrintor.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../../redux/themeAction";
import { useNavigate } from "react-router-dom";

const WindowsPrintor = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theme);
  localStorage.setItem("theme", data.theme);
  const navigate = useNavigate();

  return (
    <div
      className="mainContainer"
      onClick={() => {
        dispatch(updateValue("Windows"));
        navigate("/1");
      }}
    >
      <div class="mainContainer__img-container__win"></div>
      <p className="mainContainer__title">Windows Printer</p>
    </div>
  );
};

export default WindowsPrintor;
